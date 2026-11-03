import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Hosting and support",
  description:
    "Website hosting, SSL, domains, email forwarding, backups and plain-English support from Digital Steps. Updates and technical help without the jargon.",
  alternates: { canonical: "/hosting" },
};

const hosting = [
  ["Secure hosting", "The site stays online, on hosting we understand and can actually do something about."],
  ["SSL certificates", "The padlock is included, so visitors are not warned away at the front door."],
  ["Domain management", "Your name, renewed and pointed at the right place. No scavenger hunt when it expires."],
  ["Email forwarding", "A proper address that arrives with a person, not a mailbox nobody opens."],
  ["Website backups", "A copy, kept, so a mistake or a bad day is recoverable."],
  ["Ongoing technical support", "The unglamorous work: updates, checks, and a reply when something looks odd."],
];

const support = [
  ["Website updates", "A new price, a new photo, a closed week. Sent, changed, confirmed."],
  ["Content changes", "Words edited with you, not dumped into a form and hoped for the best."],
  ["Technical assistance", "The contact form, the domain, the thing that worked yesterday. Looked at properly."],
  ["Website maintenance", "The quiet upkeep that stops a small site becoming a fragile one."],
  ["Advice", "If you do not need a new feature, we will say so. If you do, we will explain it first."],
];

export default function HostingPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Hosting & support</p>
          <h1>Looked after, in language you can use.</h1>
          <p className="lede">
            Hosting, security and the small changes that keep a site useful. One place to ask, and an answer that does not require a glossary.
          </p>
          <div className="actions">
            <Link className="button" href="/contact?topic=hosting">
              Ask about care
            </Link>
            <Link className="button-quiet" href="/pricing">
              See packages
            </Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container host-grid">
          <div id="hosting">
            <p className="eyebrow">Hosting</p>
            <h2>The site has a home, and someone has the keys.</h2>
            <ul className="plain-list">
              {hosting.map(([title, body]) => (
                <li key={title}>
                  <strong>{title}.</strong> {body}
                </li>
              ))}
            </ul>
          </div>
          <div id="support">
            <p className="eyebrow">Support</p>
            <h2>A change should not become a project.</h2>
            <ul className="plain-list">
              {support.map(([title, body]) => (
                <li key={title}>
                  <strong>{title}.</strong> {body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand title="Already have a site that needs a person?" body="We can look after a site we did not build, once we have seen it and agreed what is sensible." />
    </>
  );
}
