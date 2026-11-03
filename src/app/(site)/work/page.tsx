import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { WorkCard } from "@/components/work-card";
import { workByStatus, type WorkStatus } from "@/content/work";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Websites and products from Digital Steps: live projects including Norfolk Run Collective, RunPilot and RunPattern, plus labelled design examples and concept studies.",
  alternates: { canonical: "/work" },
};

const groups: { status: WorkStatus; title: string; note: string }[] = [
  {
    status: "live",
    title: "Live projects",
    note: "Online now. Open the case study for the story, or visit the site itself.",
  },
  {
    status: "example",
    title: "Design examples",
    note: "Layouts made to show range. They are not completed client projects.",
  },
  {
    status: "concept",
    title: "Concept studies",
    note: "Ideas for industries we like to work with. The names are not clients.",
  },
];

export default function WorkPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Our work</p>
          <h1>Different businesses. Completely different sites.</h1>
          <p className="lede">
            A running club, a product, a platform, and studies for pubs, trades, charities and studios. The label on each piece tells you whether it is live, an example, or a concept.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {groups.map((group) => (
            <div key={group.status}>
              <div className="group-label">
                <h2>{group.title}</h2>
                <p>{group.note}</p>
              </div>
              <div className="work-grid">
                {workByStatus(group.status).map((item) => (
                  <WorkCard key={item.slug} item={item} frame={item.presentation === "photo" ? "browser" : item.slug === "runpattern" ? "laptop" : "browser"} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
