"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    document.title = "We tripped · Digital Steps";
  }, []);

  return (
    <PageShell
      mood="fallen"
      kicker="500"
      title={
        <>
          We tripped. <em>Not you, us.</em>
        </>
      }
      lede="Something on our side went wrong. Your computer is fine and you did nothing wrong. Give it a moment and try again, and we will sort the rest."
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
