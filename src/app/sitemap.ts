import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "",
  "/it-tuition",
  "/business-training",
  "/websites-and-apps",
  "/about",
  "/contact",
  "/privacy",
  "/cookies",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NODE_ENV === "development" ? "http://localhost:3000" : site.url;

  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
