import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "Digital Steps is still tying its shoelaces. The website will be here shortly.",
};

export default function HomePage() {
  return (
    <PageShell
      mood="wait"
      kicker="Coming soon"
      title="The stairs are not quite ready."
      lede="Digital Steps is still practising the first step. The website has the idea, the shoes, and absolutely no sense of urgency."
    >
      <p className="aside">Please hold the banister. We will be up in a minute.</p>
    </PageShell>
  );
}
