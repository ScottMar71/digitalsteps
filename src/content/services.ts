export type Step = { title: string; body: string };
export type Faq = { q: string; a: string };

export type Pillar = {
  id: "learning" | "business" | "solutions";
  href: string;
  name: string;
  short: string;
  blurb: string;
  topic: string;
};

export const pillars: Pillar[] = [
  {
    id: "learning",
    href: "/learning",
    name: "Digital Steps Learning",
    short: "For individuals",
    blurb:
      "Computer tuition, beginner IT, digital confidence, online safety, Microsoft Office and AI for beginners. One to one, at your pace.",
    topic: "learning",
  },
  {
    id: "business",
    href: "/business",
    name: "Digital Steps Business",
    short: "For teams and organisations",
    blurb:
      "Workplace digital skills, staff training, AI adoption and business technology workshops that people actually use afterwards.",
    topic: "business",
  },
  {
    id: "solutions",
    href: "/solutions",
    name: "Digital Steps Solutions",
    short: "Websites, apps and support",
    blurb:
      "Website development, app building, automation and digital support, handed over with the understanding to run it.",
    topic: "websites",
  },
];

export const howItWorks: Step[] = [
  {
    title: "A conversation first",
    body: "Tell us what you want to be able to do. No forms to decode, no quiz. We listen and suggest a sensible first step.",
  },
  {
    title: "Learn or build, together",
    body: "Sessions and projects happen with you, not to you. You see every step, ask anything, and nothing is rushed.",
  },
  {
    title: "Confident on your own",
    body: "You finish able to do the thing yourself, with plain notes to refer back to and someone to call if you get stuck.",
  },
];

export const process: Step[] = [
  { title: "Listen", body: "What do you need it to do, for whom, and what has frustrated you before?" },
  { title: "Plan", body: "A short written plan in plain English with a fixed guide price. Nothing starts until you are happy." },
  { title: "Build", body: "Built in the open. You see progress regularly and can change your mind early, when it is cheap to." },
  { title: "Teach", body: "A handover session so you can run it, plus ongoing support if you want it." },
];

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  kicker: string;
  /** Headline split so the page can colour the key phrase. */
  headline: { before: string; em: string; after?: string };
  lede: string;
  coverTitle: string;
  cover: { title: string; body: string }[];
  steps?: { title: string; items: Step[] };
  reassure?: { title: string; body: string };
  priceTeaser: { text: string; href: string };
  image?: { src: string; alt: string; width: number; height: number; caption: string };
  faqs: Faq[];
  topic: string;
  related?: string[];
};

export const learning: ServicePage = {
  slug: "learning",
  title: "IT Tuition & Digital Skills",
  metaTitle: "Computer tuition and digital skills in Norfolk and Suffolk",
  description:
    "One-to-one computer tuition, digital confidence sessions, internet safety, email, Microsoft 365 and AI for beginners. Patient, jargon-free, at home in Norfolk and Suffolk or online.",
  kicker: "Digital Steps Learning",
  headline: { before: "Learn at your pace,", em: "with someone patient." },
  lede: "One-to-one tuition for people who want to use technology without feeling foolish. Any age, any starting point. We go at your pace and nobody is ever made to feel silly for asking.",
  coverTitle: "What we can help with",
  cover: [
    { title: "Computer basics", body: "Switching on, finding your files, keyboards and mice, settings that make things bigger and clearer." },
    { title: "Phones and tablets", body: "Calls, messages, photos, video calls with family, and the apps you actually want." },
    { title: "Email", body: "Setting up, sending attachments, spotting scams, and getting your inbox under control." },
    { title: "Staying safe online", body: "Passwords that are strong and memorable, recognising fraud, shopping and banking with confidence." },
    { title: "Microsoft 365", body: "Word, Excel, Outlook, Teams and OneDrive, for home, work or getting back to work." },
    { title: "AI for beginners", body: "What tools like ChatGPT and Copilot are, what they are good for, and how to use them sensibly." },
  ],
  steps: {
    title: "What a session is like",
    items: [
      { title: "Your device, your questions", body: "We work on your own computer, phone or tablet, with the things you want to do, not a generic course." },
      { title: "One thing at a time", body: "Each session has a clear aim. You do the clicking; we explain why. You leave with plain notes." },
      { title: "Repeat until it sticks", body: "Nobody remembers everything first time. We revisit as often as you need. That is the point." },
    ],
  },
  reassure: {
    title: "You cannot break anything.",
    body: "Honestly. Everything we do together can be undone, and we will show you how. The only aim is that you feel more capable at the end than you did at the start.",
  },
  priceTeaser: { text: "Sessions from £[XX] an hour. Blocks of sessions cost less.", href: "/pricing#learning" },
  faqs: [
    { q: "I am a complete beginner. Is that a problem?", a: "Not at all. Most people we work with describe themselves that way. We start wherever you are." },
    { q: "Where do sessions happen?", a: "At your home anywhere in Norfolk or Suffolk, online over a video call, or at a quiet venue we arrange. Whatever you find easiest." },
    { q: "Do I need my own computer?", a: "It helps to learn on the device you will use day to day, but if you are choosing one, we can help with that too." },
    { q: "Can a family member sit in?", a: "Yes, and it is often a good idea. Just tell us when you book." },
  ],
  topic: "learning",
};

