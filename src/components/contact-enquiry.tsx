"use client";

import { useSearchParams } from "next/navigation";
import { EnquiryForm } from "@/components/enquiry-form";

const allowed = new Set([
  "computer-tuition",
  "group-courses",
  "business-training",
  "website",
  "app",
  "other",
]);

export function ContactEnquiry() {
  const requested = useSearchParams().get("type") ?? "";
  const defaultType = allowed.has(requested) ? requested : "";

  return <EnquiryForm idPrefix="contact" defaultType={defaultType} />;
}
