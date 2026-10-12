import type { Metadata } from "next";
import Link from "next/link";
import { Cta, PageHead, Section } from "@/components/sections";
import { priceGroups } from "@/content/pricing";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing and packages",
  description:
    "Clear guide prices for computer tuition, workplace training, websites, apps and IT support from Digital Steps. Every price is confirmed before anything starts.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHead
        kicker="Pricing & packages"
        title={
          <>
            Clear prices, <em>confirmed before we start.</em>
          </>
        }
        lede="These are guide prices so you know roughly what to expect. Every session, workshop or project is confirmed in writing before anything begins, and there are no surprise extras."
      />

      {priceGroups.map((group) => (
        <Section key={group.id} id={group.id} title={group.title} intro={group.intro}>
          <div className="grid grid-3">
            {group.packages.map((p) => (
              <article key={p.name} className="price">
                <h3>{p.name}</h3>
                <p className="who">{p.who}</p>
                <ul>
                  {p.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p className="from">
                  From {p.from}
                  {p.note ? <small>{p.note}</small> : null}
                </p>
              </article>
            ))}
          </div>
        </Section>
      ))}

      <Section id="good-to-know" title="Good to know" narrow>
        <div className="prose">
          <p>
            <strong>Travel.</strong> In-person sessions across Norfolk are included in the price within a reasonable
            distance; we will say up front if travel needs adding.
          </p>
          <p>
            <strong>Cancellations.</strong> Please give {site.policies.cancellationNotice}&apos; notice to move or
            cancel a session. Full details are in our <Link href="/terms">terms</Link>.
          </p>
          <p>
            <strong>Payment.</strong> Individuals pay per session or per block. Businesses are invoiced, due within{" "}
            {site.policies.invoiceDays} days.
          </p>
          <p>
            <strong>Not sure which fits?</strong> Ask. We will recommend the smallest thing that solves your problem.
          </p>
        </div>
      </Section>

      <Cta title="Want a price for your situation?" body="Tell us what you need and we will come back with a clear quote, usually the same day." />
    </>
  );
}
