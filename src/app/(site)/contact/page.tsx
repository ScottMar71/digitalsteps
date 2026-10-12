import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHead } from "@/components/sections";
import { site } from "@/content/site";
import { isTopic } from "@/content/topics";

export const metadata: Metadata = {
  title: "Contact or book a session",
  description:
    "Enquire about computer tuition, business training, a website, an app or IT support. Digital Steps replies within one working day, in plain English.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic } = await searchParams;
  const defaultTopic = isTopic(topic) ? topic : "";

  return (
    <>
      <PageHead
        kicker="Contact / Book a session"
        title={
          <>
            Tell us what you would like <em>to be able to do.</em>
          </>
        }
        lede="That is all we need to start. No technical words required. We will reply with a sensible first step and, if useful, a clear price."
      />

      <section className="section">
        <div className="container contact-grid">
          <EnquiryForm defaultTopic={defaultTopic} />

          <aside className="contact-side" aria-label="What happens next">
            <div>
              <h2>What happens next</h2>
              <p>
                We read every message ourselves and reply within {site.responseTime}. For tuition we will suggest a first
                session; for business and projects we will usually ask for a short call.
              </p>
            </div>
            <div>
              <h2>Prefer email?</h2>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
            <div>
              <h2>Where we work</h2>
              <p>{site.areaDetail}</p>
            </div>
            <div>
              <h2>Booking for someone else?</h2>
              <p>
                Lots of people enquire on behalf of a parent or relative. Just say so in the message and tell us the best
                way to reach them.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
