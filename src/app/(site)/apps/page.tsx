import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { apps } from "@/content/services";

export const metadata: Metadata = {
  title: apps.metaTitle,
  description: apps.description,
  alternates: { canonical: "/apps" },
};

export default function Page() {
  return <ServicePage data={apps} pillar="solutions" />;
}
