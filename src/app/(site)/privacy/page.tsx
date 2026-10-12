import type { Metadata } from "next";
import { PageHead } from "@/components/sections";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Digital Steps collects and uses personal information, in plain English.",
  alternates: { canonical: "/privacy" },
};

const updated = "12 October 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHead kicker="Privacy policy" title="How we look after your information." lede="Short version: we collect only what we need to reply to you and do the work, we do not sell it, and you can ask us to delete it at any time." />
      <section className="section">
        <div className="narrow prose">
          <p className="updated">Last updated {updated}</p>

          <h2>Who we are</h2>
          <p>
            {site.name} is a teaching-led IT and digital services business based in {site.area}. We are the data
            controller for the information described here. You can contact us about anything in this policy at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>What we collect and why</h2>
          <ul>
            <li>
              <strong>When you contact us:</strong> your name, email address or phone number, and whatever you tell us
              in your message. We use this to reply and to arrange the help you asked for. Legal basis: our legitimate
              interest in responding to enquiries, and taking steps before entering a contract.
            </li>
            <li>
              <strong>When you become a client:</strong> contact details, an address if we visit you, invoicing details
              and notes about the sessions or project so we can do the work well. Legal basis: performance of a
              contract, and legal obligations for accounting records.
            </li>
            <li>
              <strong>During tuition or support:</strong> we may see personal information on your own device. We only
              use it to help you in the session and we do not copy or keep it.
            </li>
            <li>
              <strong>When you visit this website:</strong> our hosting provider records standard technical logs (such
              as IP address and pages requested) for security and reliability. We do not use advertising or tracking
              cookies. See our <a href="/cookies">cookie policy</a>.
            </li>
          </ul>

          <h2>Who we share it with</h2>
          <p>
            Only the services we need to run the business: our email provider (to send and receive enquiries), our
            website hosting provider, and our accounting software for invoices. Each is bound by its own data protection
            terms. We never sell personal information or share it for marketing.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiries that do not become work are deleted within 12 months. Client records are kept for the length of our
            relationship and then for six years to meet accounting rules, after which they are deleted.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask to see the information we hold about you, correct it, have it deleted, restrict how we use it, or
            object to our use of it. Email <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond within a
            month. If you are unhappy with how we have handled your information you can complain to the Information
            Commissioner&apos;s Office at ico.org.uk.
          </p>

          <h2>Children</h2>
          <p>
            Where we teach anyone under 18, we work through a parent or guardian, who provides the information and gives
            consent.
          </p>

          <h2>Changes</h2>
          <p>If we change this policy we will update the date at the top and, for significant changes, tell existing clients directly.</p>
        </div>
      </section>
    </>
  );
}
