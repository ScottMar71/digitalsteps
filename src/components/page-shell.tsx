import type { ReactNode } from "react";
import { LogoMark } from "@/components/brand-logo";
import { BRAND, BRAND_LOGO } from "@/lib/brand";

export function PageShell({
  mood = "steady",
  kicker,
  title,
  lede,
  children,
}: {
  mood?: "steady" | "lost" | "fallen";
  kicker: string;
  /** Wrap the phrase to highlight in <em>. */
  title: ReactNode;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <main className="scene">
      <div className="card rise">
        <LogoMark variant={BRAND_LOGO} mood={mood} className="hero-mark" />
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
        {children}
        <p className="strapline">
          <strong>{BRAND.name}</strong> · {BRAND.strapline}
        </p>
      </div>
    </main>
  );
}
