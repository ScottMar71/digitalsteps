import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Device } from "@/components/device";
import { WorkCard } from "@/components/work-card";
import { caseStudy, work } from "@/content/work";

export const metadata: Metadata = {
  title: "Community projects",
  description:
    "Digital Steps builds websites for local clubs, charities, pubs and independent businesses. Norfolk Run Collective is a live example. Other studies on this page are concepts.",
  alternates: { canonical: "/community" },
};

const groups = [
  ["Community sports clubs", "Fixtures, training times and a welcome that a nervous newcomer can read the night before."],
  ["Running clubs", "Where to meet, how far, and proof that beginners are expected, not tolerated."],
  ["Pubs and hospitality", "The menu, the rooms, and a table people can ask for without phoning at the wrong moment."],
  ["Independent businesses", "A shop, a studio or a trade that deserves more than a listing on someone else's site."],
  ["Charities and community groups", "Who you help, when you are open, and one clear way to take part."],
];

export default function CommunityPage() {
  const nrc = caseStudy("norfolk-run-collective");
  const studies = work.filter((item) => item.community && item.slug !== "norfolk-run-collective");

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Local community</p>
          <h1>Smaller organisations deserve a proper front door.</h1>
          <p className="lede">
            Clubs, charities, pubs and independents are part of the studio, not a favour we mention at the bottom of the page. Norfolk and Suffolk first. The same care either way.
          </p>
          <div className="actions">
            <Link className="button" href="/contact?topic=community">
              Talk about a community site
            </Link>
          </div>
        </div>
      </header>

      {nrc ? (
        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">Live project</p>
              <h2>Norfolk Run Collective</h2>
              <p className="lede">{nrc.summary}</p>
              <p className="honesty">
                <strong>Live project.</strong>
                <span>{nrc.honesty}</span>
              </p>
              <div className="actions">
                <Link className="button" href={`/work/${nrc.slug}`}>
                  Read the project
                </Link>
                <a className="button-quiet" href={nrc.url} rel="noopener noreferrer">
                  Visit the club site
                </a>
              </div>
            </div>
            <Device kind="browser" src={nrc.image?.src} alt={nrc.image?.alt ?? ""} sizes="(max-width: 800px) 100vw, 560px" />
          </div>
        </section>
      ) : null}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Who this is for</p>
            <h2>The groups we want to see online.</h2>
          </div>
          <ul className="plain-list">
            {groups.map(([title, body]) => (
              <li key={title}>
                <strong>{title}.</strong> {body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Concept studies</p>
            <h2>How that work can look.</h2>
            <p className="section-lede">
              These are studies for a pub, a charity and the kind of brief a club brings us. They are not client projects.
            </p>
          </div>
          <div className="work-grid">
            {studies.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Running a club, a pub or a small charity?" body="Tell us who you are trying to reach. We will suggest a small site and a sensible price." />
    </>
  );
}
