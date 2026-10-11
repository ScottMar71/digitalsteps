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
        <p className="text-xs leading-4 font-medium tracking-[0.14em] text-deep uppercase">Contact</p>
        <h1 className="text-[2.5rem] leading-[1.07] font-medium sm:text-[3.5rem] sm:leading-[3.75rem] mt-4 text-deep">Your next digital step starts here.</h1>
        <p className="mt-6 text-charcoal">
          Learning, a team workshop, or something you want built. A short note is enough.
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
