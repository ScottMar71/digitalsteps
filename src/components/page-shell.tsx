import type { ReactNode } from "react";
import { StairMark } from "@/components/stair-mark";

export function PageShell({
  mood,
  kicker,
  title,
  lede,
  children,
}: {
  mood: "wait" | "miss" | "fall";
  kicker: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <main className="scene">
      <div className="card">
        <StairMark mood={mood} />
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
        {children}
      </div>
    </main>
  );
}
