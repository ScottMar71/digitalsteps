import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Digital Steps makes technology easier to learn through patient teaching, practical examples and straightforward digital help for people and small organisations in Norfolk.",
  alternates: { canonical: "/about" },
};

const approach = [
  "Understanding each learner's starting point.",
  "Explaining ideas in plain English.",
  "Learning through practical examples.",
  "Building confidence gradually.",
  "Helping people use their skills on their own.",
];

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="text-xs leading-4 font-medium tracking-[0.14em] text-deep uppercase">About</p>
      <h1 className="mt-4 max-w-3xl text-[2.5rem] leading-[1.07] font-medium text-deep sm:text-[3.5rem] sm:leading-[3.75rem]">
        Technology is easier when someone helps you take the next step.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-7 text-charcoal">
        Digital Steps exists to make technology more accessible through patient teaching, practical
        guidance and straightforward digital solutions. The business works with individuals, small
        businesses and community organisations.
      </p>
      <h2 className="mt-12 text-2xl leading-8 font-medium text-deep">How the teaching works</h2>
      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {approach.map((item) => (
          <li key={item} className="rounded-2xl bg-mint px-4 py-3 text-base leading-7 text-charcoal">
            {item}
          </li>
        ))}
      </ul>
      <section className="mt-12 rounded-3xl border border-dashed border-deep/30 bg-soft p-6" aria-labelledby="founder-heading">
        <p className="text-xs leading-4 font-medium tracking-[0.14em] text-deep uppercase">Placeholder — replace before launch</p>
        <h2 id="founder-heading" className="mt-3 text-2xl leading-8 font-medium text-deep">Founder</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-charcoal">
          A name, a short biography and a photograph will go here. Nothing in this box is a claim
          about a real person.
        </p>
      </section>
      <Link href="/contact" className="mt-10 inline-flex h-12 items-center rounded-full bg-deep px-5 text-sm leading-4 font-medium text-warm">
        Let&apos;s talk about what you need
      </Link>
    </article>
  );
}
