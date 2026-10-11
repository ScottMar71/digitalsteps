import type { Metadata } from "next";
import { OfferPage } from "@/components/offer-page";
import { businessTopics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Business",
  description: "Workplace digital skills, staff training, AI adoption and workshops for teams.",
};

export default function BusinessPage() {
  return (
    <OfferPage
      eyebrow="Grow with confidence"
      title="Capability that moves teams."
      intro="Training that is professional enough for the workplace and clear enough for people who are still finding their feet with new tools."
      topics={businessTopics}
    />
  );
}
