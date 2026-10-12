"use client";

import Link from "next/link";
import { useEffect } from "react";
import { PageShell } from "@/components/page-shell";

export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    document.title = "We fell over · Digital Steps";
  }, []);

  return (
    <PageShell
      mood="fall"
      kicker="500"
      title="We have fallen over."
      lede="The server took a confident step and found a cable. This is our mess, not yours. You may judge us quietly while we pick up the biscuits."
    >
      <div className="actions">
        <button className="button" type="button" onClick={() => retry()}>
          Try that again
        </button>
        <Link className="button-quiet" href="/">
          Back to the start
        </Link>
      </div>
    </PageShell>
  );
}
