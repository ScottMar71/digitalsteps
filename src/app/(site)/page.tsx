import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Device } from "@/components/device";
import { Inclusions } from "@/components/inclusions";
import { WorkCard } from "@/components/work-card";
import { reasons, services } from "@/content/services";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { homeWork } from "@/content/work";

export const metadata: Metadata = {
  title: { absolute: "Digital Steps · Websites, branding and hosting" },
  description: site.description,
  alternates: { canonical: "/" },
};

const ticker = [
  "Web design",
  "Branding",
  "Hosting",
  "Support",
  "Community projects",
  "Affordable websites",
  "Norfolk & Suffolk",
];

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
  const [lead, ...rest] = projects;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{site.areaShort} · Design studio</p>
            <h1>
              Your website. Your brand. <em>Your next big step.</em>
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
          </div>

          <div className="hero-stage">
            <div className="hero-laptop">
              <Device
                kind="laptop"
                src="/work/own-your-time.jpg"
                alt="A product website design example, Own Your Time, shown on a laptop."
                preload
                sizes="(max-width: 800px) 92vw, 620px"
              />
            </div>
            <div className="hero-phone">
              <Device
                kind="phone"
                src="/work/norfolk-run-collective.jpg"
                alt="The Norfolk Run Collective website shown on a phone."
                sizes="180px"
              />
            </div>
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...ticker, ...ticker].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="sheet">
        <section className="section" id="work">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Selected work</p>
              <h2>Sites with a point of view.</h2>
              <p className="section-lede">
                Live projects sit beside design examples and concept studies. Each label says which is which.
              </p>
            </div>
            <div className="work-grid">
              {lead ? <WorkCard item={lead} large preload /> : null}
              {rest.map((item) => (
                <WorkCard key={item.slug} item={item} frame={item.slug === "own-your-time" ? "laptop" : "browser"} />
              ))}
            </div>
            <div className="actions">
              <Link className="button" href="/work">
                See the full studio
              </Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">What we do</p>
              <h2>Six ways we help a business show up properly.</h2>
            </div>
            <div className="service-bento">
              {services.map((service) => (
                <Link key={service.title} href={service.href} className={`service-card panel-${service.panel}${service.image ? " has-photo" : ""}`}>
                  {service.image ? (
                    <Image src={service.image} alt="" fill sizes="(max-width: 800px) 100vw, 40vw" style={{ objectFit: "cover" }} />
                  ) : null}
                  <p className="eyebrow">{service.kicker}</p>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  {service.href === "/web-design" ? (
                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

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
          <p className="reveal">
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
              <li key={reason.title} className="reveal">
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

      <Inclusions />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Testimonials</p>
            <h2>What it should feel like to work with us.</h2>
          </div>
          <p className="sample-banner">Sample testimonial — replace with genuine customer feedback. These quotes are fictional and are not from clients.</p>
          <div className="quote-grid">
            {testimonials.map((item) => (
              <blockquote className="quote" key={item.name}>
                <span className="sample-tag">Sample testimonial</span>
                <p>{item.quote}</p>
                <footer>
                  <strong>{item.name}</strong>
                  <br />
                  {item.context}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="awards-heading">
        <div className="container">
          <div className="award">
            <p className="eyebrow">Design placeholder</p>
            <h2 id="awards-heading">Customer Service Recognition</h2>
            <p>Award showcase coming soon. Nothing here is a claim of an award, badge or accreditation.</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
