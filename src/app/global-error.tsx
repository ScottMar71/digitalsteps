"use client";

import "./globals.css";

export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="scene">
          <div className="card">
            <p className="kicker">500</p>
            <h1>We have fallen over.</h1>
            <p className="lede">
              Even the banister has clocked off. This is a proper stumble, and it is still our fault.
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
