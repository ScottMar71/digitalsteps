export type StudioService = {
  href: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  image?: string;
  panel: "moss" | "ink" | "steel" | "sand" | "wine" | "forest" | "dusk";
};

export const services: StudioService[] = [
  {
    href: "/web-design",
    kicker: "01",
    title: "Web design",
    body: "Bespoke websites designed around the business, its customers and the job the site has to do.",
    points: ["Business websites", "Portfolios", "Start-ups", "Landing pages", "Redesigns"],
    image: "/work/norfolk-run-collective.jpg",
    panel: "steel",
  },
  {
    href: "/hosting#support",
    kicker: "02",
    title: "Support",
    body: "Updates, changes and technical help, explained without the jargon.",
    points: ["Content changes", "Maintenance", "Straight answers"],
    panel: "sand",
  },
  {
    href: "/hosting",
    kicker: "03",
    title: "Hosting",
    body: "Secure hosting, SSL, domains, email forwarding and backups, looked after properly.",
    points: ["SSL", "Backups", "Domains and email"],
    panel: "ink",
  },
  {
    href: "/community",
    kicker: "04",
    title: "Local community",
    body: "Clubs, pubs, charities and independents. Getting smaller organisations online is part of the work, not a side note.",
    points: ["Sports clubs", "Hospitality", "Charities"],
    image: "/work/norfolk-run-collective.jpg",
    panel: "forest",
  },
  {
    href: "/pricing",
    kicker: "05",
    title: "Affordable websites",
    body: "Professional websites without the agency price tag. A written price before anything starts.",
    points: ["Clear packages", "Sensible prices", "No surprise extras"],
    panel: "wine",
  },
];

export const projectSteps = [
  ["01", "Listen", "What the business does, who it is for, and what the site has to make easier."],
  ["02", "Shape", "Structure, words and a direction before anything is decorated."],
  ["03", "Design", "A site that could only belong to this business. Desktop and phone, together."],
  ["04", "Hand over", "Launch, a walkthrough, and thirty days to adjust the things real use reveals."],
] as const;

export const reasons = [
  { title: "Bespoke, never a template", body: "Every site is designed around the business in front of us. There is no house layout we drop people into." },
  { title: "Prices you can see", body: "Packages are plain, and the figure is confirmed in writing before work starts. Affordable means excellent value." },
  { title: "One person, start to finish", body: "You deal with Scott. The same person who scopes the work designs it, builds it and explains it." },
  { title: "Everything in one place", body: "Design, brand, hosting, domain, email and the updates that come afterwards. You do not have to assemble a team." },
  { title: "Support when you need it", body: "A change of opening hours should not require a ticket system. Ask, and it gets done in plain English." },
  { title: "Community, on purpose", body: "Clubs, charities and independents are a real part of the studio, not a page we filled to look local." },
] as const;
