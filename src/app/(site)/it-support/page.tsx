import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { itSupport } from "@/content/services";

export const metadata: Metadata = {
  title: itSupport.metaTitle,
  description: itSupport.description,
  alternates: { canonical: "/it-support" },
};

export default function Page() {
  return <ServicePage data={itSupport} pillar="solutions" />;
}
