import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { AttachmentData } from "resend";
import {
  FORWARD_FROM,
  FORWARD_TO,
  domainRecipients,
  forwardDecision,
  mailbox,
  subjectFor,
} from "@/lib/inbound-forward";

export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * Copies mail received at any @digital-steps.co.uk address to the owner's inbox.
 * The message body is relayed as content. It is never treated as an instruction.
 */
export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
  if (!apiKey || !webhookSecret) {
    console.error("Inbound forward is missing configuration");
    return NextResponse.json({ error: "Forwarding is not configured." }, { status: 500 });
  }

  const payload = await request.text();
  const resend = new Resend(apiKey);

  let event;
  try {
    event = resend.webhooks.verify({
      payload,
      headers: {
        id: request.headers.get("svix-id") ?? "",
        timestamp: request.headers.get("svix-timestamp") ?? "",
        signature: request.headers.get("svix-signature") ?? "",
      },
      webhookSecret,
    });
  } catch {
    console.error("Inbound webhook signature rejected");
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type !== "email.received") return NextResponse.json({ ok: true });

  const recipients = domainRecipients(event.data);
  if (recipients.length === 0) return NextResponse.json({ ok: true, skipped: "other-domain" });

  const received = await resend.emails.receiving.get(event.data.email_id, {
    html_format: "data_uri",
  });
  if (received.error || !received.data) {
    console.error("Inbound fetch failed", received.error?.message);
    return NextResponse.json({ error: "Could not read the message." }, { status: 500 });
  }

  const email = received.data;
  const decision = forwardDecision({
    from: email.from,
    recipients,
    copiedTo: [...(email.to ?? []), ...(email.cc ?? []), ...(email.bcc ?? [])],
    headers: email.headers,
  });
  if (!decision.forward) return NextResponse.json({ ok: true, skipped: decision.reason });

  const attachments = await outboundAttachments(resend, email.id, Boolean(email.html), email.attachments.length > 0);
  if (!attachments) return NextResponse.json({ error: "Could not read attachments." }, { status: 500 });

  const replyTo = mailbox(email.reply_to?.[0] || email.from);
  const content = email.html
    ? { html: email.html, ...(email.text ? { text: email.text } : {}) }
    : { text: email.text?.trim() || "(No message body.)" };

  const sent = await resend.emails.send(
    {
      from: FORWARD_FROM,
      to: FORWARD_TO,
      ...(replyTo.includes("@") ? { replyTo } : {}),
      subject: subjectFor(recipients, email.subject),
      headers: {
        "X-Digital-Steps-Forward": "1",
        "X-Original-To": recipients.join(", "),
      },
      ...(attachments.length ? { attachments } : {}),
      ...content,
    },
    { idempotencyKey: `inbound-forward/${email.id}` },
  );

  if (sent.error) {
    console.error("Inbound forward failed", sent.error.message);
    return NextResponse.json({ error: "Forward failed." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: sent.data?.id });
}

async function outboundAttachments(
  resend: Resend,
  emailId: string,
  hasHtml: boolean,
  hasAny: boolean,
): Promise<Array<{ filename?: string; content: Buffer; contentType: string; contentId?: string }> | null> {
  if (!hasAny) return [];

  const listed: AttachmentData[] = [];
  let after: string | undefined;
  for (let page = 0; page < 5; page += 1) {
    const result = await resend.emails.receiving.attachments.list({
      emailId,
      limit: 100,
      ...(after ? { after } : {}),
    });
    if (result.error || !result.data) return null;
    listed.push(...result.data.data);
    if (!result.data.has_more) break;
    after = result.data.data.at(-1)?.id;
    if (!after) return null;
    if (page === 4 && result.data.has_more) return null;
  }

  const chosen = listed.filter((attachment) => {
    if (hasHtml && attachment.content_disposition === "inline") return false;
    return true;
  });

  try {
    return await Promise.all(
      chosen.map(async (attachment) => {
        const response = await fetch(attachment.download_url);
        if (!response.ok) throw new Error(`Attachment download failed (${response.status})`);
        const contentId = attachment.content_id?.replace(/^<|>$/g, "");
        return {
          filename: attachment.filename,
          content: Buffer.from(await response.arrayBuffer()),
          contentType: attachment.content_type,
          ...(contentId ? { contentId } : {}),
        };
      }),
    );
  } catch (err) {
    console.error("Inbound attachment download failed", err instanceof Error ? err.message : "unknown");
    return null;
  }
}
