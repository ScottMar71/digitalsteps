export const site = {
  name: "Digital Steps",
  strapline: "Technology made simple. Confidence built step by step.",
  url: "https://www.digital-steps.co.uk",
  /**
   * Taken from the brand concept. Confirm this inbox before launch.
   * Leave blank to hide public contact links.
   */
  email: "hello@digitalsteps.co.uk",
  phone: "",
  serviceArea: "Norfolk, England",
  onlineNote: "Online lessons can be arranged more widely.",
  /** Leave blank until a booking page exists. */
  bookingUrl: "",
  description:
    "Friendly IT tuition, digital skills training and practical technology solutions for individuals and businesses in Norfolk.",
} as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/cookies", label: "Cookie information" },
  { href: "/accessibility", label: "Accessibility statement" },
] as const;

/** Add { href, label } entries when profiles exist. Empty hides the list. */
export const socialLinks: readonly { href: string; label: string }[] = [];

export const availabilityNote =
  "Sessions are arranged after an enquiry. Dates, venues and tutor times are not published in advance.";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/it-tuition", label: "IT Tuition" },
  { href: "/business-training", label: "Business Training" },
  { href: "/websites-and-apps", label: "Websites & Apps" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const enquiryTypes = [
  { value: "computer-tuition", label: "Computer tuition" },
  { value: "group-courses", label: "Group courses" },
  { value: "business-training", label: "Business training" },
  { value: "website", label: "Website development" },
  { value: "app", label: "App development" },
  { value: "other", label: "Other" },
] as const;

export const deliveryMethods = [
  { value: "home", label: "One-to-one at home" },
  { value: "online", label: "Online" },
  { value: "group", label: "Small group" },
  { value: "onsite", label: "On-site workshop" },
  { value: "remote-training", label: "Remote training" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const contactMethods = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
] as const;

export const tuitionCourses = [
  {
    id: "computer-confidence",
    title: "Computer Confidence for Beginners",
    format: "Four 90-minute sessions",
    price: "£120",
    priceNote: "Indicative launch price for the four-session package.",
    summary: "A calm start for someone who wants everyday computer tasks to feel familiar.",
    topics: [
      "Understanding a computer or laptop",
      "Using a keyboard and mouse",
      "Files and folders",
      "Internet browsing",
      "Email",
      "Printing and saving documents",
      "Everyday digital tasks",
    ],
  },
  {
    id: "phones-tablets",
    title: "Smartphones and Tablets",
    format: "90-minute session",
    price: "£35",
    priceNote: "Indicative launch price for one session.",
    summary: "Practical help with the device you already carry, at a pace that makes sense.",
    topics: [
      "Understanding device settings",
      "Installing and using apps",
      "Photos and messaging",
      "Video calls",
      "Accessibility features",
      "Online safety",
    ],
  },
  {
    id: "office-skills",
    title: "Essential Office Skills",
    format: "Two-hour workshop",
    price: "£35 per learner",
    priceNote: "Indicative launch price for a group session.",
    summary: "Everyday documents, email and meetings, taught through tasks people actually do.",
    topics: [
      "Word processing",
      "Spreadsheets",
      "Email and attachments",
      "Online meetings",
      "Saving and sharing documents",
    ],
  },
  {
    id: "ai-made-simple",
    title: "AI Made Simple",
    format: "Two-hour workshop",
    price: "£35 per learner",
    priceNote: "Indicative launch price for a group session.",
    summary: "A plain-English introduction to tools such as ChatGPT, including what not to trust.",
    topics: [
      "What AI is, in everyday language",
      "Getting started with ChatGPT",
      "Writing useful prompts",
      "Everyday and workplace uses",
      "Checking AI-generated information",
      "Privacy, data protection and limits",
    ],
  },
] as const;

export const businessServices = [
  {
    title: "Essential Workplace Digital Skills",
    outcome:
      "Help your team use everyday digital tools more confidently, reduce avoidable frustration and make better use of the software already available to them.",
  },
  {
    title: "Microsoft 365 and Everyday Productivity",
    outcome:
      "Give people a practical way to write, share, meet and find files, so routine work takes less time to untangle.",
  },
  {
    title: "AI Awareness and Practical AI Skills",
    outcome:
      "Show staff where AI can help with real tasks, and where they still need to check the result and protect private information.",
  },
  {
    title: "Digital Safety and Cyber Awareness",
    outcome:
      "Help people spot risky emails, weak habits and unsafe sharing before a small mistake becomes a business problem.",
  },
  {
    title: "Training for New Software and Business Systems",
    outcome:
      "Support a new tool after it arrives, so people can use it in their own work rather than only watching a demonstration.",
  },
  {
    title: "Bespoke Workshops",
    outcome:
      "Shape a session around the tasks your team finds difficult, after a short conversation about what they need to do differently.",
  },
] as const;

export const businessPrices = [
  { label: "Two-hour workshop", price: "from £150" },
  { label: "Half-day workshop", price: "£250–£350" },
  { label: "Full-day bespoke training", price: "£350–£600" },
] as const;

export const buildServices = {
  websites: {
    title: "Website development",
    price: "£750",
    priceNote: "Indicative starting price for a small business website, subject to scope.",
    items: [
      "Small business websites",
      "Brochure websites",
      "Website refreshes",
      "Contact and enquiry forms",
      "Basic search visibility",
      "Content and page structure",
      "Website handover and client training",
    ],
  },
  apps: {
    title: "Web apps and digital tools",
    price: "£1,500",
    priceNote:
      "Indicative starting price for a small bespoke web app. Not every project can be delivered at this price.",
    items: [
      "Simple web applications",
      "Enquiry management tools",
      "Basic booking and workflow solutions",
      "Digital forms and internal tools",
      "Appropriate AI integrations",
      "Process automation",
    ],
  },
  care: {
    title: "Website care and support",
    price: "from £50 per month",
    includes: [
      "A named point of contact for small content and layout changes",
      "A monthly check that the public site still loads and key forms still submit",
      "Short guidance when you want to update a page yourself",
    ],
    excludes: [
      "Hosting fees, domain renewal and third-party subscriptions",
      "New pages, new features or redesign work",
      "Emergency cover outside the agreed response time",
    ],
  },
} as const;

export const learningPaths = [
  {
    href: "/it-tuition#computer-confidence",
    title: "Computer Confidence",
    body: "Learn computer basics, email, internet browsing, files and everyday digital tasks.",
  },
  {
    href: "/it-tuition#phones-tablets",
    title: "Everyday Digital Skills",
    body: "Get more comfortable with smartphones, tablets, online services, video calls and digital safety.",
  },
  {
    href: "/it-tuition#ai-made-simple",
    title: "AI Made Simple",
    body: "Discover how tools such as ChatGPT can help with everyday tasks and work, with guidance on privacy and checking information.",
  },
] as const;

export const steps = [
  {
    title: "Tell us what you want to learn",
    body: "A short note about the task, device or skill is enough. You do not need to know the technical name for it.",
  },
  {
    title: "Choose the right lesson or course",
    body: "We suggest a one-to-one lesson, an online session or a small group, based on what you want to be able to do.",
  },
  {
    title: "Learn through practical, supportive sessions",
    body: "You practise the real task, with time to ask again. Tuition can be at home, online or in a small group, subject to availability and location.",
  },
] as const;

export const reasons = [
  "Patient, jargon-free explanations.",
  "Practical learning built around real tasks.",
  "Support for different confidence levels.",
  "Flexible delivery options.",
  "Training that helps people use their skills in everyday life.",
] as const;

export const projectTypes = [
  "A small brochure site for a local business",
  "A refresh of a site that has become hard to update",
  "A simple enquiry or booking tool",
  "A short internal form that replaces a paper process",
] as const;
