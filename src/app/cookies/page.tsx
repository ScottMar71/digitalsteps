import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie information",
  description: "What this Digital Steps website stores in your browser.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <h1 className="text-4xl leading-10 font-medium text-deep">Cookie information</h1>
      <div className="mt-8 grid gap-6 text-base leading-7 text-charcoal">
        <p>
          This website does not set advertising or analytics cookies. It does not use a cookie banner
          because there is no optional tracking to accept or refuse.
        </p>
        <p>
          The hosting platform may keep short technical logs, such as a page request, so the site can
          be kept online and faults can be investigated. Those logs are not used here to build a
          marketing profile.
        </p>
        <p>
          If analytics or marketing tools are added later, this page should be updated first and a
          choice should be offered before any non-essential cookie is set.
        </p>
      </div>
    </article>
  );
}
