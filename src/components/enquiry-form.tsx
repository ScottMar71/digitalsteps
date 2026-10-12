"use client";

import { useActionState } from "react";
import { sendEnquiry, type EnquiryState } from "@/app/(site)/contact/actions";
import { site } from "@/content/site";
import { topics } from "@/content/topics";

const initial: EnquiryState = { status: "idle" };

export function EnquiryForm({ defaultTopic = "" }: { defaultTopic?: string }) {
  const [state, action, pending] = useActionState(sendEnquiry, initial);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  if (state.status === "ok") {
    return (
      <div className="notice notice-ok" role="status">
        <h2>Thank you. Your message is on its way.</h2>
        <p>
          We reply within {site.responseTime}, usually sooner. If it is urgent, email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="form" noValidate>
      {state.message ? (
        <div className="notice" role="alert">
          <p style={{ margin: 0, color: "var(--ink)" }}>{state.message}</p>
        </div>
      ) : null}

      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" className="input" autoComplete="name" required defaultValue={v.name} aria-invalid={e.name ? true : undefined} aria-describedby={e.name ? "name-error" : undefined} />
        {e.name ? <span id="name-error" className="field-error">{e.name}</span> : null}
      </div>

      <div className="field">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" className="input" autoComplete="email" inputMode="email" defaultValue={v.email} aria-invalid={e.email ? true : undefined} aria-describedby={e.email ? "email-error" : "email-hint"} />
        {e.email ? <span id="email-error" className="field-error">{e.email}</span> : <span id="email-hint" className="hint">Email or phone, whichever you prefer. We need at least one.</span>}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone number (optional)</label>
        <input id="phone" name="phone" type="tel" className="input" autoComplete="tel" inputMode="tel" defaultValue={v.phone} />
      </div>

      <div className="field">
        <label htmlFor="topic">What is this about?</label>
        <select id="topic" name="topic" className="input" defaultValue={v.topic ?? defaultTopic} aria-invalid={e.topic ? true : undefined} aria-describedby={e.topic ? "topic-error" : undefined}>
          <option value="">Please choose</option>
          {topics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {e.topic ? <span id="topic-error" className="field-error">{e.topic}</span> : null}
      </div>

      <div className="field">
        <label htmlFor="message">Tell us a little about it (optional)</label>
        <textarea id="message" name="message" className="input" defaultValue={v.message} aria-describedby="message-hint" />
        <span id="message-hint" className="hint">
          A sentence is plenty. For example: &ldquo;I would like help with email on my iPad&rdquo; or &ldquo;We are a team of eight and nobody uses Teams.&rdquo;
        </span>
      </div>

      {/* Spam protection that never bothers a person. */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={String(Date.now())} />

      <p className="hint">
        We use what you send only to reply to you. See our <a href="/privacy">privacy policy</a>.
      </p>

      <div className="actions" style={{ marginTop: 0 }}>
        <button type="submit" className="button" disabled={pending}>
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
