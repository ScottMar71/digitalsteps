import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Digital Steps about a change you need people to make.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div>
        <p className="text-sm font-medium tracking-[0.16em] text-forest uppercase">Contact</p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Tell us what you want people to do differently.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          A short note is enough. Name the product, process, or skill, and what “better” would look
          like in a normal working week.
        </p>
      </div>
      <ContactForm />
    </article>
  );
}
