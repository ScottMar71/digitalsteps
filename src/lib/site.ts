export const site = {
  name: "Digital Steps",
  description:
    "Friendly IT tuition, digital skills training and practical technology solutions for individuals and businesses.",
  url: "https://digital-steps.co.uk",
  email: "hello@digitalsteps.co.uk",
  belief: "Everyone deserves the confidence to take their next digital step.",
} as const;

export const nav = [
  { href: "/learn", label: "Learn" },
  { href: "/business", label: "Business" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
] as const;

export const pathways = [
  {
    number: "01",
    title: "Learn",
    body: "IT tuition and digital skills",
    href: "/learn",
  },
  {
    number: "02",
    title: "Grow",
    body: "Business and AI training",
    href: "/business",
  },
  {
    number: "03",
    title: "Build",
    body: "Websites and apps",
    href: "/solutions",
  },
] as const;

export const destinations = [
  {
    eyebrow: "Learn at your pace",
    title: "Confidence for everyday life.",
    body: "Computer tuition, online safety, Office skills and AI for beginners.",
    href: "/learn",
    label: "Learning",
  },
  {
    eyebrow: "Grow with confidence",
    title: "Capability that moves teams.",
    body: "Workplace digital skills, staff training, AI adoption and workshops.",
    href: "/business",
    label: "Business",
  },
  {
    eyebrow: "Build what matters",
    title: "Digital tools made useful.",
    body: "Website development, app building, automation and digital support.",
    href: "/solutions",
    label: "Solutions",
  },
] as const;

export const learningTopics = [
  "Email and video calls",
  "Online safety",
  "Everyday digital skills",
  "Office skills",
  "AI for beginners",
] as const;

export const businessTopics = [
  "Workplace digital skills",
  "Staff training",
  "AI adoption",
  "Workshops",
] as const;

export const solutionTopics = [
  "Website development",
  "App building",
  "Automation",
  "Digital support",
] as const;
