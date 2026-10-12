import type { Metadata } from "next";
import { PageHead } from "@/components/sections";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description: "The terms on which Digital Steps provides tuition, training, websites, apps and support: payments, cancellations and responsibilities.",
  alternates: { canonical: "/terms" },
};

const updated = "12 October 2026";

export default function TermsPage() {
  return (
    <>
      <PageHead kicker="Terms & conditions" title="The plain-English version of the small print." lede="These terms apply whenever you book a session, workshop, project or support with Digital Steps. If anything here is unclear, ask before you book and we will explain it." />
      <section className="section">
        <div className="narrow prose">
          <p className="updated">Last updated {updated}</p>

          <h2>1. Who you are dealing with</h2>
          <p>
            &ldquo;We&rdquo; and &ldquo;us&rdquo; means {site.name}, the trading name of {site.owner}, based in {site.area}. &ldquo;You&rdquo; means the person or
            organisation booking our services. Contact: <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>2. Booking and quotes</h2>
          <p>
            Prices on our website are guide prices. Before any work starts we confirm the price, what is included and
            the timing in writing (an email is fine). Your acceptance of that confirmation forms the agreement between us.
          </p>

          <h2>3. Payment</h2>
          <ul>
            <li>Individuals: single sessions are paid on the day or in advance; blocks are paid in advance.</li>
            <li>Businesses and organisations: we invoice, and payment is due within {site.policies.invoiceDays} days.</li>
            <li>Websites, apps and other projects: usually 50% to begin and 50% on completion, unless the confirmation says otherwise.</li>
            <li>Retained support is billed monthly in advance and can be ended by either side with one month&apos;s notice.</li>
          </ul>

          <h2>4. Cancellations and changes</h2>
          <ul>
            <li>
              <strong>Sessions and workshops:</strong> please give at least {site.policies.cancellationNotice}&apos; notice
              to move or cancel. With less notice than that we may charge for the session, because the time cannot be
              offered to someone else. If we have to cancel, we will offer a new date or a full refund.
            </li>
            <li>
              <strong>Projects:</strong> you can stop a project at any time. You pay for the work completed up to that
              point, and we hand over everything produced so far.
            </li>
            <li>Illness and emergencies happen. Tell us as soon as you can and we will be reasonable.</li>
          </ul>

          <h2>5. Our responsibilities</h2>
          <p>
            We will do the work with reasonable care and skill, explain things clearly, and tell you honestly if
            something is outside what we can do well. For tuition and training, we cannot guarantee a particular outcome,
            because learning depends on practice between sessions as well as the sessions themselves.
          </p>

          <h2>6. Your responsibilities</h2>
          <ul>
            <li>Give us accurate information and timely feedback, especially content for websites and apps.</li>
            <li>Make sure you have the right to use any text, images or data you give us.</li>
            <li>Keep backups of your own devices. We take care, but we cannot be responsible for pre-existing faults or data loss on equipment we did not supply.</li>
            <li>Keep your passwords and accounts secure after we have handed them over.</li>
          </ul>

          <h2>7. Ownership</h2>
          <p>
            Websites, apps and documents we create for you belong to you once paid for, and are set up in accounts in your
            name. We may reuse general techniques and non-identifying code. We may describe the project in our portfolio
            unless you ask us not to, and we will always ask before using a quote or your name.
          </p>

          <h2>8. Third-party services</h2>
          <p>
            Hosting, domains, software subscriptions and similar are provided by third parties under their own terms and
            are paid by you unless agreed otherwise. We will explain what each costs and why before setting it up.
          </p>

          <h2>9. Liability</h2>
          <p>
            Nothing in these terms limits liability for anything the law does not allow us to limit. Otherwise, our total
            liability for any claim is limited to the amount you paid us for the work the claim relates to. We are not
            liable for indirect losses such as lost profits.
          </p>

          <h2>10. Problems</h2>
          <p>
            If something goes wrong, tell us. We would much rather fix it. These terms are governed by the law of England
            and Wales.
          </p>
        </div>
      </section>
    </>
  );
}
