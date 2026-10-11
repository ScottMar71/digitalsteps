import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { availabilityNote, site, tuitionCourses } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT tuition for beginners",
  description:
    "Patient one-to-one computer lessons and small-group digital skills courses in Norfolk, including computer basics, phones, office skills and AI.",
  alternates: { canonical: "/it-tuition" },
};

const delivery = [
  "One-to-one home tuition, subject to the travel area.",
  "Online tuition.",
  "Small-group classes at community venues, when a venue and dates are agreed.",
];

export default function TuitionPage() {
  return (
    <article>
      <header className="bg-mint">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-xs leading-4 font-medium tracking-[0.14em] text-deep uppercase">IT tuition</p>
          <h1 className="mt-4 max-w-3xl text-[2.5rem] leading-[1.07] font-medium text-deep sm:text-[3.5rem] sm:leading-[3.75rem]">
            Friendly IT tuition that starts with you.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-charcoal">
            Digital Steps offers patient one-to-one tuition and small-group learning for people of
            different ages and abilities. Lessons are arranged in {site.serviceArea}. {site.onlineNote}
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-8">
        <p className="max-w-2xl text-base leading-7 text-charcoal">
          Prices below are indicative launch prices. {availabilityNote}
        </p>
        {tuitionCourses.map((course) => (
          <section key={course.id} id={course.id} className="scroll-mt-24 rounded-3xl border border-soft bg-warm p-6 shadow-sm sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <h2 className="text-2xl leading-8 font-medium text-deep">{course.title}</h2>
                <p className="mt-2 text-base leading-7 text-charcoal">{course.summary}</p>
              </div>
              <p className="rounded-2xl bg-mint px-4 py-3 text-sm leading-5 font-medium text-deep">
                {course.format}
                <span className="mt-1 block text-lg leading-6">{course.price}</span>
              </p>
            </div>
            <p className="mt-3 text-sm leading-6 text-charcoal">{course.priceNote}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {course.topics.map((topic) => (
                <li key={topic} className="rounded-2xl bg-soft px-4 py-3 text-base leading-6 text-charcoal">
                  {topic}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="bg-soft" aria-labelledby="delivery-heading">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 id="delivery-heading" className="text-3xl leading-9 font-medium text-deep">How tuition can be delivered</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {delivery.map((item) => (
              <li key={item} className="rounded-3xl bg-warm p-5 text-base leading-7 text-charcoal shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]" aria-labelledby="tuition-enquiry">
        <div>
          <h2 id="tuition-enquiry" className="text-3xl leading-9 font-medium text-deep">
            Tell us what you&apos;d like to learn.
          </h2>
          <p className="mt-4 text-lg leading-7 text-charcoal">
            Choose a topic and how you would prefer to learn. The form opens your email app so you can send the note yourself.
          </p>
          <Link href="/contact?type=computer-tuition" className="mt-6 inline-flex text-sm leading-5 font-medium text-deep underline">
            Prefer the full contact page
          </Link>
        </div>
        <EnquiryForm
          idPrefix="tuition"
          defaultType="computer-tuition"
          showCourse
          submitLabel="Tell us what you'd like to learn"
        />
      </section>
    </article>
  );
}
