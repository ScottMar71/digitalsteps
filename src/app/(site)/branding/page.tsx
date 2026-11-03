import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { WorkCard } from "@/components/work-card";
import { caseStudy } from "@/content/work";

export const metadata: Metadata = {
  title: "Branding",
  description:
    "Logo design, colour, typography and a consistent digital presence for small businesses. Branding from Digital Steps, made to live on your website and your socials.",
  alternates: { canonical: "/branding" },
};

const pieces = [
  ["Logo", "A mark you can use on a website, a van, a menu and a profile picture without it falling apart."],
  ["Colour and type", "A small palette and two typefaces, with rules simple enough to keep using after we have gone."],
  ["Visual identity", "How photographs, space and tone sit together, so the next thing you make still looks like you."],
  ["Website branding", "The identity applied to the site, rather than a logo pasted onto a layout that ignores it."],
  ["Social graphics", "A starter set so posts do not undo the work the website just did."],
  ["A consistent presence", "One way of looking, from the homepage to the email that answers an enquiry."],
];

export default function BrandingPage() {
  const examples = ["client-stories", "own-your-time", "runpattern"]
    .map((slug) => caseStudy(slug))
    .filter((item) => item !== undefined);

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Branding</p>
          <h1>A business people recognise before they read the sentence.</h1>
          <p className="lede">
            Logo, colour, type and the website that carries them. Enough of a system to stay consistent, and small enough that you will actually use it.
          </p>
          <div className="actions">
            <Link className="button" href="/contact?topic=branding">
              Start with the brand
            </Link>
            <Link className="button-quiet" href="/pricing">
              Brand and website package
            </Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we make</p>
            <h2>Identity, then the places it has to live.</h2>
          </div>
          <div className="inclusion-grid">
            {pieces.map(([title, body]) => (
              <article key={title} className="reveal" style={{ background: "var(--paper-2)", borderRadius: "1.1rem", padding: "1.2rem" }}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Range</p>
            <h2>The same studio. None of the same websites.</h2>
            <p className="section-lede">A lifestyle layout, a product page, and a live platform. Different type, colour and pace on purpose.</p>
          </div>
          <div className="work-grid">
            {examples.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Need the name to look like the work?" body="We can start with a mark and a palette, or design the identity and the website together." />
    </>
  );
}
