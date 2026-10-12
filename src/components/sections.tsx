import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LogoMark } from "@/components/brand-logo";
import { BRAND_LOGO } from "@/lib/brand";
import { site, taughtNotBuilt } from "@/content/site";
import { pillars, type Faq as FaqItem, type Step } from "@/content/services";
import type { Testimonial } from "@/content/testimonials";
import type { CaseStudy } from "@/content/work";

/* Headline with one ember phrase. */
export function TwoTone({ before, em, after }: { before: string; em: string; after?: string }) {
  return (
    <>
      {before} <em>{em}</em>
      {after ? ` ${after}` : null}
    </>
  );
}

export function PageHead({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <div className="container page-head">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      {lede ? <p className="lede">{lede}</p> : null}
      {children}
    </div>
  );
}

export function Section({
  id,
  title,
  intro,
  children,
  narrow,
}: {
  id?: string;
  title?: ReactNode;
  intro?: string;
  children: ReactNode;
  narrow?: boolean;
}) {
  return (
    <section id={id} className="section" aria-labelledby={id && title ? `${id}-title` : undefined}>
      <div className={narrow ? "narrow" : "container"}>
        {title ? (
          <div className="section-head">
            <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
            {intro ? <p>{intro}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function PillarCards() {
  return (
    <div className="grid grid-3">
      {pillars.map((p) => (
        <Link key={p.id} href={p.href} className="tile">
          <span className="tile-label">{p.short}</span>
          <h3>{p.name}</h3>
          <p>{p.blurb}</p>
          <span className="tile-more">Find out more →</span>
        </Link>
      ))}
    </div>
  );
}

export function Steps({ items }: { items: Step[] }) {
  return (
    <ol className="steps">
      {items.map((s) => (
        <li key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function CoverList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="plain-list grid-2" style={{ display: "grid" }}>
      {items.map((c) => (
        <li key={c.title}>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function Band({ cta = true }: { cta?: boolean }) {
  return (
    <div className="container">
      <div className="band">
        <LogoMark variant={BRAND_LOGO} className="logo-mark" />
        <h2 style={{ marginTop: "1.25rem" }}>
          Taught, <em>not just built.</em>
        </h2>
        <p>{taughtNotBuilt.body}</p>
        {cta ? (
          <div className="actions">
            <Link href="/about" className="button">
              How we work
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function Reassure({ title, body }: { title: string; body: string }) {
  return (
    <div className="reassure">
      <h2 style={{ fontSize: "1.5rem" }}>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;
  return (
    <div className="grid grid-3">
      {items.map((t) => (
        <figure key={t.quote} className="quote">
          <blockquote>{t.quote}</blockquote>
          <figcaption>
            <footer>
              <strong>{t.name}</strong> · {t.context}
              {t.example ? <span className="example-tag">Example</span> : null}
            </footer>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function PriceTeaser({ text, href }: { text: string; href: string }) {
  return (
    <div className="price-teaser">
      <p>{text}</p>
      <Link href={href} className="button-quiet">
        See pricing
      </Link>
    </div>
  );
}

export function WorkCards({ items }: { items: CaseStudy[] }) {
  return (
    <div className="grid grid-3">
      {items.map((w) => (
        <Link key={w.slug} href={`/work/${w.slug}`} className="work-card">
          <div className="work-media">
            {w.image ? (
              <Image src={w.image.src} alt={w.image.alt} width={1280} height={800} sizes="(min-width: 60rem) 24rem, 100vw" />
            ) : (
              <div className="work-media-text">
                <div>
                  <LogoMark variant={BRAND_LOGO} className="logo-mark" />
                  <div>{w.kind}</div>
                </div>
              </div>
            )}
          </div>
          <div className="work-body">
            <span className="tile-label">
              {w.kind} · {w.client}
              {w.example ? <span className="example-tag">Example</span> : null}
            </span>
            <h3>{w.title}</h3>
            <p>{w.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function Cta({
  title = "Ready for the next step?",
  body = `Tell us what you would like to be able to do. We reply within ${site.responseTime}, in plain English.`,
  topic,
}: {
  title?: string;
  body?: string;
  topic?: string;
}) {
  const href = topic ? `/contact?topic=${topic}` : "/contact";
  return (
    <div className="container">
      <div className="cta">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="actions">
          <Link href={href} className="button">
            Book a session
          </Link>
          <a href={`mailto:${site.email}`} className="button-quiet">
            Email us
          </a>
        </div>
      </div>
    </div>
  );
}
