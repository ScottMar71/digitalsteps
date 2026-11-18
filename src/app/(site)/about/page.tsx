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
  [
    "Built around you",
    "Every site starts with the business and its customers. The layout follows from that, not the other way round.",
  ],
  ["Plain English", "Every decision, and every invoice, is explained clearly and simply."],
  [
    "A single point of contact",
    "The person who scopes your project is the same person who designs it, builds it and answers your emails.",
  ],
  [
    "Honest scope",
    "You get what your business needs. We won't add features just to make the bill bigger, and we'll always explain why.",
  ],
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
              Digital Steps is a web design and branding studio based in Norfolk and Suffolk. We design and build
              bespoke websites, create brand identities and provide hosting and ongoing support for small businesses,
              independents, start-ups and community organisations.
            </p>
            <p>
              The studio was founded by Scott Maryan, who brings more than 20 years&apos; experience in learning,
              enablement and digital systems, helping people understand and use complex technology with confidence.
              That experience shapes how we work. A website is only finished when the owner understands it, trusts it
              and knows exactly where to go for help.
            </p>
            <p>
              Our portfolio includes live products we have designed, built and run ourselves, including Norfolk Run
              Collective, RunPilot and RunPattern. They are there because our work should stand up in public, not just
              in a mock-up.
            </p>
            <p>
              Affordable, at Digital Steps, means a fair price for careful work. It never means a template, a rushed
              handover or a site you would rather not show anyone.
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
              Based in Norfolk and Suffolk, working with businesses and community organisations across the UK. We reply
              to every enquiry within one working day.
            </p>
          </div>
        </div>
      </section>
      <CtaBand
        title="Shall we start with a conversation?"
        body="Tell us about your business and we'll come back with a sensible first step and, if it helps, a clear, written price."
      />
    </>
  );
}
