import Image from "next/image";
import Link from "next/link";
import { Laptop, Smartphone, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { learningPaths, reasons, site, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Steps · Computer lessons and digital skills training",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Digital Steps · Computer lessons and digital skills training",
    description: site.description,
    url: "/",
  },
};

const pathIcons = [Laptop, Smartphone, Sparkles];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs leading-4 font-medium tracking-[0.14em] text-deep uppercase">
            IT tuition in {site.serviceArea}
          </p>
          <h1 className="mt-4 max-w-xl text-[2.5rem] leading-[1.07] font-medium text-deep sm:text-[3.5rem] sm:leading-[3.75rem]">
            {site.strapline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-7 text-charcoal">
            Friendly IT tuition, digital skills training and practical technology solutions for
            individuals and businesses. Learn at your own pace, build confidence and discover what
            technology can help you achieve.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/it-tuition" className="inline-flex h-12 items-center justify-center rounded-full bg-deep px-5 text-sm leading-4 font-medium text-warm">
              Explore IT Tuition
            </Link>
            <Link href="/business-training" className="inline-flex h-12 items-center justify-center rounded-full border border-deep px-5 text-sm leading-4 font-medium text-deep">
              Business Services
            </Link>
          </div>
          <p className="mt-6 text-sm leading-6 font-medium text-deep">
            Patient, practical teaching. No question is too basic.
          </p>
        </div>
        <figure className="overflow-hidden rounded-3xl bg-mint shadow-sm">
          <Image
            src="/learning.jpg"
            alt="One person points to a laptop screen while another person uses the trackpad."
            width={1600}
            height={1067}
            priority
            className="h-full w-full object-cover"
          />
          <figcaption className="px-4 py-3 text-xs leading-4 font-medium text-deep">
            Photo by John Schnobrich on Unsplash
          </figcaption>
        </figure>
      </section>

      <section className="bg-soft" aria-labelledby="learn-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 id="learn-heading" className="text-3xl leading-9 font-medium text-deep sm:text-4xl sm:leading-10">
            Take your next digital step.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-charcoal">
            Learners can get patient, practical support whether they are starting from scratch,
            improving workplace skills or exploring new technology.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {learningPaths.map((item, index) => {
              const Icon = pathIcons[index];
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col rounded-3xl bg-warm p-6 shadow-sm"
                >
                  <Icon aria-hidden="true" className="text-fresh" />
                  <h3 className="mt-4 text-xl leading-7 font-medium text-deep">{item.title}</h3>
                  <p className="mt-2 flex-1 text-base leading-7 text-charcoal">{item.body}</p>
                  <span className="mt-5 text-sm leading-5 font-medium text-deep">See this tuition</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-3xl leading-9 font-medium text-deep sm:text-4xl sm:leading-10">
          How learning works
        </h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-3xl border border-soft bg-warm p-6">
              <p className="text-sm leading-5 font-medium text-deep">Step {index + 1}</p>
              <h3 className="mt-3 text-xl leading-7 font-medium text-deep">{step.title}</h3>
              <p className="mt-2 text-base leading-7 text-charcoal">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-mint" aria-labelledby="business-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 id="business-heading" className="max-w-2xl text-3xl leading-9 font-medium text-deep sm:text-4xl sm:leading-10">
            Helping small businesses make better use of technology.
          </h2>
          <ul className="mt-6 grid max-w-2xl gap-2 text-lg leading-7 text-charcoal">
            <li>Staff digital skills training.</li>
            <li>AI awareness and practical adoption.</li>
            <li>Website development.</li>
            <li>Web apps and digital workflows.</li>
          </ul>
          <Link href="/business-training" className="mt-8 inline-flex h-12 items-center rounded-full bg-deep px-5 text-sm leading-4 font-medium text-warm">
            Explore Business Services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="why-heading">
        <h2 id="why-heading" className="text-3xl leading-9 font-medium text-deep sm:text-4xl sm:leading-10">
          Why Digital Steps?
        </h2>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {reasons.map((reason) => (
            <li key={reason} className="rounded-2xl bg-soft px-5 py-4 text-base leading-7 text-charcoal">
              {reason}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-deep text-warm">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="max-w-xl text-3xl leading-9 font-medium sm:text-4xl sm:leading-10">
            Ready to take your next digital step?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-warm/90">
            Whether you want help with your first computer lesson or need technology training for
            your business, let&apos;s talk about what you need.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact?type=computer-tuition" className="inline-flex h-12 items-center justify-center rounded-full bg-mint px-5 text-sm leading-4 font-medium text-deep">
              Book an Initial Conversation
            </Link>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border border-warm px-5 text-sm leading-4 font-medium text-warm">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
