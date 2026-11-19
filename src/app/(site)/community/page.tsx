import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Community projects",
  description:
    "Digital Steps builds websites for local clubs, charities, pubs and independent businesses.",
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

      <section className="section">
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

      <CtaBand title="Running a club, a pub or a small charity?" body="Tell us who you are trying to reach. We will suggest a small site and a sensible price." />
    </>
  );
}
