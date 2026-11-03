import type { ReactNode } from "react";

export function PageHead({ kicker, title, lede }: { kicker: string; title: ReactNode; lede?: string }) {
  return (
    <header className="page-hero">
      <div className="container">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  );
}

export function ProsePage({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <article className="prose-page">
      <header className="container prose-head">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </header>
      <div className="container prose">{children}</div>
    </article>
  );
}
