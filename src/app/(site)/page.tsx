import type { Metadata } from "next";
import Link from "next/link";
import { Band, Cta, PillarCards, Section, Steps, Testimonials, WorkCards } from "@/components/sections";
import { site } from "@/content/site";
import { howItWorks } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: { absolute: `${site.name} · ${site.strapline}` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-split">
          <div>
            <p className="kicker">Teaching-led IT, Norfolk</p>
            <h1>
              Technology, <em>one step at a time.</em>
            </h1>
            <p className="lede">
              Computer tuition for beginners, digital skills training for teams, and websites and apps built to be
              understood. Patient, plain English, no question too small.
            </p>
            <div className="actions">
              <Link href="/contact" className="button">
                Book a session
              </Link>
              <Link href="#help" className="button-quiet">
                See how we help
              </Link>
            </div>
          </div>
          <aside className="hero-aside" aria-label="What makes Digital Steps different">
            <p>
              <strong>Run by a teacher.</strong> We do not just set things up and leave. You will understand what you
              have, be able to use it, and know what to do next.
            </p>
            <p>
              <strong>For everyone.</strong> Complete beginners, returners to work, small businesses and community
              groups. {site.areaDetail}
            </p>
          </aside>
        </div>
      </section>

      <Section
        id="help"
        title={
          <>
            Three ways we help, <em>one way of working.</em>
          </>
        }
        intro="Whichever door you come through, the approach is the same: listen first, explain everything, and leave you more confident than we found you."
      >
        <PillarCards />
      </Section>

      <Band />

      <Section
        id="how"
        title={
          <>
            How it works, <em>from the first message.</em>
          </>
        }
        intro="No jargon, no pressure, and nothing you have to work out on your own."
      >
        <Steps items={howItWorks} />
      </Section>

      <Section
        id="voices"
        title={
          <>
            What people say <em>afterwards.</em>
          </>
        }
      >
        <Testimonials items={testimonials} />
      </Section>

      <Section
        id="work"
        title={
          <>
            Recent work, <em>explained plainly.</em>
          </>
        }
        intro="Every project page says what the problem was, what we did, and what changed."
      >
        <WorkCards items={work.filter((w) => w.image).slice(0, 3)} />
        <div className="actions">
          <Link href="/work" className="button-quiet">
            See all our work
          </Link>
        </div>
      </Section>

      <Cta />
    </>
  );
}
