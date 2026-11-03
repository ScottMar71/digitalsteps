import type { ConceptVariant } from "@/content/work";

const sites: Record<ConceptVariant, { className: string; name: string; nav: string; title: string; lede: string; items: string[] }> = {
  pub: {
    className: "concept-pub",
    name: "The Lantern",
    nav: "Menu · Rooms · Events",
    title: "Supper, a fire, and a room if you need one.",
    lede: "On the coast road. Open from noon.",
    items: ["Tonight's menu", "Sunday roast", "Two rooms"],
  },
  professional: {
    className: "concept-professional",
    name: "Harbour & Co",
    nav: "Advice · People · Contact",
    title: "Clear advice for businesses that have outgrown a spreadsheet.",
    lede: "Accounts, tax and a person who picks up the phone.",
    items: ["Year-end", "Payroll", "Starting out"],
  },
  trade: {
    className: "concept-trade",
    name: "Field & Timber",
    nav: "Work · About · Call",
    title: "Kitchens, stairs and the repair you have been putting off.",
    lede: "A joiner in Norfolk. One workshop. Proper joinery.",
    items: ["Kitchens", "Stairs", "Repairs"],
  },
  charity: {
    className: "concept-charity",
    name: "Open Door",
    nav: "Visit · Help · About",
    title: "Everyone has a seat. The kettle is already on.",
    lede: "Tuesdays and Thursdays, from ten. No referral needed.",
    items: ["Come in", "Give an hour", "Bring food"],
  },
  creative: {
    className: "concept-creative",
    name: "North Room",
    nav: "Work · Studio · Start",
    title: "A small studio for brands with something to say.",
    lede: "Identity, websites, and the words between them.",
    items: ["Identity", "Sites", "Campaigns"],
  },
};

export function ConceptSite({ variant }: { variant: ConceptVariant }) {
  const site = sites[variant];
  return (
    <div className={`concept ${site.className}`} aria-hidden="true">
      <header>
        <strong>{site.name}</strong>
        <span>{site.nav}</span>
      </header>
      <p className="concept-title">{site.title}</p>
      <p>{site.lede}</p>
      <ul>
        {site.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
