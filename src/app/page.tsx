import Link from "next/link";
import { destinations, pathways, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end">
        <div>
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.16em] text-deep uppercase">
            <span className="h-px w-8 bg-fresh" aria-hidden="true" />
            Practical skills · Patient support
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[0.96] font-medium tracking-tight text-deep sm:text-6xl">
            Technology made simple.{" "}
            <span className="block">
              Confidence built <span className="text-fresh whitespace-nowrap">step by step.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 font-normal text-charcoal/85">
            Friendly IT tuition, digital skills training and practical technology solutions for
            individuals and businesses.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/learn"
              className="inline-flex h-12 items-center justify-between gap-6 bg-deep px-5 text-sm font-medium text-warm hover:bg-deep/90 sm:justify-center"
            >
              Explore IT courses
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/business"
              className="inline-flex h-12 items-center justify-center border border-deep px-5 text-sm font-medium text-deep hover:bg-mint"
            >
              Business services
            </Link>
          </div>
        </div>
        <ol className="grid gap-3">
          {pathways.map((item) => (
            <li key={item.number}>
              <Link
                href={item.href}
                className="grid grid-cols-[auto_1fr] gap-4 border border-soft bg-soft/60 px-5 py-5 hover:bg-mint"
              >
                <span className="text-sm font-medium text-fresh">{item.number}</span>
                <span>
                  <span className="block text-xl font-medium text-deep">{item.title}</span>
                  <span className="mt-1 block text-sm font-normal text-charcoal/80">{item.body}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-deep text-warm" aria-labelledby="belief-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-medium tracking-[0.16em] text-mint uppercase">Core belief</p>
          <h2 id="belief-heading" className="mt-4 max-w-3xl text-3xl leading-tight font-medium sm:text-4xl">
            {site.belief}
          </h2>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="destinations-heading">
        <h2 id="destinations-heading" className="text-3xl leading-tight font-medium text-deep">
          One journey. Three destinations.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {destinations.map((item) => (
            <article key={item.href} className="flex flex-col border border-soft bg-warm p-6">
              <p className="text-xs font-medium tracking-[0.14em] text-fresh uppercase">{item.eyebrow}</p>
              <h3 className="mt-4 text-2xl leading-snug font-medium text-deep">{item.title}</h3>
              <p className="mt-3 flex-1 text-base leading-7 font-normal text-charcoal/85">{item.body}</p>
              <Link href={item.href} className="mt-6 text-sm font-medium text-deep hover:text-fresh">
                {item.label}
                <span aria-hidden="true"> →</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
