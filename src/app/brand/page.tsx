import type { Metadata } from "next";
import { Logo, LogoMark } from "@/components/brand-logo";
import { BRAND, BRAND_LOGO, type LogoVariant } from "@/lib/brand";
import "./brand.css";

export const metadata: Metadata = {
  title: "Brand preview",
  robots: { index: false, follow: false },
};

const OPTIONS: { id: LogoVariant; name: string; note: string }[] = [
  {
    id: "rise",
    name: "Option A · Rise",
    note: "One continuous line draws three steps and ends in an ember dot: the next step. Light and editorial.",
  },
  {
    id: "stack",
    name: "Option B · Stack",
    note: "Three ascending blocks; the top one is ember. Bold and geometric, reads at any size.",
  },
  {
    id: "tile",
    name: "Option C · Tile",
    note: "Ink tile with paper steps and an ember dot. An evolution of the original Digital Steps logo.",
  },
];

const SWATCHES: { name: string; token: string; hex: string; role: string }[] = [
  { name: "Paper", token: "--paper", hex: BRAND.colours.paper, role: "Page background" },
  { name: "Paper 2", token: "--paper-2", hex: BRAND.colours.paper2, role: "Cards and panels" },
  { name: "Line", token: "--line", hex: BRAND.colours.line, role: "Hairlines" },
  { name: "Ink", token: "--ink", hex: BRAND.colours.ink, role: "Text and buttons" },
  { name: "Ink soft", token: "--ink-soft", hex: BRAND.colours.inkSoft, role: "Secondary text" },
  { name: "Ember", token: "--ember", hex: BRAND.colours.ember, role: "The accent" },
  { name: "Ember deep", token: "--ember-deep", hex: BRAND.colours.emberDeep, role: "Accent as text" },
];

export default function BrandPage() {
  return (
    <main className="brand">
      <header className="brand-head">
        <p className="kicker">Brand preview</p>
        <h1>
          Three logos. <em>Pick one.</em>
        </h1>
        <p className="lede">
          Everything here is built from the same tokens as the live site. Currently showing <strong>{OPTIONS.find((o) => o.id === BRAND_LOGO)?.name}</strong> on the coming-soon page.
        </p>
      </header>

      <section aria-labelledby="logos">
        <h2 id="logos">Logo options</h2>
        <div className="options">
          {OPTIONS.map((o) => (
            <article key={o.id} className="option">
              <div className="option-stage">
                <Logo variant={o.id} />
              </div>
              <div className="option-row">
                <div className="option-cell">
                  <LogoMark variant={o.id} className="mark-lg" />
                </div>
                <div className="option-cell option-cell-ink">
                  <LogoMark variant={o.id} className="mark-lg mark-on-ink" />
                </div>
                <div className="option-cell">
                  <LogoMark variant={o.id} className="mark-sm" />
                  <LogoMark variant={o.id} className="mark-xs" />
                </div>
              </div>
              <h3>
                {o.name}
                {o.id === BRAND_LOGO ? <span className="pill">In use</span> : null}
              </h3>
              <p>{o.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="colour">
        <h2 id="colour">Colour</h2>
        <ul className="swatches">
          {SWATCHES.map((s) => (
            <li key={s.token}>
              <span className="swatch" style={{ background: s.hex }} />
              <strong>{s.name}</strong>
              <code>{s.hex}</code>
              <span>{s.role}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="type">
        <h2 id="type">Type · Instrument Sans</h2>
        <p className="t-display">Technology, one step at a time.</p>
        <p className="t-h2">No question is too small.</p>
        <p className="t-lede">
          Lede. Patient computer tuition, digital skills, AI made plain, and websites built for real people.
        </p>
        <p className="t-body">
          Body. We teach at your pace, in plain English, at your kitchen table or ours. Body text is never smaller than 17px.
        </p>
        <p className="kicker">Label</p>
      </section>

      <section aria-labelledby="ui">
        <h2 id="ui">Buttons and labels</h2>
        <div className="actions">
          <a className="button" href="#logos">
            Primary action
          </a>
          <a className="button-quiet" href="#logos">
            Quiet action
          </a>
          <span className="pill">Pill label</span>
        </div>
      </section>

      <p className="strapline">
        <strong>{BRAND.name}</strong> · {BRAND.strapline} · Full guidelines in <code>brand/BRAND.md</code>
      </p>
    </main>
  );
}
