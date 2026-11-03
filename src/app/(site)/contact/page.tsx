import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { site } from "@/content/site";
import { isTopic } from "@/content/topics";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a website, branding, hosting or community project with Digital Steps. We reply within one working day.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic } = await searchParams;
  const defaultTopic = isTopic(topic) ? topic : "";

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Tell us what you need.</h1>
          <p className="lede">
            A new site, a redesign, a brand, hosting, or a community project. We read every message and reply within {site.responseTime}.
          </p>
        </div>
      </header>

      <section className="contact-wrap">
        <div className="container contact-grid">
          <EnquiryForm defaultTopic={defaultTopic} />
          <aside className="contact-side" aria-label="How to reach us">
            <div>
              <h2>What happens next</h2>
              <p>We reply with a sensible shape for the work and, when we know enough, a price in writing. Nothing starts until you have agreed it.</p>
            </div>
            <div>
              <h2>Email</h2>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
            <div>
              <h2>Where</h2>
              <p>{site.areaDetail}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
