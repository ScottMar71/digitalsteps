/**
 * Packages. To publish a price, set `from` to a string such as "£950".
 * An empty `from` renders as "Guide price on request".
 */
export type Package = {
  id: string;
  name: string;
  who: string;
  includes: string[];
  from: string;
  note?: string;
  featured?: boolean;
};

export const packages: Package[] = [
  {
    id: "landing",
    name: "Landing page",
    who: "One clear offer. One strong page.",
    includes: ["A single bespoke page", "Mobile layout", "A straightforward way to enquire", "Launch and a short handover"],
    from: "",
  },
  {
    id: "business",
    name: "Business website",
    who: "The usual starting point for a small business.",
    includes: ["Up to five pages, designed around you", "Help shaping the words", "The six standards below", "Handover and 30 days of tweaks"],
    from: "",
    featured: true,
  },
  {
    id: "brand",
    name: "Brand and website",
    who: "A recognisable identity, and the site that carries it.",
    includes: ["Logo, colours and type", "A website in that identity", "A small set of social graphics", "Guidance so it stays consistent"],
    from: "",
  },
  {
    id: "care",
    name: "Hosting and care",
    who: "After launch, a person who looks after it.",
    includes: ["Secure hosting and backups", "SSL, domain and email forwarding", "Content updates when you need them", "Replies in plain English"],
    from: "",
    note: "Monthly. You can leave when you want.",
  },
];

export const inclusions = [
  {
    title: "Bespoke design",
    body: "A website designed specifically for your business. Not a template with your logo dropped in.",
  },
  {
    title: "Fully responsive",
    body: "Looks considered on desktops, tablets and phones, because that is where your customers are.",
  },
  {
    title: "SSL security",
    body: "Secure browsing with SSL, so the address bar shows people they are in the right place.",
  },
  {
    title: "Social integration",
    body: "Connections to the social platforms you actually use, without making the site dependent on them.",
  },
  {
    title: "Domain name",
    body: "Your own professional domain, so the business is easy to find and easy to trust.",
  },
  {
    title: "Email forwarding",
    body: "Professional email forwarding, so enquiries reach a person rather than a forgotten inbox.",
  },
] as const;

export function priceLabel(from: string) {
  return from ? `From ${from}` : "Guide price on request";
}
