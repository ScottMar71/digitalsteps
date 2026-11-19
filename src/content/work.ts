export type WorkStatus = "live" | "example" | "concept";
export type ConceptVariant = "pub" | "professional" | "trade" | "charity" | "creative";
export type Panel = "moss" | "ink" | "steel" | "sand" | "wine" | "forest" | "dusk";

export type WorkItem = {
  slug: string;
  name: string;
  title: string;
  industry: string;
  summary: string;
  story: string;
  did: string[];
  outcome?: string;
  status: WorkStatus;
  statusLabel: string;
  honesty: string;
  services: string[];
  image?: { src: string; alt: string };
  /** Photos that already contain a device should not be framed inside a second one. */
  presentation: "screen" | "photo";
  concept?: ConceptVariant;
  url?: string;
  panel: Panel;
  community?: boolean;
};

export const work: WorkItem[] = [
  {
    slug: "norfolk-run-collective",
    name: "Norfolk Run Collective",
    title: "A free running club, easy to find and easy to join",
    industry: "Community sports",
    summary: "A one-page site for a free running club in Norwich, so newcomers know when, where, and that they are welcome.",
    story:
      "The club ran on word of mouth and a Facebook group. People searching for a running club in Norwich could not find a clear answer, and nervous beginners had no way to see what a session felt like before they showed up.",
    did: [
      "A one-page site that answers when, where, how far, and whether a beginner will keep up.",
      "A calm identity built around the club's own badge.",
      "Local search basics so it can be found for a running club in Norwich.",
      "A contact form, FAQ, gallery and videos, with optional cookies only after a visitor agrees.",
    ],
    outcome: "Newcomers arrive knowing the route and the tone. Organisers share one link instead of answering the same messages every week.",
    status: "live",
    statusLabel: "Live project",
    honesty: "A live project. The website is online.",
    services: ["Web design", "Community"],
    image: {
      src: "/work/norfolk-run-collective.jpg",
      alt: "Norfolk Run Collective homepage. A free running club in Norwich where everyone belongs.",
    },
    presentation: "screen",
    url: "https://www.norfolkruncollective.com",
    panel: "sand",
    community: true,
  },
  {
    slug: "runpilot",
    name: "RunPilot",
    title: "Three running routes for the time you have",
    industry: "Web app",
    summary: "A planner that turns a spare 45 minutes into three ready-made loops, anywhere in the UK.",
    story:
      "Planning a run somewhere new means juggling maps, distance and guesswork about hills and busy roads. Most people give up and repeat the same loop.",
    did: [
      "A plain-language planner: time and the kind of day, then Safe, Standard and Challenge loops from one start.",
      "Routing, elevation and maps behind a single screen.",
      "Short explanations of why each loop was chosen.",
      "Accounts for saved routes, and a cookie banner that asks before anything optional loads.",
    ],
    outcome: "A complicated job becomes one question and one tap. The app is live for anyone in the UK.",
    status: "live",
    statusLabel: "Live project",
    honesty: "A live project. The product is online.",
    services: ["Web design", "Custom functionality"],
    image: {
      src: "/work/run-pilot.jpg",
      alt: "RunPilot homepage. Three loops for the time you have, with time and mood options.",
    },
    presentation: "screen",
    url: "https://www.run-pilot.com",
    panel: "ink",
  },
  {
    slug: "runpattern",
    name: "RunPattern",
    title: "Know how you ran, not just how fast",
    industry: "Product platform",
    summary: "A platform that reads pace, heart rate and cadence from Strava and explains the run as a pattern.",
    story:
      "Running apps are full of numbers. Few explain what those numbers mean, or what to do differently next week, so most people ignore them.",
    did: [
      "A secure Strava connection that never posts on the runner's behalf.",
      "Analysis that turns raw streams into named pacing profiles and a weekly focus.",
      "A dashboard, free and Pro pricing, and a knowledge base in plain English.",
      "A companion iPhone app in progress beside the web platform.",
    ],
    outcome: "Runners get an explanation rather than a spreadsheet. The product has grown from an experiment into a platform.",
    status: "live",
    statusLabel: "Live project",
    honesty: "A live project. The platform is online.",
    services: ["Web design", "Branding", "Custom functionality"],
    image: {
      src: "/work/runpattern.jpg",
      alt: "RunPattern homepage. Know how you ran, not just how fast.",
    },
    presentation: "screen",
    url: "https://www.runpattern.co.uk",
    panel: "dusk",
  },
];

export function caseStudy(slug: string) {
  return work.find((item) => item.slug === slug);
}

export function workByStatus(status: WorkStatus) {
  return work.filter((item) => item.status === status);
}

const homeOrder = [
  "norfolk-run-collective",
  "runpilot",
  "runpattern",
];

export function homeWork() {
  return homeOrder.flatMap((slug) => {
    const item = caseStudy(slug);
    return item ? [item] : [];
  });
}
