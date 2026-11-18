import type { Metadata } from "next";
import { ShowpieceHome, type ShowProject } from "@/components/showpiece-home";
import { caseStudy } from "@/content/work";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Digital Steps · Websites worth opening" },
  description: site.description,
  alternates: { canonical: "/" },
};

const featured = ["norfolk-run-collective", "runpattern"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: ["Norfolk", "Suffolk", "United Kingdom"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Norfolk",
    addressCountry: "GB",
  },
};

function liveProjects(): ShowProject[] {
  return featured.flatMap((slug) => {
    const item = caseStudy(slug);
    if (!item?.image || !item.url) return [];
    return [
      {
        slug: item.slug,
        name: item.name,
        image: item.image.src,
        url: item.url,
      },
    ];
  });
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ShowpieceHome projects={liveProjects()} />
    </>
  );
}
