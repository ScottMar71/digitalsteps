import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { work } from "@/content/work";

const routes = [
  "",
  "/learning",
  "/business",
  "/solutions",
  "/websites",
  "/apps",
  "/it-support",
  "/pricing",
  "/about",
  "/work",
  "/contact",
  "/privacy",
  "/cookies",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...routes.map((path) => ({ url: `${site.url}${path}`, lastModified: now })),
    ...work.map((w) => ({ url: `${site.url}/work/${w.slug}`, lastModified: now })),
  ];
}
