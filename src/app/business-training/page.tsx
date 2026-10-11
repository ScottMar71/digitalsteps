import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { businessPrices, businessServices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT training for small businesses",
  description:
    "Practical digital skills, Microsoft 365 and AI workshops for small teams in Norfolk, with indicative training prices.",
  alternates: { canonical: "/business-training" },
};

const formats = [
  "On-site workshops, subject to location and availability.",
  "Remote training.",
  "Small-group training.",
  "Tailored sessions after a conversation about what the team needs.",
];

export default function BusinessTrainingPage() {
  return (
    <article>
      <header className="border-t-8 border-fresh bg-soft">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-xs leading-4 font-medium tracking-[0.14em] text-deep uppercase">Business training</p>
          <h1 className="mt-4 max-w-3xl text-[2.5rem] leading-[1.07] font-medium text-deep sm:text-[3.5rem] sm:leading-[3.75rem]">
            Build your team&apos;s digital confidence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-charcoal">
            Digital Steps is a practical training partner for small businesses and organisations in{" "}
            {site.serviceArea} that need people to use technology more confidently.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-5 px-5 py-14 sm:px-8 md:grid-cols-2">
        {businessServices.map((service) => (
          <section key={service.title} className="rounded-3xl border border-soft bg-warm p-6 shadow-sm">
            <h2 className="text-xl leading-7 font-medium text-deep">{service.title}</h2>
            <p className="mt-3 text-base leading-7 text-charcoal">{service.outcome}</p>
          </section>
        ))}
      </div>

      <section className="bg-soft" aria-labelledby="format-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 id="format-heading" className="text-3xl leading-9 font-medium text-deep">How sessions can run</h2>
            <ul className="mt-5 grid gap-3">
              {formats.map((item) => (
                <li key={item} className="rounded-2xl bg-warm px-4 py-3 text-base leading-7 text-charcoal">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl leading-9 font-medium text-deep">Indicative starting prices</h2>
            <p className="mt-3 text-base leading-7 text-charcoal">
              These are starting points, subject to scope and requirements. They are not a quote.
            </p>
            <ul className="mt-5 grid gap-3">
              {businessPrices.map((item) => (
                <li key={item.label} className="flex items-center justify-between gap-4 rounded-2xl bg-mint px-4 py-3">
                  <span className="text-base leading-6 text-deep">{item.label}</span>
                  <span className="text-sm leading-5 font-medium text-deep">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]" aria-labelledby="training-enquiry">
        <div>
          <h2 id="training-enquiry" className="text-3xl leading-9 font-medium text-deep">
            Discuss your training needs
          </h2>
          <p className="mt-4 text-lg leading-7 text-charcoal">
            Tell us who the session is for and which tasks the team needs to handle with more confidence.
          </p>
        </div>
        <EnquiryForm
          idPrefix="business"
          defaultType="business-training"
          showOrganisation
          showParticipants
          showTopics
          submitLabel="Discuss your training needs"
        />
      </section>
    </article>
  );
}
