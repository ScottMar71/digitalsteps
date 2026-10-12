/**
 * TODO (Scott): every figure below is a placeholder written as £[XX].
 * Replace with real "from" prices. Pages render whatever is here verbatim.
 */
export type Package = {
  name: string;
  who: string;
  includes: string[];
  from: string;
  note?: string;
};

export type PriceGroup = {
  id: "learning" | "business" | "solutions";
  title: string;
  intro: string;
  packages: Package[];
};

export const priceGroups: PriceGroup[] = [
  {
    id: "learning",
    title: "Learning",
    intro: "One-to-one tuition for individuals. Prices are per session, at your home, online or at a venue we arrange.",
    packages: [
      {
        name: "Single session",
        who: "Try it, or fix one specific thing.",
        includes: ["60 minutes, one to one", "On your own device", "Plain notes afterwards"],
        from: "£[XX]",
      },
      {
        name: "Confidence block",
        who: "Most people start here.",
        includes: ["Four 60-minute sessions", "A simple plan for what we will cover", "Email questions between sessions"],
        from: "£[XXX]",
        note: "Saves against four single sessions.",
      },
      {
        name: "Steady steps",
        who: "Ongoing, unhurried support.",
        includes: ["Two sessions a month", "Priority booking", "Help by phone when something urgent comes up"],
        from: "£[XX] a month",
      },
    ],
  },
  {
    id: "business",
    title: "Business",
    intro: "Training for teams and organisations. Guide prices for up to twelve people; larger groups and series are quoted.",
    packages: [
      {
        name: "Half-day workshop",
        who: "One topic, done properly.",
        includes: ["Three hours, on site or online", "Built around your tools and examples", "Plain-English guide for attendees"],
        from: "£[XXX]",
      },
      {
        name: "Training series",
        who: "Change how a team works.",
        includes: ["Three to six sessions over a quarter", "Discovery call and tailored plan", "Follow-up session and Q&A"],
        from: "£[XXXX]",
      },
      {
        name: "Manager one-to-one",
        who: "Private sessions for owners and leads.",
        includes: ["90 minutes, one to one", "Your questions, in confidence", "Notes and next steps"],
        from: "£[XXX]",
      },
    ],
  },
  {
    id: "solutions",
    title: "Solutions",
    intro: "Websites, apps, automation and support. Every project gets a written plan and a fixed guide price before it starts.",
    packages: [
      {
        name: "Simple business website",
        who: "Up to five pages, built to be run by you.",
        includes: ["Mobile-first design in your branding", "Content help and local search basics", "Handover session and 30 days of tweaks"],
        from: "£[XXX]",
      },
      {
        name: "Prototype or web app",
        who: "Test an idea or replace a spreadsheet.",
        includes: ["Scoped first version in weeks, not months", "You own the code and accounts", "Documentation and a training session"],
        from: "£[XXXX]",
      },
      {
        name: "Care plan and IT support",
        who: "A named person to call.",
        includes: ["Updates, backups and small changes", "Microsoft 365 admin and security basics", "Response within one working day"],
        from: "£[XX] a month",
        note: "Month to month. Ad hoc help by the hour.",
      },
    ],
  },
];
