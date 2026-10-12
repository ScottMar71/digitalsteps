import type { Metadata } from "next";
import { PageHead } from "@/components/sections";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "Which cookies the Digital Steps website uses. Currently: none for tracking.",
  alternates: { canonical: "/cookies" },
};

const updated = "12 October 2026";

export default function CookiesPage() {
  return (
    <>
      <PageHead kicker="Cookie policy" title="This site does not track you." lede="We think a website for nervous beginners should not open with a banner. So we built one that does not need to." />
      <section className="section">
        <div className="narrow prose">
          <p className="updated">Last updated {updated}</p>

          <h2>What cookies are</h2>
          <p>
            Cookies are small files a website can store in your browser to remember things between visits. Some are
            needed for a site to work; others are used to track people across the internet for advertising.
          </p>

          <h2>What this website uses</h2>
          <ul>
            <li>
              <strong>No tracking or advertising cookies.</strong> We do not use Google Analytics, advertising pixels or
              social media trackers.
            </li>
            <li>
              <strong>No cookie banner,</strong> because there is nothing to consent to.
            </li>
            <li>
              <strong>Strictly necessary technical storage only.</strong> Our hosting platform may set a short-lived
              technical cookie for security when you submit the contact form. It is not used to identify or track you.
            </li>
          </ul>

          <h2>Links to other websites</h2>
          <p>
            Our work page links to websites we have built. Each has its own cookie policy, and several ask for consent
            before loading anything optional, which is how we think it should be done.
          </p>

          <h2>If this changes</h2>
          <p>
            If we ever add analytics, we will do it with a tool that does not use cookies, or we will ask you first and
            update this page. Questions: <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
