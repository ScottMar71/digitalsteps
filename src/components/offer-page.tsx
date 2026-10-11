import Link from "next/link";
import type { AreaTone } from "@/lib/site";

const panel: Record<AreaTone, string> = {
  mint: "bg-mint text-charcoal",
  fresh: "bg-fresh text-warm",
  deep: "bg-deep text-warm",
};

const chip: Record<AreaTone, string> = {
  mint: "bg-mint text-deep",
  fresh: "bg-fresh text-deep",
  deep: "bg-deep text-warm",
};

export function OfferPage({
  name,
  number,
  title,
  line,
  intro,
  topics,
  tone,
}: {
  name: string;
  number: string;
  title: string;
  line: string;
  intro: string;
  topics: readonly string[];
  tone: AreaTone;
}) {
  return (
    <article>
      <header className={`px-5 py-16 sm:px-8 sm:py-20 ${panel[tone]}`}>
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-16">
          <p className="text-xs leading-4 font-medium">
            Digital Steps
            <span className="mt-1 block text-base leading-5">{name}</span>
          </p>
          <div>
            <h1 className="text-[2.5rem] leading-[1.07] font-medium sm:text-[3.5rem] sm:leading-[3.75rem] max-w-3xl">{title}</h1>
            <p className="text-xs leading-4 font-medium mt-4 opacity-90">{line}</p>
            <p className="mt-10 text-5xl leading-none font-medium opacity-30" aria-hidden="true">
              {number}
            </p>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <p className="max-w-2xl text-charcoal">{intro}</p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {topics.map((topic) => (
            <li key={topic} className={`px-5 py-4 text-base leading-6 font-medium ${chip[tone]}`}>
              {topic}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-10 inline-flex h-12 items-center bg-deep px-5 text-sm leading-4 font-medium text-warm"
        >
          Start a conversation
        </Link>
      </div>
    </article>
  );
}
