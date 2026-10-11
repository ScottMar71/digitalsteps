import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { buildServices, projectTypes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Websites and apps for small businesses",
  description:
    "Straightforward websites and small web apps for growing businesses, with handover training. Indicative starting prices, subject to scope.",
  alternates: { canonical: "/websites-and-apps" },
};

export default function WebsitesPage() {
  return (
    <article>
      <header className="bg-deep text-warm">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-xs leading-4 font-medium tracking-[0.14em] text-mint uppercase">Websites and apps</p>
          <h1 className="mt-4 max-w-3xl text-[2.5rem] leading-[1.07] font-medium sm:text-[3.5rem] sm:leading-[3.75rem]">
            Practical digital solutions for growing businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-warm/90">
            Digital Steps builds straightforward websites and web applications, then helps you
            understand how to manage and use them. Teaching stays part of the work.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-8 lg:grid-cols-2">
        <ServiceBlock
          title={buildServices.websites.title}
          price={buildServices.websites.price}
          note={buildServices.websites.priceNote}
          items={buildServices.websites.items}
        />
        <ServiceBlock
          title={buildServices.apps.title}
          price={buildServices.apps.price}
          note={buildServices.apps.priceNote}
          items={buildServices.apps.items}
        />
      </div>

      <section className="bg-soft" aria-labelledby="care-heading">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 id="care-heading" className="text-3xl leading-9 font-medium text-deep">
            Website care and support
          </h2>
          <p className="mt-3 text-lg leading-7 font-medium text-deep">{buildServices.care.price}</p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-charcoal">
            Hosting, third-party subscriptions and extra development are charged separately, and only
            when that is written into the agreement.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-warm p-6">
              <h3 className="text-lg leading-7 font-medium text-deep">Included in the illustration</h3>
              <ul className="mt-3 grid gap-2">
                {buildServices.care.includes.map((item) => (
                  <li key={item} className="text-base leading-7 text-charcoal">{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-mint p-6">
              <h3 className="text-lg leading-7 font-medium text-deep">Not included</h3>
              <ul className="mt-3 grid gap-2">
                {buildServices.care.excludes.map((item) => (
                  <li key={item} className="text-base leading-7 text-charcoal">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="text-3xl leading-9 font-medium text-deep">The kinds of projects we can take on</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-charcoal">
          There is no client portfolio on this site yet. These are examples of the work, not completed commissions.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {projectTypes.map((item) => (
            <li key={item} className="rounded-2xl border border-soft px-4 py-3 text-base leading-7 text-charcoal">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-lg leading-7 font-medium text-deep">
          We don&apos;t just build your digital solution. We help you understand how to use it.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]" aria-labelledby="build-enquiry">
        <h2 id="build-enquiry" className="text-3xl leading-9 font-medium text-deep">
          Discuss a website or app project
        </h2>
        <EnquiryForm
          idPrefix="build"
          defaultType="website"
          showOrganisation
          showTopics
          submitLabel="Discuss a website or app project"
        />
      </section>
    </article>
  );
}

function ServiceBlock({
  title,
  price,
  note,
  items,
}: {
  title: string;
  price: string;
  note: string;
  items: readonly string[];
}) {
  return (
    <section className="rounded-3xl border border-soft bg-warm p-6 shadow-sm">
      <h2 className="text-2xl leading-8 font-medium text-deep">{title}</h2>
      <p className="mt-3 text-lg leading-7 font-medium text-deep">From {price}</p>
      <p className="mt-2 text-sm leading-6 text-charcoal">{note}</p>
      <ul className="mt-5 grid gap-2">
        {items.map((item) => (
          <li key={item} className="text-base leading-7 text-charcoal">{item}</li>
        ))}
      </ul>
    </section>
  );
}
