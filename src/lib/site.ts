export const site = {
  name: "Digital Steps",
  description: "Technology made simple. Confidence built step by step.",
  url: "https://digital-steps.co.uk",
  email: "hello@digitalsteps.co.uk",
  strapline: "Technology made simple. Confidence built step by step.",
  headline: "One step closer to digital confidence.",
  barrier: "Technology shouldn't be a barrier.",
} as const;

export const nav = [
  { href: "/learn", label: "Learn" },
  { href: "/business", label: "Business" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
] as const;

export const areas = [
  {
    number: "01",
    name: "Learning",
    title: "Confidence for everyday life.",
    line: "Tuition · Online safety · AI basics",
    body: "Computer tuition, IT fundamentals, smartphones, software, online safety and AI for beginners.",
    href: "/learn",
    tone: "mint",
  },
  {
    number: "02",
    name: "Business",
    title: "Capability that moves teams.",
    line: "Staff training · AI adoption · Workshops",
    body: "Staff training, digital confidence, AI adoption and practical technology workshops for organisations.",
    href: "/business",
    tone: "fresh",
  },
  {
    number: "03",
    name: "Solutions",
    title: "Digital tools made useful.",
    line: "Websites · Apps · Automation",
    body: "Website development, app building, automation and ongoing digital support.",
    href: "/solutions",
    tone: "deep",
  },
] as const;

export type AreaTone = (typeof areas)[number]["tone"];

export const learningTopics = [
  "Computer tuition",
  "IT fundamentals",
  "Smartphones",
  "Software",
  "Online safety",
  "AI for beginners",
] as const;

export const businessTopics = [
  "Staff training",
  "Digital confidence",
  "AI adoption",
  "Workshops",
] as const;

export const solutionTopics = [
  "Website development",
  "App building",
  "Automation",
  "Ongoing digital support",
] as const;
