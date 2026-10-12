import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { business } from "@/content/services";

export const metadata: Metadata = {
  title: business.metaTitle,
  description: business.description,
  alternates: { canonical: "/business" },
};

export default function Page() {
  return <ServicePage data={business} pillar="business" />;
}
