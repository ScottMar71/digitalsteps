import type { Metadata } from "next";
import Link from "next/link";
import { Band, Cta, PageHead, Section, Steps, WorkCards } from "@/components/sections";
import { apps, itSupport, process, websites } from "@/content/services";
import { workFor } from "@/content/work";

export const metadata: Metadata = {
  title: "Websites, apps and IT support for small businesses",
  description:
    "Digital Steps Solutions: website development, app building, automation and friendly IT support in Norfolk and Suffolk. Built step by step and handed over with the understanding to run it.",
  alternates: { canonical: "/solutions" },
};

const routes = [
  { slug: "websites", data: websites, short: "Fast, mobile-first sites you can update yourself." },
  { slug: "apps", data: apps, short: "Prototypes, web apps, automation and bespoke tools." },
  { slug: "it-support", data: itSupport, short: "A named person to call, who explains what happened." },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHead
        kicker="Digital Steps Solutions"
        title={
          <>
            Built for you, <em>and explained to you.</em>
          </>
        }
        lede="Websites, apps, automation and support for small businesses, clubs and sole traders. We hand over something you understand, and we teach you to run it."
      />

      <Section id="what" title="What we do">
        <div className="grid grid-3">
          {routes.map((r) => (
            <Link key={r.slug} href={`/${r.slug}`} className="tile">
              <span className="tile-label">{r.short}</span>
              <h3>{r.data.title}</h3>
              <p>{r.data.lede}</p>
              <span className="tile-more">Find out more →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="process" title="How every project runs" intro="The same four steps whether it is a five-page website or a bespoke tool.">
        <Steps items={process} />
      </Section>

      <Band cta={false} />

      <Section id="work" title="Recent solutions work">
        <WorkCards items={workFor("solutions")} />
      </Section>

      <Cta topic="websites" />
    </>
  );
}
