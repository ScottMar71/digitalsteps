"use server";

import { site } from "@/content/site";
import { isTopic, topics } from "@/content/topics";

export type EnquiryState = {
  status: "idle" | "ok" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "topic" | "message", string>>;
  values?: Record<string, string>;
};

const MIN_SECONDS_ON_PAGE = 3;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  return hits.length > MAX_PER_WINDOW;
}

function text(fd: FormData, key: string) {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export async function sendEnquiry(_prev: EnquiryState, fd: FormData): Promise<EnquiryState> {
  const values = {
    name: text(fd, "name"),
    email: text(fd, "email"),
    phone: text(fd, "phone"),
    topic: text(fd, "topic"),
    message: text(fd, "message"),
  };

  // Spam checks: a hidden field humans never see, and a minimum time on page.
  if (text(fd, "website")) return { status: "ok" };
  const started = Number(text(fd, "startedAt"));
  if (started && Date.now() - started < MIN_SECONDS_ON_PAGE * 1000) return { status: "ok" };

  const errors: EnquiryState["errors"] = {};
  if (values.name.length < 2) errors.name = "Please tell us your name.";
  if (!values.email && !values.phone) {
    errors.email = "Please add an email address or a phone number so we can reply.";
  } else if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email address does not look right. Please check it.";
  }
  if (!isTopic(values.topic)) errors.topic = "Please choose what this is about.";
  if (values.message.length > 4000) errors.message = "Please keep your message under 4,000 characters.";
  if (Object.keys(errors).length) return { status: "error", errors, values };

  if (rateLimited(values.email || values.phone)) {
    return {
      status: "error",
      message: `We have had a few messages from this address in a short time. Please email ${site.email} instead.`,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO;
  const from = process.env.ENQUIRY_FROM ?? "Digital Steps <onboarding@resend.dev>";
  if (!apiKey || !to) {
    return {
      status: "error",
      message: `The enquiry form is not connected yet. Please email ${site.email} and we will reply within ${site.responseTime}.`,
      values,
    };
  }

  const topicLabel = topics.find((t) => t.value === values.topic)?.label ?? values.topic;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email || "not given"}`,
    `Phone: ${values.phone || "not given"}`,
    `About: ${topicLabel}`,
    "",
    values.message || "(no message)",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email || undefined,
        subject: `Enquiry: ${topicLabel} — ${values.name}`,
        text: body,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}`);
  } catch (err) {
    console.error("Enquiry send failed", err);
    return {
      status: "error",
      message: `Sorry, the message did not send. Please try again, or email ${site.email} directly.`,
      values,
    };
  }

  return { status: "ok" };
}
