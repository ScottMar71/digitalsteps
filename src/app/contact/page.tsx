import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactEnquiry } from "@/components/contact-enquiry";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ask Digital Steps about computer tuition, group courses, business training, a website or an app.",
  alternates: { canonical: "/contact" },
};

const paths = [
  {
    title: "For individuals",
    body: "Computer tuition, digital confidence, courses and help with everyday technology.",
    href: "/it-tuition",
  },
  {
    title: "For businesses",
    body: "Staff training, websites, apps and digital solutions.",
    href: "/business-training",
  },
];

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="text-xs leading-4 font-medium tracking-[0.14em] text-deep uppercase">Contact</p>
      <h1 className="mt-4 max-w-3xl text-[2.5rem] leading-[1.07] font-medium text-deep sm:text-[3.5rem] sm:leading-[3.75rem]">
        Let&apos;s take your next digital step.
      </h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {paths.map((item) => (
          <Link key={item.title} href={item.href} className="rounded-3xl bg-mint p-6">
            <h2 className="text-xl leading-7 font-medium text-deep">{item.title}</h2>
            <p className="mt-2 text-base leading-7 text-charcoal">{item.body}</p>
          </Link>
        ))}
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <h2 className="text-2xl leading-8 font-medium text-deep">Send an enquiry</h2>
          <p className="mt-3 text-base leading-7 text-charcoal">
            Lessons are based in {site.serviceArea}. {site.onlineNote}
          </p>
          {site.email ? (
            <p className="mt-4 text-sm leading-6 text-charcoal">
              Or write directly to{" "}
              <a className="font-medium text-deep underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          ) : null}
        </div>
        <Suspense fallback={<p className="text-base leading-7 text-charcoal">Loading the enquiry form.</p>}>
          <ContactEnquiry />
        </Suspense>
      </div>
    </article>
  );
}
