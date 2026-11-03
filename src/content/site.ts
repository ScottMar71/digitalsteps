/**
 * Site-wide facts. Everything a visitor can read about the business lives here.
 */
export const site = {
  name: "Digital Steps",
  owner: "Scott Maryan",
  url: "https://digital-steps.co.uk",
  strapline: "Beautiful websites. Brilliant branding. Straightforward support.",
  proposition: "Beautiful websites. Brilliant branding. Straightforward support. Affordable prices.",
  description:
    "Digital Steps is a website design, branding and hosting studio in Norfolk and Suffolk. Bespoke websites for small businesses, independents, start-ups and community organisations, at sensible prices.",
  email: "support@digital-steps.co.uk",
  linkedin: "https://www.linkedin.com/in/scott-maryan-91908556/",
  area: "Norfolk and Suffolk, England",
  areaShort: "Norfolk & Suffolk",
  areaDetail: "Based in Norfolk and Suffolk. Working with businesses and community groups across the UK.",
  responseTime: "one working day",
  founderFirstName: "Scott",
  policies: {
    cancellationNotice: "24 hours",
    invoiceDays: 14,
  },
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/web-design", label: "Web design" },
  { href: "/branding", label: "Branding" },
  { href: "/hosting", label: "Hosting" },
  { href: "/community", label: "Community" },
  { href: "/pricing", label: "Packages" },
  { href: "/about", label: "About" },
] as const;

export const footerServices = [
  { href: "/web-design", label: "Web design" },
  { href: "/branding", label: "Branding" },
  { href: "/hosting", label: "Hosting & support" },
  { href: "/community", label: "Community projects" },
  { href: "/pricing", label: "Packages & pricing" },
  { href: "/work", label: "Our work" },
] as const;

export const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
] as const;
