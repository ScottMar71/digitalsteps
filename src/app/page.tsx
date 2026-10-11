import Link from "next/link";
import { services, steps } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-end">
        <div>
          <p className="text-sm font-medium tracking-[0.16em] text-forest uppercase">
            Learning that shows up at work
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Make the new way of working the normal way.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Digital Steps designs learning and adoption so people use the tools, products, and
            processes you already invested in. The measure is behaviour on the job.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-rust px-6 text-sm font-medium text-paper hover:bg-rust-deep"
            >
              Start a conversation
            </Link>
            <Link
              href="/approach"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 text-sm font-medium text-ink hover:bg-ink/5"
            >
              See the approach
            </Link>
          </div>
        </div>
        <ol className="rounded-[2rem] border border-line bg-paper/70 p-6 sm:p-8">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`grid grid-cols-[auto_1fr] gap-4 ${index > 0 ? "mt-5 border-t border-line pt-5" : ""}`}
            >
              <span className="font-serif text-sm text-rust">{step.number}</span>
              <div>
                <p className="font-medium text-ink">{step.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-forest text-paper" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 id="services-heading" className="font-serif text-3xl tracking-tight sm:text-4xl">
            What we work on
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number}>
                <p className="font-serif text-sm text-paper/90">{service.number}</p>
                <h3 className="mt-3 text-xl font-medium">{service.title}</h3>
                <p className="mt-3 leading-7 text-paper/80">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            A finished course is not a changed job.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            We start from the work, then design the smallest steps that make the new behaviour
            easier than the old one.
          </p>
        </div>
        <div className="rounded-[2rem] border border-line p-8">
          <h3 className="font-serif text-2xl">Who it is for</h3>
          <p className="mt-4 leading-7 text-muted">
            SaaS and service organisations. Useful when a launch is quiet, a process change is
            slipping, or a team is being asked to perform in a way training has not prepared them
            for.
          </p>
        </div>
      </section>
    </>
  );
}
