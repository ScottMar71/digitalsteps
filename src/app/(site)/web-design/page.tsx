import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Device } from "@/components/device";
import { Inclusions } from "@/components/inclusions";

export const metadata: Metadata = {
  title: "Web design",
  description:
    "Bespoke website design for small businesses, start-ups and independents in Norfolk and Suffolk. No templates. Designed around your customers and priced for a real budget.",
  alternates: { canonical: "/web-design" },
};

const kinds = [
  ["Business websites", "The pages a customer actually needs: what you do, who you are, how to start."],
  ["Small business websites", "Enough structure to look established, without a manual nobody will read."],
  ["Portfolio websites", "The work in front, with a way to enquire that does not fight the pictures."],
  ["Start-up websites", "A clear offer and a credible first impression while the business is still becoming itself."],
  ["Landing pages", "One idea, one action, and nothing else competing with it."],
  ["Website redesigns", "Keep the parts people already trust. Replace the parts that make the business look smaller than it is."],
  ["Custom functionality", "Booking notes, membership details, a planner, a dashboard. Built because the business needs it."],
];

const steps = [
  ["01", "Listen", "What the business does, who it is for, and what the site has to make easier."],
  ["02", "Shape", "Structure, words and a direction before anything is decorated."],
  ["03", "Design", "A site that could only belong to this business. Desktop and phone, together."],
  ["04", "Hand over", "Launch, a walkthrough, and thirty days to adjust the things real use reveals."],
];

export default function WebDesignPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Web design</p>
          <h1>Designed around the business. Not around a template.</h1>
          <p className="lede">
            Business sites, portfolios, start-ups, landing pages and redesigns. Each one is drawn up for the people who will use it, then built to be looked after.
          </p>
          <div className="actions">
            <Link className="button" href="/contact?topic=website">
              Let&apos;s Build Your Website
            </Link>
            <Link className="button-quiet" href="/work">
              Explore Our Work
            </Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">The range</p>
            <h2>The kind of site depends on the job it has to do.</h2>
            <ul className="plain-list">
              {kinds.map(([title, body]) => (
                <li key={title}>
                  <strong>{title}.</strong> {body}
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky-visual">
            <Device
              kind="laptop"
              src="/work/own-your-time.jpg"
              alt="Design example of a product website on a laptop."
              sizes="(max-width: 800px) 100vw, 540px"
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How a project runs</p>
            <h2>Four steps. No mystery phase in the middle.</h2>
          </div>
          <div className="process">
            {steps.map(([n, title, body]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Inclusions heading="Included with the website" />
      <CtaBand title="Tell us what the site needs to do." body="A sentence about the business is enough to start. We'll reply with a sensible shape and a written price." />
    </>
  );
}
