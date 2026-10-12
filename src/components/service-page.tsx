import Link from "next/link";
import { Band, CoverList, Cta, Faq, PageHead, PriceTeaser, Reassure, Section, Steps, Testimonials, TwoTone, WorkCards } from "@/components/sections";
import { servicePages, type ServicePage as ServicePageData } from "@/content/services";
import { testimonialsFor, type Testimonial } from "@/content/testimonials";
import { workFor, type CaseStudy } from "@/content/work";

/** Shared layout for the five service pages. Content comes from src/content/services.ts. */
export function ServicePage({ data, pillar }: { data: ServicePageData; pillar: Testimonial["pillar"] & CaseStudy["pillar"] }) {
  const quotes = testimonialsFor(pillar).slice(0, 2);
  const cases = workFor(pillar).slice(0, 3);

  return (
    <>
      <PageHead kicker={data.kicker} title={<TwoTone {...data.headline} />} lede={data.lede} />

      <Section id="cover" title={data.coverTitle}>
        <CoverList items={data.cover} />
      </Section>

      {data.steps ? (
        <Section id="steps" title={data.steps.title}>
          <Steps items={data.steps.items} />
        </Section>
      ) : null}

      {data.reassure ? (
        <Section id="reassure">
          <Reassure {...data.reassure} />
        </Section>
      ) : null}

      <Band cta={false} />

      <Section id="price">
        <PriceTeaser {...data.priceTeaser} />
      </Section>

      {quotes.length > 0 ? (
        <Section id="voices" title="What people say">
          <Testimonials items={quotes} />
        </Section>
      ) : null}

      {cases.length > 0 ? (
        <Section id="work" title="Related work">
          <WorkCards items={cases} />
        </Section>
      ) : null}

      <Section id="faq" title="Questions people ask" narrow>
        <Faq items={data.faqs} />
      </Section>

      {data.related?.length ? (
        <Section id="related" title="You might also need">
          <div className="grid grid-2">
            {data.related.map((slug) => {
              const r = servicePages[slug as keyof typeof servicePages];
              return (
                <Link key={slug} href={`/${slug}`} className="tile">
                  <span className="tile-label">{r.kicker}</span>
                  <h3>{r.title}</h3>
                  <p>{r.description}</p>
                  <span className="tile-more">Find out more →</span>
                </Link>
              );
            })}
          </div>
        </Section>
      ) : null}

      <Cta topic={data.topic} />
    </>
  );
}
