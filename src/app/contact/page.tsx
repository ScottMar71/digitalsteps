import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Digital Steps which step you want to take next.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
      <div>
        <p className="flex items-center gap-3 text-xs font-medium tracking-[0.16em] text-deep uppercase">
          <span className="h-px w-8 bg-fresh" aria-hidden="true" />
          Contact
        </p>
        <h1 className="mt-5 text-5xl leading-[0.98] font-medium tracking-tight text-deep">
          Your next digital step starts here.
        </h1>
        <p className="mt-6 text-lg leading-8 font-normal text-charcoal/85">
          Say whether you want to learn, train a team, or build something. A short note is enough.
        </p>
        <p className="mt-6 text-sm font-medium text-deep">
          <a href={`mailto:${site.email}`} className="hover:text-fresh">
            {site.email}
          </a>
        </p>
      </div>
      <ContactForm />
    </article>
  );
}
