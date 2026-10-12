/**
 * Portfolio. Three live projects, plus training and support stories marked
 * `illustrative: true`: composites of typical engagements with details changed,
 * rendered with a small "Illustrative" tag. Replace with real cases as permission allows.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  kind: "Website" | "Web app" | "Platform" | "Training" | "Support";
  pillar: "learning" | "business" | "solutions";
  summary: string;
  problem: string;
  did: string[];
  changed: string;
  taught: string;
  image?: { src: string; alt: string };
  url?: string;
  illustrative?: boolean;
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
    client: "Retired learner, Norwich",
    kind: "Training",
    pillar: "learning",
    summary: "Four one-to-one sessions at home with a learner who had been given a tablet and was frightened of it.",
    problem:
      "A well-meant Christmas present had sat in a drawer for a year. Every attempt ended with a message she did not understand and a worry that she had broken something expensive.",
    did: [
      "Session one: switching on, charging, and proving that nothing could be broken. Nothing else.",
      "Sessions two and three: one video-call app, practised again and again, with a step-by-step card in large print.",
      "Session four: photos and messages, because by then she was asking for them.",
    ],
    changed: "A weekly call with grandchildren in Australia that she starts herself. The tablet lives on the kitchen table now, not in the drawer.",
    taught: "Repetition without judgement. The card still sits by the tablet, but she rarely needs it.",
    illustrative: true,
  },
  {
    slug: "microsoft-365-workshop",
    title: "Making Microsoft 365 earn its subscription",
    client: "Twelve-person accountancy firm, Norwich",
    kind: "Training",
    pillar: "business",
    summary: "A half-day workshop and a follow-up that moved a team from emailing attachments to working in shared files.",
    problem:
      "The firm paid for Microsoft 365 but used it as expensive email. Documents lived in inboxes, versions clashed, and one person had become the unofficial IT department.",
    did: [
      "A discovery call to find the three tasks that caused the most friction every week.",
      "A half-day workshop on the firm's own documents: Teams, SharePoint and OneDrive for those three tasks only.",
      "A one-page guide per task, and a follow-up session a fortnight later to fix what had not stuck.",
    ],
    changed: "Shared files replaced attachments within a month. The informal IT person got her afternoons back.",
    taught: "Teaching three things well beats touring thirty features. The follow-up session is where the change actually lands.",
    illustrative: true,
  },
  {
    slug: "ai-for-a-small-team",
    title: "AI for people who were sick of hearing about AI",
    client: "Marketing agency, Ipswich",
    kind: "Training",
    pillar: "business",
    summary: "A two-hour workshop that turned a sceptical team of nine into people with one useful AI habit each.",
    problem:
      "Half the team were quietly pasting client work into free AI tools; the other half refused to touch them. The owner wanted one sensible, shared way of working and no data scares.",
    did: [
      "A plain-English explanation of what these tools are, what they are good at, and where they fall over.",
      "A short, written policy agreed in the room: what can and cannot go into an AI tool.",
      "Hands-on practice on real briefs, with each person leaving with one task they would hand to AI from now on.",
    ],
    changed: "A shared policy on the wall, one paid tool instead of five free ones, and first drafts that take minutes rather than mornings.",
    taught: "The sceptics asked the best questions. Nobody adopts a tool they have not been allowed to doubt out loud.",
    illustrative: true,
  },
  {
    slug: "shop-it-tidy-up",
    title: "One person to ring who answers",
    client: "Independent shop, Diss",
    kind: "Support",
    pillar: "solutions",
    summary: "A day of IT tidy-up for a two-person shop, followed by a monthly care plan and a short lesson in each visit.",
    problem:
      "Email ran through an old broadband account, the till laptop had never been backed up, and every password was a variation of the dog's name. Nobody knew who to call when something broke.",
    did: [
      "Moved email to a proper business account with the shop's own domain, and showed the owner how to add a new address herself.",
      "Set up automatic backups and tested a restore together, so she had seen it work.",
      "A password manager, explained and practised, plus two-step sign-in on the accounts that matter.",
      "A monthly care plan: updates, checks, and twenty minutes of teaching whatever she wants to understand next.",
    ],
    changed: "Nothing has been lost since, and the owner now does the small changes herself. The monthly visit is as much a lesson as a service call.",
    taught: "Support that only fixes things keeps you dependent. Support that explains things makes the next call shorter.",
    illustrative: true,
  },
];

export function workFor(pillar?: CaseStudy["pillar"]) {
  return pillar ? work.filter((w) => w.pillar === pillar) : work;
}

export function caseStudy(slug: string) {
  return work.find((w) => w.slug === slug);
}