export const business: ServicePage = {
  slug: "business",
  title: "Business & Workplace Training",
  metaTitle: "Workplace digital skills and AI training for small businesses",
  description:
    "Staff training, Microsoft 365 adoption, AI skills and productivity workshops for small businesses and organisations in Norfolk and Suffolk. Designed by a qualified teacher, so it sticks.",
  kicker: "Digital Steps Business",
  headline: { before: "Training your team", em: "will actually use." },
  lede: "Training for small businesses and organisations that want their people to actually use the tools they pay for. Short, practical, built around your work, and delivered by someone who teaches for a living.",
  image: {
    src: "/photos/workplace-training.jpg",
    alt: "A trainer speaking to a seated audience during a workshop, with a presentation on the screen.",
    width: 730,
    height: 480,
    caption: "Training in the room, with the people who will use it afterwards.",
  },
  coverTitle: "What we train",
  cover: [
    { title: "Microsoft 365 that gets used", body: "Teams, SharePoint, OneDrive and Outlook set up and taught around how your team really works." },
    { title: "AI adoption, sensibly", body: "Copilot and ChatGPT for everyday tasks, with clear guidance on what not to put into them." },
    { title: "Productivity and process", body: "Shared calendars, templates, simple automation and fewer spreadsheets held together by one person." },
    { title: "Security awareness", body: "Phishing, passwords and devices, explained so people change what they do rather than tick a box." },
    { title: "Onboarding and refreshers", body: "Get new starters confident quickly, and bring long-standing staff up to the same level without embarrassment." },
    { title: "One-to-one for managers", body: "Private sessions for owners and managers who would rather ask the awkward questions in private." },
  ],
  steps: {
    title: "How we run it",
    items: [
      { title: "A short discovery call", body: "What is slowing people down, who needs what, and what success looks like in a month." },
      { title: "Workshop or series", body: "Half-day workshops, lunch-and-learns or a short series. On site, online or mixed." },
      { title: "Follow-through", body: "Plain-English guides, a follow-up session and a route to ask questions once people are back at their desks." },
    ],
  },
  reassure: {
    title: "Why a teacher, not a consultant.",
    body: "Consultants explain tools. Teachers check that people understood, adjust when they did not, and build confidence as well as knowledge. That is the difference between training that is attended and training that changes how work gets done.",
  },
  priceTeaser: { text: "Half-day workshops from £[XXX]. Series and retained support available.", href: "/pricing#business" },
  faqs: [
    { q: "How many people can you train at once?", a: "Workshops work best with up to twelve. Larger groups can be split, or we can run a train-the-trainer session for your team leads." },
    { q: "Can you tailor the content to our software?", a: "Yes. We build every session around your actual tools and tasks, and we ask for examples before the day." },
    { q: "Do you offer ongoing support?", a: "We do. See Small Business IT Support for retained help, or add a follow-up session to any workshop." },
    { q: "We are a charity or community group. Is that different?", a: "Only in budget. Ask, and we will find a format that fits." },
  ],
  topic: "business",
  related: ["it-support"],
};

export const websites: ServicePage = {
  slug: "websites",
  title: "Website Design & Development",
  metaTitle: "Website design and development for small businesses in Norfolk and Suffolk",
  description:
    "Fast, mobile-friendly business websites built to be understood. Clear content, easy updates, search-friendly, with a handover session and ongoing support options.",
  kicker: "Digital Steps Solutions",
  headline: { before: "A website you understand", em: "and can run yourself." },
  lede: "Websites for small businesses, clubs and sole traders that load fast, read clearly on a phone, and that you can update yourself. We build it with you and teach you to run it.",
  coverTitle: "What you get",
  cover: [
    { title: "Mobile-first design", body: "Most of your visitors are on a phone. Every page is designed for that first and the desktop second." },
    { title: "Words that work", body: "We help you write pages people and search engines understand. No jargon, no filler." },
    { title: "Easy to update", body: "Change opening hours, add a photo or post news without calling anyone. We show you how." },
    { title: "Found on Google", body: "Sensible structure, titles and local search basics built in from day one." },
    { title: "Accessible by default", body: "Readable text sizes, good contrast and keyboard support, so nobody is left out." },
    { title: "Your domain, your site", body: "Everything is registered in your name. You are never locked in to us." },
  ],
  steps: { title: "How a project runs", items: process },
  priceTeaser: { text: "Simple business sites from £[XXX]. Care plans from £[XX] a month.", href: "/pricing#solutions" },
  faqs: [
    { q: "How long does a website take?", a: "A simple site is usually live within a few weeks of agreeing the plan, depending on how quickly we get content from you." },
    { q: "Can you improve the site I already have?", a: "Often, yes. We will tell you honestly if a rebuild would be cheaper than a repair." },
    { q: "Will I be able to update it myself?", a: "Yes. That is part of the handover. If you would rather we did it, a care plan covers that." },
    { q: "What about hosting and the domain?", a: "We set both up in your name and explain what each costs. No surprise renewals." },
  ],
  topic: "websites",
  related: ["apps", "it-support"],
};

