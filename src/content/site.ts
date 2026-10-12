/**
 * Site-wide facts. Everything a visitor can read about the business lives here.
 */
export const site = {
  name: "Digital Steps",
  /** Legal line used in Privacy and Terms. */
  owner: "Scott Maryan",
  url: "https://digital-steps.co.uk",
  strapline: "Technology made simple. Confidence built step by step.",
  description:
    "Digital Steps is a teaching-led IT and digital services business in Norfolk and Suffolk. Computer tuition and digital skills for individuals, workplace training and AI adoption for businesses, and websites, apps and automation built to be understood.",
  email: "support@digital-steps.co.uk",
  linkedin: "https://www.linkedin.com/in/scott-maryan-91908556/",
  area: "Norfolk and Suffolk, England",
  areaShort: "Norfolk & Suffolk",
  areaDetail: "Home visits and workplace sessions across Norfolk and Suffolk, and online anywhere in the UK.",
  formats: "At your home, at your premises, or online.",
  responseTime: "one working day",
  founderFirstName: "Scott",
  policies: {
    cancellationNotice: "24 hours",
    invoiceDays: 14,
  },
} as const;

export const nav = [
  { href: "/learning", label: "Learning" },
  { href: "/business", label: "Business" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Our work" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const footerLinks = [
  { href: "/it-support", label: "Small business IT support" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
] as const;

/** The one line that follows every service: the differentiator. */
export const taughtNotBuilt = {
  title: "Taught, not just built.",
  body: "Digital Steps is run by a qualified teacher. Whatever we do for you, you will understand it, be able to use it, and know what to do next. We do not hand over a box and leave.",
} as const;
