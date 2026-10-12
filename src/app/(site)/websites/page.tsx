import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { websites } from "@/content/services";

export const metadata: Metadata = {
  title: websites.metaTitle,
  description: websites.description,
  alternates: { canonical: "/websites" },
};

export default function Page() {
  return <ServicePage data={websites} pillar="solutions" />;
}
