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
  {
    slug: "learning-opportunities",
    name: "Learning Opportunities",
    title: "A dark, cinematic home for a course",
    industry: "Education",
    summary: "A design example: a course homepage with a full-bleed photograph, a bold headline and a quiet second act.",
    story:
      "Some businesses need atmosphere before they need a feature list. This example shows a learning brand opening on a photograph, then moving into a darker, more focused section for the courses themselves.",
    did: [
      "A full-width hero with large type set over a photograph.",
      "A clear primary action, kept small so the image does the work.",
      "A second section that pairs a short invitation with a single strong picture.",
    ],
    status: "example",
    statusLabel: "Design example",
    honesty:
      "A design example, shown to demonstrate layout and presentation. It is not a completed client project, and the page is not a live Digital Steps customer site.",
    services: ["Web design"],
    image: {
      src: "/work/learning-opportunities.jpg",
      alt: "Design example of a dark course homepage with the headline Best Learning Opportunities.",
    },
    presentation: "screen",
    panel: "ink",
  },
  {
    slug: "client-stories",
    name: "Client Stories",
    title: "A testimonials layout for a lifestyle brand",
    industry: "Independent retail",
    summary: "A design example: reviews, portraits and a product photograph arranged on a deep green field.",
    story:
      "Retail sites often hide the proof. This example puts customer stories, star ratings and photography in one composition, the way a tablet would actually be held.",
    did: [
      "A serif headline beside a loose grid of review cards.",
      "Portraits and a larger photograph so the page is not only type.",
      "A palette a clothing or lifestyle shop could carry into social posts.",
    ],
    status: "example",
    statusLabel: "Design example",
    honesty:
      "A design example. The names and faces in the picture are part of the example layout. They are not Digital Steps customers, and this is not a completed client project.",
    services: ["Web design", "Branding"],
    image: {
      src: "/work/client-stories.jpg",
      alt: "Design example of a green testimonials page shown on a tablet.",
    },
    presentation: "photo",
    panel: "forest",
  },
  {
    slug: "own-your-time",
    name: "Own Your Time",
    title: "A product site with room to breathe",
    industry: "Product brand",
    summary: "A design example: a watch brand led by oversized type, a single product and three quiet proof points.",
    story:
      "Product sites get crowded. This example keeps one object, a large headline and a short row of facts, then a calmer band for the longer story.",
    did: [
      "Display type that shares the frame with the product, rather than sitting in a corner.",
      "Three specifications, each with a small mark, so the facts are scannable.",
      "A lower band for the brand story and a text link, instead of another hero.",
    ],
    status: "example",
    statusLabel: "Design example",
    honesty:
      "A design example of a product website. The watch brand in the picture is part of the example. It is not a completed client project.",
    services: ["Web design", "Branding"],
    image: {
      src: "/work/own-your-time.jpg",
      alt: "Design example of a watch website with the headline Own Your Time.",
    },
    presentation: "screen",
    panel: "steel",
  },
  {
    slug: "the-lantern",
    name: "The Lantern",
    title: "A pub site that feels like the room",
    industry: "Hospitality",
    summary: "A concept study for a coastal pub: dark timber, a short menu, rooms, and tonight's supper.",
    story:
      "Pubs are often stuck with a template that could belong to any venue. This study shows a site that feels like one specific room: low light, a proper menu, and a reason to book a table.",
    did: [
      "A dark, warm palette instead of a stock beer photograph.",
      "Tonight's menu, rooms and events as the only navigation that matters.",
      "A booking path that is obvious on a phone at the bar.",
    ],
    status: "concept",
    statusLabel: "Concept study",
    honesty: "A concept study. The Lantern is not a client, and this website has not been delivered.",
    services: ["Web design", "Branding"],
    presentation: "screen",
    concept: "pub",
    panel: "wine",
    community: true,
  },
  {
    slug: "harbour-and-co",
    name: "Harbour & Co",
    title: "Professional services, without the stock handshake",
    industry: "Professional services",
    summary: "A concept study for a small practice: quiet type, a clear offer, and no stock photography of a boardroom.",
    story:
      "Accountants, solicitors and consultants are usually given the same navy template. This study uses paper, a serious serif and a short list of what the practice actually does.",
    did: [
      "A headline that says the offer, not a slogan about journeys.",
      "Services named in plain language.",
      "Plenty of margin, so the practice feels calm rather than corporate.",
    ],
    status: "concept",
    statusLabel: "Concept study",
    honesty: "A concept study. Harbour & Co is not a client, and this website has not been delivered.",
    services: ["Web design"],
    presentation: "screen",
    concept: "professional",
    panel: "sand",
  },
  {
    slug: "field-and-timber",
    name: "Field & Timber",
    title: "A trades site that looks as considered as the work",
    industry: "Trades",
    summary: "A concept study for a joiner: big type, a short list of work, and a phone number you can actually tap.",
    story:
      "Trades businesses are often told a Facebook page is enough. This study is a small site that looks made, not downloaded, and makes the next job easy to ask for.",
    did: [
      "Three services, named plainly.",
      "A phone-first enquiry, because that is how the work arrives.",
      "A dark green field and a brass accent, closer to a workshop than a brochure.",
    ],
    status: "concept",
    statusLabel: "Concept study",
    honesty: "A concept study. Field & Timber is not a client, and this website has not been delivered.",
    services: ["Web design"],
    presentation: "screen",
    concept: "trade",
    panel: "forest",
    community: true,
  },
  {
    slug: "open-door",
    name: "Open Door",
    title: "A charity page that tells you how to help",
    industry: "Charity",
    summary: "A concept study for a community group: who it is for, when it opens, and how to give time or money.",
    story:
      "Small charities often inherit a site that talks about mission and forgets the practical bits. This study leads with who is welcome, when the door is open, and one clear way to help.",
    did: [
      "A warm paper page, readable on a phone in a car park.",
      "Opening times and a single next step.",
      "No donation platform theatre. Just a clear ask.",
    ],
    status: "concept",
    statusLabel: "Concept study",
    honesty: "A concept study. Open Door is not a client, and this website has not been delivered.",
    services: ["Web design", "Community"],
    presentation: "screen",
    concept: "charity",
    panel: "sand",
    community: true,
  },
  {
    slug: "north-room",
    name: "North Room",
    title: "A studio site with a point of view",
    industry: "Creative business",
    summary: "A concept study for a small creative practice: loud type, almost no chrome, and the work in front.",
    story:
      "Creative businesses need a site that shows judgement. This study is deliberately spare: a name, a line, and the work, so the visitor feels the studio before they read a paragraph.",
    did: [
      "Oversized type as the visual, not a stock desk photograph.",
      "A single accent, used once.",
      "A short route to the work and a way to start a project.",
    ],
    status: "concept",
    statusLabel: "Concept study",
    honesty: "A concept study. North Room is not a client, and this website has not been delivered.",
    services: ["Web design", "Branding"],
    presentation: "screen",
    concept: "creative",
    panel: "ink",
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
  "own-your-time",
  "runpilot",
  "learning-opportunities",
  "runpattern",
  "the-lantern",
];

export function homeWork() {
  return homeOrder.flatMap((slug) => {
    const item = caseStudy(slug);
    return item ? [item] : [];
  });
}
