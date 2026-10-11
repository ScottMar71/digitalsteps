import type { Metadata } from "next";
import { OfferPage } from "@/components/offer-page";
import { areas, businessTopics } from "@/lib/site";

const area = areas[1];

export const metadata: Metadata = {
  title: "Business",
  description: area.body,
};

export default function BusinessPage() {
  return (
    <OfferPage
      name={area.name}
      number={area.number}
      title={area.title}
      line={area.line}
      intro={area.body}
      topics={businessTopics}
      tone={area.tone}
    />
  );
}
