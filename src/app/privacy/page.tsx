import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Digital Steps handles information sent through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <h1 className="text-4xl leading-10 font-medium text-deep">Privacy policy</h1>
      <p className="mt-4 text-sm leading-6 text-charcoal">
        This page is a plain-language starting point. It should be reviewed before you rely on it as a legal notice.
      </p>
      <div className="mt-8 grid gap-6 text-base leading-7 text-charcoal">
        <p>
          {site.name} uses this website to explain IT tuition, training and digital project services.
          The enquiry form does not store messages on the website. If you choose to send an enquiry, your
          email app opens and you send the message yourself.
        </p>
        <p>
          Please do not include passwords, payment card numbers or sensitive personal records in an enquiry.
          A name, an email address and a short description of what you want to learn or build is enough.
        </p>
        <p>
          If an inbox is connected later, the business should say who receives the message, how long it is
          kept, and how you can ask for it to be corrected or deleted. That detail is not in place yet.
        </p>
        {site.email ? (
          <p>
            Questions about this page can be sent to{" "}
            <a className="font-medium text-deep underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        ) : null}
      </div>
    </article>
  );
}
