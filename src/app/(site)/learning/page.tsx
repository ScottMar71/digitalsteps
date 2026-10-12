import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { learning } from "@/content/services";

export const metadata: Metadata = {
  title: learning.metaTitle,
  description: learning.description,
  alternates: { canonical: "/learning" },
};

export default function Page() {
  return <ServicePage data={learning} pillar="learning" />;
}
