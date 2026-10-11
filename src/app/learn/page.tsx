import type { Metadata } from "next";
import { OfferPage } from "@/components/offer-page";
import { areas, learningTopics } from "@/lib/site";

const area = areas[0];

export const metadata: Metadata = {
  title: "Learning",
  description: area.body,
};

export default function LearnPage() {
  return (
    <OfferPage
      name={area.name}
      number={area.number}
      title={area.title}
      line={area.line}
      intro={area.body}
      topics={learningTopics}
      tone={area.tone}
    />
  );
}
