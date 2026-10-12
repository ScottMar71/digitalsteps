import type { Metadata } from "next";
import { Cta, PageHead, Section, WorkCards } from "@/components/sections";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Websites, web apps and training delivered by Digital Steps, with the problem each one solved, what we did and what changed.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const built = work.filter((w) => w.pillar === "solutions");
  const taught = work.filter((w) => w.pillar !== "solutions");

  return (
    <>
      <PageHead
        kicker="Our work"
        title={
          <>
            The problem, what we did, <em>and what changed.</em>
          </>
        }
        lede="Every project is written up the same way, in plain English. Items marked Example are illustrative case studies while we gather permission to share real ones."
      />

      <Section id="built" title="Websites and apps">
        <WorkCards items={built} />
      </Section>

      <Section id="taught" title="Teaching and training">
        <WorkCards items={taught} />
      </Section>

      <Cta title="Got something similar in mind?" />
    </>
  );
}
