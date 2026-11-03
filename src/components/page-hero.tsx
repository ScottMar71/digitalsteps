import type { ReactNode } from "react";
import Link from "next/link";

export function PageHero({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: ReactNode;
  lede: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="page-hero">
      <div className="container page-hero-grid">
        <div>
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
          {children ? <div className="actions">{children}</div> : (
            <div className="actions">
              <Link className="button" href="/contact">
                Start Your Project
              </Link>
              <Link className="button-quiet" href="/work">
                Explore Our Work
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
