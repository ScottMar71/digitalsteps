import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta, PageHead, Section, WorkCards } from "@/components/sections";
import { caseStudy, work } from "@/content/work";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudy(slug);
  if (!item) return {};
  return {
    title: `${item.client}: ${item.title}`,
    description: item.summary,
    alternates: { canonical: `/work/${item.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const item = caseStudy(slug);
  if (!item) notFound();

  const more = work.filter((w) => w.slug !== item.slug && w.pillar === item.pillar).slice(0, 3);

  return (
    <>
      <PageHead kicker={`${item.kind} · ${item.client}`} title={item.title} lede={item.summary}>
        <ul className="meta" style={{ marginTop: "1.5rem" }}>
          <li className="pill">{item.kind}</li>
          {item.illustrative ? <li className="pill">Illustrative case</li> : null}
          {item.url ? (
            <li>
              <a className="button-quiet" href={item.url} rel="noopener" target="_blank">
                Visit the live site
              </a>
            </li>
          ) : null}
        </ul>
      </PageHead>

      {item.image ? (
        <div className="container case-hero">
          <Image src={item.image.src} alt={item.image.alt} width={1280} height={800} priority sizes="(min-width: 72rem) 72rem, 100vw" />
        </div>
      ) : null}

      <Section id="detail">
        <div className="case-grid">
          <div>
            <h2>The problem</h2>
            <p>{item.problem}</p>
          </div>
          <div>
            <h2>What we did</h2>
            <ul>
              {item.did.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>What changed</h2>
            <p>{item.changed}</p>
          </div>
          <div>
            <h2>Taught, not just built</h2>
            <p>{item.taught}</p>
          </div>
        </div>
      </Section>

      {more.length > 0 ? (
        <Section id="more" title="More like this">
          <WorkCards items={more} />
          <div className="actions">
            <Link href="/work" className="button-quiet">
              All our work
            </Link>
          </div>
        </Section>
      ) : null}

      <Cta title="Have a project like this?" topic={item.pillar === "solutions" ? "websites" : item.pillar} />
    </>
  );
}
