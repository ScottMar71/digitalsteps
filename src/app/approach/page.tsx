import type { Metadata } from "next";
import Link from "next/link";
import { steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Digital Steps designs learning and adoption around observable behaviour at work.",
};

const limits = [
  "A catalogue of courses nobody asked for",
  "A launch webinar treated as an adoption plan",
  "Success reported as seats filled",
];

export default function ApproachPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-sm font-medium tracking-[0.16em] text-forest uppercase">Approach</p>
      <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
        Four steps, then we look at the work again.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        The sequence stays small on purpose. Each step has to be visible in the job, not only in a
        learning plan.
      </p>

      <ol className="mt-14 grid gap-6">
        {steps.map((step) => (
          <li
            key={step.number}
            className="grid gap-4 rounded-[2rem] border border-line p-6 sm:grid-cols-[5rem_1fr] sm:p-8"
          >
            <span className="font-serif text-2xl text-rust">{step.number}</span>
            <div>
              <h2 className="text-2xl font-medium">{step.title}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-16 rounded-[2rem] bg-forest px-6 py-10 text-paper sm:px-10" aria-labelledby="limits-heading">
        <h2 id="limits-heading" className="font-serif text-3xl">
          What we leave out
        </h2>
        <ul className="mt-6 grid gap-3">
          {limits.map((item) => (
            <li key={item} className="border-t border-paper/20 pt-3 leading-7 text-paper/85">
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-paper px-6 text-sm font-medium text-forest"
        >
          Start a conversation
        </Link>
      </section>
    </article>
  );
}
