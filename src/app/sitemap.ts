import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { work } from "@/content/work";

const routes = [
  "",
  "/web-design",
  "/branding",
  "/hosting",
  "/work",
  "/community",
  "/pricing",
  "/about",
  "/contact",
  "/privacy",
  "/cookies",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...routes.map((path) => ({ url: `${site.url}${path}`, lastModified: now })),
    ...work.map((item) => ({ url: `${site.url}/work/${item.slug}`, lastModified: now })),
  ];
}