export const apps: ServicePage = {
  slug: "apps",
  title: "App Development & Digital Solutions",
  metaTitle: "App development, prototypes and business automation",
  description:
    "Web apps, prototypes, business automation and bespoke digital tools for small businesses. Built step by step, explained in plain English, handed over with training.",
  kicker: "Digital Steps Solutions",
  headline: { before: "The tool that fits,", em: "built step by step." },
  lede: "When an off-the-shelf tool does not quite fit, we build the thing that does: web apps, prototypes, automations and small bespoke tools. Scoped tightly, built in the open, explained as we go.",
  coverTitle: "What we build",
  cover: [
    { title: "Prototypes", body: "A working first version to test an idea with real users before you spend serious money." },
    { title: "Web applications", body: "Sign-in, dashboards, bookings, member areas and the data behind them, running in the browser on any device." },
    { title: "Automation", body: "Connect the tools you already use so data is typed once. Fewer copy-and-paste jobs, fewer mistakes." },
    { title: "Bespoke tools", body: "Small internal tools that replace a spreadsheet nobody dares to touch." },
    { title: "AI features, carefully", body: "Where it genuinely helps: summarising, drafting, classifying. With clear limits and no hype." },
    { title: "Handover and training", body: "Documentation you can read and a session so your team knows how it works and what to do when it does not." },
  ],
  steps: { title: "How a project runs", items: process },
  priceTeaser: { text: "Prototypes from £[XXXX]. Every project is quoted before it starts.", href: "/pricing#solutions" },
  faqs: [
    { q: "Do you build iPhone and Android apps?", a: "We usually start with a web app that works on every phone, because it is faster and cheaper to change. Native apps are possible when there is a clear reason." },
    { q: "Who owns the code?", a: "You do. It lives in an account in your name, and we document it so another developer could pick it up." },
    { q: "Can you work with our existing systems?", a: "Usually. Tell us what you use and we will say plainly what is and is not practical." },
    { q: "How do you keep costs under control?", a: "Fixed scope, fixed guide price, and a prototype first. You see progress often enough to stop or change direction early." },
  ],
  topic: "apps",
  related: ["websites", "it-support"],
};

export const itSupport: ServicePage = {
  slug: "it-support",
  title: "Small Business IT Support",
  metaTitle: "Friendly IT support for small businesses in Norfolk and Suffolk",
  description:
    "Plain-English IT support for small businesses: troubleshooting, Microsoft 365 administration, security basics and a named person to call. Retained or ad hoc.",
  kicker: "Digital Steps Solutions",
  headline: { before: "IT help that", em: "explains itself." },
  lede: "A named person who answers the phone, fixes the problem, and explains what happened in words you understand. For businesses too small for an IT department and too busy for guesswork.",
  coverTitle: "What is covered",
  cover: [
    { title: "Troubleshooting", body: "Slow laptops, printers, Wi-Fi, email that has stopped working. Fixed remotely where possible, on site when not." },
    { title: "Microsoft 365 admin", body: "New starters, leavers, shared mailboxes, permissions and backups handled properly." },
    { title: "Security basics", body: "Multi-factor authentication, device updates, password managers and sensible policies, set up and explained." },
    { title: "Buying advice", body: "Honest guidance on what to buy and what not to. We do not sell hardware, so we have no reason to upsell." },
    { title: "Website and app care", body: "Updates, backups and small changes for anything we have built, or inherited." },
    { title: "Teaching as we go", body: "Every fix comes with a one-line explanation, so the same problem is less likely to need us next time." },
  ],
  reassure: {
    title: "What to expect",
    body: "Retained clients get a response within one working day, usually much sooner, and a monthly summary of what we did. Ad hoc work is quoted up front. We will always tell you if something is outside what we can do well.",
  },
  priceTeaser: { text: "Retained support from £[XX] a month. Ad hoc help by the hour.", href: "/pricing#solutions" },
  faqs: [
    { q: "Do we need a contract?", a: "Retained support is month to month with a month's notice. Ad hoc work needs nothing more than an agreed quote." },
    { q: "What hours do you cover?", a: "Normal working hours, Monday to Friday. We will be clear about anything outside that before you rely on it." },
    { q: "Can you work alongside our existing IT provider?", a: "Yes. We are often the friendly layer that explains things, while a larger provider handles infrastructure." },
  ],
  topic: "support",
  related: ["business", "websites"],
};

export const servicePages = { learning, business, websites, apps, "it-support": itSupport } as const;
