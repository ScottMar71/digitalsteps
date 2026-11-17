import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { HeroStudio, type StudioItem } from "@/components/hero-studio";
import { Inclusions } from "@/components/inclusions";
import { WorkCard } from "@/components/work-card";
import { projectSteps, reasons, services } from "@/content/services";
import { site } from "@/content/site";
import { caseStudy, homeWork } from "@/content/work";

export const metadata: Metadata = {
  title: { absolute: "Digital Steps · Websites, branding and hosting" },
  description: site.description,
  alternates: { canonical: "/" },
};

const studioSlugs = ["norfolk-run-collective", "runpilot", "runpattern"] as const;

const studio: StudioItem[] = studioSlugs.flatMap((slug) => {
  const item = caseStudy(slug);
  if (!item?.image) return [];
  return [
    {
      slug: item.slug,
      name: item.name,
      industry: item.industry,
      statusLabel: item.statusLabel,
      summary: item.summary,
      src: item.image.src,
      alt: item.image.alt,
    },
  ];
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: ["Norfolk", "Suffolk", "United Kingdom"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Norfolk",
    addressCountry: "GB",
  },
};

export default function HomePage() {
  const projects = homeWork();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{site.areaShort} · Design studio</p>
            <h1>
              <span>Your website.</span>
              <span>Your brand.</span>
              <span>
                <em>Your next big step.</em>
              </span>
            </h1>
            <p className="lede">
              Creative, bespoke websites for businesses with big ideas. Designed from scratch, built around you and priced for real-world budgets.
            </p>
            <div className="actions">
              <Link className="button" href="/contact">
                Let&apos;s Build Your Website
              </Link>
              <Link className="button-quiet" href="/work">
                Explore Our Work
              </Link>
            </div>
            <ul className="hero-facts">
              <li>Bespoke, never a template</li>
              <li>Reply within {site.responseTime}</li>
              <li>One person, start to finish</li>
            </ul>
          </div>
          <HeroStudio items={studio} />
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Sites with a point of view.</h2>
              <p className="section-lede">
                Live projects sit beside design examples and concept studies. Each label says which is which.
              </p>
            </div>
            <Link className="text-link" href="/work">
              All projects <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="work-grid">
            {projects.map((item, index) => (
              <WorkCard
                key={item.slug}
                item={item}
                preload={index === 0}
                frame={item.slug === "own-your-time" ? "laptop" : "browser"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>Six ways we help a business show up properly.</h2>
          </div>
          <ul className="service-rows">
            {services.map((service) => (
              <li key={service.title} data-reveal="">
                <Link href={service.href}>
                  <span className="service-index">{service.kicker}</span>
                  <span className="service-copy">
                    <h3>{service.title}</h3>
                    <p>{service.body}</p>
                  </span>
                  <span className="service-go" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="usp">
        <div className="container usp-grid">
          <div>
            <p className="eyebrow">The difference</p>
            <h2>
              <span>No templates.</span>
              <span>No shortcuts.</span>
              <span className="quiet">Just websites built around you.</span>
            </h2>
          </div>
          <p data-reveal="">
            There&apos;s no use of templates here. We build exactly what you need, as you need it. Every website is designed around your business, your brand and your customers. No cookie-cutter designs. No unnecessary extras. Just a professional website that works for you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why Digital Steps</p>
            <h2>A better website shouldn&apos;t cost the earth.</h2>
          </div>
          <div className="price-lines">
            <p>Professional websites without the agency price tag.</p>
            <p>Your business deserves a great website. Not a massive bill.</p>
            <p>Big ideas. Brilliant websites. Sensible prices.</p>
          </div>
          <ul className="reason-list">
            {reasons.map((reason) => (
              <li key={reason.title} data-reveal="">
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </li>
            ))}
          </ul>
          <div className="actions">
            <Link className="button" href="/pricing">
              See the packages
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How a project runs</p>
            <h2>Four steps. No mystery phase in the middle.</h2>
          </div>
          <div className="process">
            {projectSteps.map(([n, title, body]) => (
              <article key={n} data-reveal="">
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Inclusions />
      <CtaBand />
    </>
  );
}
