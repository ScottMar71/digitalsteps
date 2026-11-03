import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { CtaBand } from "@/components/cta-band";
import { Device } from "@/components/device";
import { WorkCard } from "@/components/work-card";
import { caseStudy, work } from "@/content/work";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudy(slug);
  if (!item) return {};
  return {
    title: item.name,
    description: item.summary,
    alternates: { canonical: `/work/${item.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const item = caseStudy(slug);
  if (!item) notFound();

  const more = work.filter((entry) => entry.slug !== item.slug).slice(0, 3);

  return (
    <article className="case">
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">
            {item.statusLabel} · {item.industry}
          </p>
          <h1>{item.title}</h1>
          <p className="lede">{item.summary}</p>
          <p className="honesty">
            <strong>{item.statusLabel}.</strong>
            <span>{item.honesty}</span>
          </p>
          <div className="actions">
            {item.url ? (
              <a className="button" href={item.url} rel="noopener noreferrer">
                Visit the live site
              </a>
            ) : (
              <Link className="button" href="/contact">
                Start a project like this
              </Link>
            )}
            <Link className="button-quiet" href="/work">
              All work
            </Link>
          </div>
        </div>
      </header>

      <div className="container case-hero">
        <ViewTransition name={`work-${item.slug}`} share="morph" default="none">
          <div className={`work-frame panel-${item.panel}`} style={{ borderRadius: "1.2rem", paddingBottom: "1.1rem" }}>
            {item.presentation === "photo" && item.image ? (
              <div className="work-photo">
                <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 800px) 100vw, 1100px" style={{ objectFit: "cover" }} />
              </div>
            ) : (
              <Device
                kind="browser"
                src={item.image?.src}
                alt={item.image?.alt ?? ""}
                concept={item.concept}
                sizes="(max-width: 800px) 100vw, 1100px"
              />
            )}
          </div>
        </ViewTransition>
      </div>

      <div className="container case-layout" style={{ paddingTop: "2.5rem" }}>
        <div className="case-copy" style={{ paddingTop: 0 }}>
          <p className="eyebrow">{item.name}</p>
          <h2>The brief</h2>
          <p className="lede">{item.story}</p>
          {item.outcome ? <p>{item.outcome}</p> : null}
        </div>
        <div>
          <h2>What this shows</h2>
          <ul className="plain-list">
            {item.did.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="meta-row" style={{ marginTop: "1rem" }}>
            {item.services.map((service) => (
              <span className="status" key={service}>
                {service}
              </span>
            ))}
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">More from the studio</p>
            <h2>Keep looking.</h2>
          </div>
          <div className="work-grid">
            {more.map((entry) => (
              <WorkCard key={entry.slug} item={entry} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </article>
  );
}
