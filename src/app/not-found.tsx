import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Wrong step",
};

export default function NotFound() {
  return (
    <PageShell
      mood="lost"
      kicker="404"
      title={
        <>
          That page <em>has wandered off.</em>
        </>
      }
      lede="You have not broken anything. The link was probably a typo, or an old address. It happens to all of us, including the people who build websites."
    >
      <div className="actions">
        <Link className="button" href="/">
          Back to the start
        </Link>
      </div>
    </PageShell>
  );
}
