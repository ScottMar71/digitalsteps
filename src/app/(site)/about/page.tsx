import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Digital Steps",
  description:
    "Digital Steps is a website design, branding and hosting studio run by Scott Maryan in Norfolk and Suffolk. Bespoke sites, personal service and sensible prices.",
  alternates: { canonical: "/about" },
};

const principles = [
  ["Built around you", "The site starts from the business and its customers. The layout is a result, not a starting point we already had."],
  ["Plain English", "If a decision cannot be explained simply, it is not ready. That includes the invoice."],
  ["One person", "Scott designs the work, builds it and answers the email. There is no account manager in between."],
  ["Honest scope", "You get what the business needs. Features that would only make the bill larger get left out, and we say why."],
];

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>A studio for businesses that want the work done properly.</h1>
          <p className="lede">{site.proposition}</p>
        </div>
      </header>

      <section className="section">
        <div className="container split">
          <div className="prose" style={{ marginTop: 0 }}>
            <p className="lede">
              Hello, I&apos;m {site.founderFirstName}. Digital Steps is my studio. I design and build websites, shape brands, and look after the hosting afterwards, for small businesses, independents, start-ups and community groups.
            </p>
            <p>
              I qualified as a teacher in 2004 and spent the years after that explaining complicated systems to the people who had to use them. That is still the useful part. A website is only finished when the owner understands it well enough to trust it, change a sentence, and know who to ask next.
            </p>
            <p>
              The studio is based in {site.area}. The running projects in the portfolio are mine too: I run, and I build the tools I wanted as a runner. Norfolk Run Collective, RunPilot and RunPattern are live. They are there because the work should be able to stand up in public.
            </p>
            <p>
              Affordable, here, means a fair price for careful work. It does not mean a template, a rushed handover, or a site you will want to apologise for.
            </p>
            <p>
              The longer working history is on{" "}
              <a href={site.linkedin} rel="noopener noreferrer">
                LinkedIn
              </a>
              .
            </p>
          </div>
          <div>
            <p className="eyebrow">How we work</p>
            <ul className="plain-list">
              {principles.map(([title, body]) => (
                <li key={title}>
                  <strong>{title}.</strong> {body}
                </li>
              ))}
            </ul>
            <p className="lede" style={{ marginTop: "1.5rem" }}>
              {site.areaDetail} We reply within {site.responseTime}.
            </p>
          </div>
        </div>
      </section>
      <CtaBand title="Shall we start with a conversation?" body="Tell us about the business. We will reply with a sensible first step and, if it is useful, a clear price." />
    </>
  );
}
