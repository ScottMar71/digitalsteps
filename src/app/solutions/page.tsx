import type { Metadata } from "next";
import { OfferPage } from "@/components/offer-page";
import { areas, solutionTopics } from "@/lib/site";

const area = areas[2];

export const metadata: Metadata = {
  title: "Solutions",
  description: area.body,
};

export default function SolutionsPage() {
  return (
    <OfferPage
      name={area.name}
      number={area.number}
      title={area.title}
      line={area.line}
      intro={area.body}
      topics={solutionTopics}
      tone={area.tone}
    />
  );
}
