import type { Metadata } from "next";
import { OfferPage } from "@/components/offer-page";
import { solutionTopics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Website development, app building, automation and practical digital support.",
};

export default function SolutionsPage() {
  return (
    <OfferPage
      eyebrow="Build what matters"
      title="Digital tools made useful."
      intro="Websites, apps and automation shaped around the people who will actually use them, with support after the build."
      topics={solutionTopics}
    />
  );
}
