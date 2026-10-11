import type { Metadata } from "next";
import { OfferPage } from "@/components/offer-page";
import { learningTopics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Patient computer tuition, online safety, Office skills and AI for beginners, at your pace.",
};

export default function LearnPage() {
  return (
    <OfferPage
      eyebrow="Learn at your pace"
      title="Confidence for everyday life."
      intro="Patient, practical help with your computer. No jargon. No pressure. Lessons move at the pace that lets the next step stick."
      topics={learningTopics}
    />
  );
}
