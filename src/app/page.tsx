import Link from "next/link";
import { ServiceCards } from "@/components/service-cards";
import { areas, site } from "@/lib/site";

const detailTone = {
  mint: "bg-mint",
  fresh: "bg-fresh",
  deep: "bg-deep",
} as const;

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="text-xs leading-4 font-medium tracking-[0.14em] text-deep uppercase">Digital Steps</p>
        <h1 className="text-[2.5rem] leading-[1.07] font-medium sm:text-[3.5rem] sm:leading-[3.75rem] mt-4 max-w-3xl text-deep">
          One step closer to <span className="text-fresh">digital confidence.</span>
        </h1>
        <p className="mt-6 max-w-xl text-charcoal">{site.barrier}</p>
        <p className="text-xs leading-4 font-medium mt-6 max-w-md text-deep">{site.strapline}</p>
      </section>

      <ServiceCards />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="areas-heading">
        <h2 id="areas-heading" className="text-[2.5rem] leading-[1.07] font-medium sm:text-[3.5rem] sm:leading-[3.75rem] max-w-2xl text-deep">
          Three service areas. One brand.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {areas.map((area) => (
            <article key={area.href}>
              <div className={`h-2 w-16 ${detailTone[area.tone]}`} aria-hidden="true" />
              <h3 className="mt-5 text-2xl leading-8 font-medium text-deep">Digital Steps {area.name}</h3>
              <p className="mt-3 text-charcoal">{area.body}</p>
              <Link href={area.href} className="text-xs leading-4 font-medium mt-5 inline-flex text-deep">
                {area.name}
                <span aria-hidden="true"> →</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-deep text-warm">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs leading-4 font-medium tracking-[0.14em] text-mint uppercase">Next step</p>
            <h2 className="mt-4 max-w-xl text-4xl leading-[2.6rem] font-medium">{site.strapline}</h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center bg-mint px-5 text-sm leading-4 font-medium text-deep"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
