import type { ReactNode } from "react";
import Link from "next/link";

export function OfferPage({
  eyebrow,
  title,
  intro,
  topics,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  topics: readonly string[];
  children?: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="flex items-center gap-3 text-xs font-medium tracking-[0.16em] text-deep uppercase">
        <span className="h-px w-8 bg-fresh" aria-hidden="true" />
        {eyebrow}
      </p>
      <h1 className="mt-5 max-w-3xl text-5xl leading-[0.98] font-medium tracking-tight text-deep">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 font-normal text-charcoal/85">{intro}</p>
      {children}
      <ul className="mt-12 grid gap-3 sm:grid-cols-2">
        {topics.map((topic) => (
          <li key={topic} className="border border-soft bg-mint/40 px-5 py-4 text-base font-medium text-deep">
            {topic}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-10 inline-flex h-12 items-center bg-deep px-5 text-sm font-medium text-warm hover:bg-deep/90"
      >
        Start a conversation
      </Link>
    </article>
  );
}
