import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Inclusions } from "@/components/inclusions";
import { packages, priceLabel } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Packages and pricing",
  description:
    "Website packages from Digital Steps: landing pages, business websites, brand and website, and monthly hosting. Guide prices are confirmed in writing before work starts.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const main = packages.filter((item) => item.id !== "care");
  const care = packages.find((item) => item.id === "care");

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Packages & pricing</p>
          <h1>Sensible prices. A written figure before we start.</h1>
          <p className="lede">
            Professional websites without the agency price tag. Your business deserves a great website, not a massive bill. Big ideas, brilliant websites, sensible prices.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="package-grid">
            {main.map((item) => (
              <article key={item.id} className={item.featured ? "package is-featured" : "package"}>
                <h3>{item.name}</h3>
                <p>{item.who}</p>
                <p className="price">{priceLabel(item.from)}</p>
                <ul>
                  {item.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <Link className="button" href="/contact?topic=website">
                  Ask for this
                </Link>
              </article>
            ))}
            {care ? (
              <article className="care-bar">
                <div>
                  <h3>{care.name}</h3>
                  <p>{care.who}</p>
                  <p className="price">{priceLabel(care.from)}</p>
                </div>
                <ul>
                  {care.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <Link className="button" href="/contact?topic=hosting">
                  Ask about care
                </Link>
              </article>
            ) : null}
          </div>
          <p className="band-note">
            Every project gets a guide price in writing before any work is agreed. There is no obligation in asking.
            {care?.note ? ` ${care.note}` : ""}
          </p>
        </div>
      </section>

      <Inclusions />
      <CtaBand />
    </>
  );
}
