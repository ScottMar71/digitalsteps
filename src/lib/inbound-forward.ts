/** Routing rules for copying inbound digital-steps.co.uk mail to one inbox. */

export const INBOUND_DOMAIN = "digital-steps.co.uk";
export const FORWARD_TO = "scott.maryan@icloud.com";
export const FORWARD_FROM = "Digital Steps <hello@digital-steps.co.uk>";
export const FORWARD_FROM_ADDRESS = "hello@digital-steps.co.uk";
export const FORWARD_HEADER = "x-digital-steps-forward";

export function mailbox(value: string): string {
  const match = value.match(/<([^>]+)>/);
  return (match?.[1] ?? value).trim().toLowerCase();
}

export function domainRecipients(fields: {
  to?: string[] | null;
  cc?: string[] | null;
  bcc?: string[] | null;
  received_for?: string[] | null;
}): string[] {
  const all = [
    ...(fields.received_for ?? []),
    ...(fields.to ?? []),
    ...(fields.cc ?? []),
    ...(fields.bcc ?? []),
  ];
  const seen = new Set<string>();
  for (const raw of all) {
    const address = mailbox(raw);
    if (address.endsWith(`@${INBOUND_DOMAIN}`)) seen.add(address);
  }
  return [...seen];
}

export function subjectFor(recipients: string[], subject: string): string {
  const labels = recipients.map((address) => address.split("@")[0] || address).join(", ");
  const clean = subject.trim() || "(no subject)";
  const prefixed = `[${labels}] ${clean}`;
  return prefixed.length > 900 ? prefixed.slice(0, 900) : prefixed;
}

function headerMap(headers: Record<string, string> | null): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(headers ?? {})) out[key.toLowerCase()] = value;
  return out;
}

export function forwardDecision(input: {
  from: string;
  recipients: string[];
  copiedTo: string[];
  headers: Record<string, string> | null;
}): { forward: true } | { forward: false; reason: string } {
  if (input.recipients.length === 0) return { forward: false, reason: "other-domain" };

  const from = mailbox(input.from);
  if (from === FORWARD_FROM_ADDRESS) return { forward: false, reason: "own-sender" };
  if (from.startsWith("mailer-daemon@") || from.startsWith("postmaster@")) {
    return { forward: false, reason: "mailer-daemon" };
  }

  const headers = headerMap(input.headers);
  if (headers[FORWARD_HEADER] === "1") return { forward: false, reason: "already-forwarded" };
  if ((headers["auto-submitted"] ?? "").toLowerCase().startsWith("auto-replied")) {
    return { forward: false, reason: "auto-reply" };
  }

  if (input.copiedTo.some((value) => mailbox(value) === FORWARD_TO)) {
    return { forward: false, reason: "already-addressed" };
  }

  return { forward: true };
}
