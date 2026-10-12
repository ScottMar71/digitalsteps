/**
 * Portfolio. Three real projects plus training case studies marked `example: true`
 * (rendered with an "Example" tag). TODO (Scott): replace examples with real cases.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  kind: "Website" | "Web app" | "Platform" | "Training";
  pillar: "learning" | "business" | "solutions";
  summary: string;
  problem: string;
  did: string[];
  changed: string;
  taught: string;
  image?: { src: string; alt: string };
  url?: string;
  example?: boolean;
};

export const work: CaseStudy[] = [
  {
    slug: "norfolk-run-collective",
    title: "A website that gets people to turn up",
    client: "Norfolk Run Collective",
    kind: "Website",
    pillar: "solutions",
    summary: "A free running club in Norwich needed newcomers to know when, where, and that they would be welcome.",
    problem:
      "The club ran on word of mouth and a Facebook group. People searching for a running club in Norwich could not find it, and nervous beginners had no way to check what to expect before showing up.",
    did: [
      "A one-page site that answers the four questions newcomers ask: when, where, how far, and will I keep up.",
      "Plain, warm copy and a calm visual identity built around the club's own badge.",
      "Local search basics so it appears for \"running club in Norwich\".",
      "A contact form, FAQ, gallery and videos, with cookies only loaded if a visitor agrees.",
    ],
    changed: "Newcomers arrive already knowing the route and the vibe. Organisers point people to one link instead of answering the same messages every week.",
    taught: "Handed over with a walkthrough so the organisers can update times, events and photos themselves.",
    image: { src: "/work/norfolk-run-collective.jpg", alt: "Norfolk Run Collective homepage with the club badge and the headline 'A free running club in Norwich where everyone belongs'." },
    url: "https://www.norfolkruncollective.com",
  },
  {
    slug: "runpilot",
    title: "Three running routes for the time you have",
    client: "RunPilot",
    kind: "Web app",
    pillar: "solutions",
    summary: "A web app that turns \"I have 45 minutes and I want somewhere quiet\" into three ready-made loops anywhere in the UK.",
    problem:
      "Planning a run in an unfamiliar place means juggling maps, distances and guesswork about hills and busy roads. Most people give up and run the same loop again.",
    did: [
      "A plain-language planner: pick a time and the kind of day, get Safe, Standard and Challenge loops from one start point.",
      "Routing, elevation and maps combined behind a single simple screen.",
      "Short coach-style explanations of why each loop was chosen.",
      "Accounts for saving favourites, with a cookie banner that asks before anything optional loads.",
    ],
    changed: "A complicated job becomes one question and one tap. The app is live for anyone in the UK to use.",
    taught: "Built as a prototype first, then refined with real use, which is the same approach we recommend to every client with an app idea.",
    image: { src: "/work/run-pilot.jpg", alt: "RunPilot homepage: 'Three loops for the time you have' with time and mood options." },
    url: "https://www.run-pilot.com",
  },
  {
    slug: "runpattern",
    title: "Know how you ran, not just how fast",
    client: "RunPattern",
    kind: "Platform",
    pillar: "solutions",
    summary: "A platform that reads pace, heart rate and cadence from Strava and explains each run as a pattern you can act on.",
    problem:
      "Running apps show numbers. Few explain what the numbers mean or what to do differently next week, so most runners ignore the data entirely.",
    did: [
      "Secure Strava connection, with a clear promise never to post on the runner's behalf.",
      "Analysis that turns raw streams into named pacing profiles and a weekly focus.",
      "A dashboard, pricing with a free and Pro tier, and a knowledge base written in plain English.",
      "A companion iPhone app in progress alongside the web platform.",
    ],
    changed: "Runners get an explanation, not a spreadsheet. The product has grown from a watch experiment into a web platform with paying users in view.",
    taught: "Every feature ships with a knowledge-base article, because a tool people do not understand is a tool they stop using.",
    image: { src: "/work/runpattern.jpg", alt: "RunPattern homepage with the headline 'Know how you ran, not just how fast'." },
    url: "https://www.runpattern.co.uk",
  },
  {
    slug: "video-calls-with-family",
    title: "From avoiding the tablet to Sunday video calls",
    client: "Beginner learner, Norwich",
    kind: "Training",
    pillar: "learning",
    summary: "Four one-to-one sessions with a retired learner who had been given a tablet and was frightened of it.",
    problem: "A well-meant gift had sat in a drawer for a year. Every attempt ended with a message she did not understand and a worry that she had broken it.",
    did: [
      "Session one: nothing but switching on, charging, and proving that nothing could be broken.",
      "Sessions two and three: one video-call app, practised repeatedly, with a laminated step-by-step card.",
      "Session four: photos and messages, because by then she asked for them.",
    ],
    changed: "A weekly call with grandchildren that she starts herself. The tablet lives on the kitchen table now, not in the drawer.",
    taught: "Repetition without judgement. The card still sits by the tablet, but she rarely needs it.",
    example: true,
  },
  {
    slug: "microsoft-365-workshop",
    title: "Making Microsoft 365 earn its subscription",
    client: "Twelve-person professional services firm",
    kind: "Training",
    pillar: "business",
    summary: "A half-day workshop and follow-up that moved a team from emailing attachments to working in shared files.",
    problem: "The firm paid for Microsoft 365 but used it as expensive email. Documents lived in inboxes, versions clashed and one person was the unofficial IT department.",
    did: [
      "A discovery call to find the three tasks that caused the most friction.",
      "A half-day workshop using the firm's own documents: Teams, SharePoint and OneDrive for those three tasks only.",
      "A one-page guide per task and a follow-up session a fortnight later to fix what had not stuck.",
    ],
    changed: "Shared files replaced attachments within a month. The informal IT person got her afternoons back.",
    taught: "Teaching three things well beats touring thirty features. The follow-up session is where the change actually lands.",
    example: true,
  },
];

export function workFor(pillar?: CaseStudy["pillar"]) {
  return pillar ? work.filter((w) => w.pillar === pillar) : work;
}

export function caseStudy(slug: string) {
  return work.find((w) => w.slug === slug);
}
