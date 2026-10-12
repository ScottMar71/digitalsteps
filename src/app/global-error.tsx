"use client";

import "./globals.css";
import { LogoMark } from "@/components/brand-logo";
import { BRAND_LOGO } from "@/lib/brand";

export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="scene">
          <div className="card">
            <LogoMark variant={BRAND_LOGO} mood="fallen" className="hero-mark" />
            <p className="kicker">500</p>
            <h1>
              We tripped. <em>Not you, us.</em>
            </h1>
            <p className="lede">
              Something on our side went properly wrong. Your computer is fine. Try again in a moment, and we will sort
              the rest.
            </p>
            <div className="actions">
              <button className="button" type="button" onClick={() => retry()}>
                Try that again
              </button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
