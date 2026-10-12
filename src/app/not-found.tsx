import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Wrong step",
};

export default function NotFound() {
  return (
    <PageShell
      mood="miss"
      kicker="404"
      title="This step is not a step."
      lede="You have arrived at a page that does not exist. It may have been a typo, a hunch, or an act of pure optimism. We looked under the keyboard. It is not there."
    >
      <div className="actions">
        <Link className="button" href="/">
          Return to solid ground
        </Link>
      </div>
    </PageShell>
  );
}
