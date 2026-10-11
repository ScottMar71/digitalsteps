import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description: "How Digital Steps aims to keep this website usable, and how to report a barrier.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <h1 className="text-4xl leading-10 font-medium text-deep">Accessibility statement</h1>
      <div className="mt-8 grid gap-6 text-base leading-7 text-charcoal">
        <p>
          {site.name} wants this website to be usable by people with different levels of confidence,
          including older adults and people using a keyboard or a phone. The design aim is WCAG 2.2 AA.
          Publishing this page is not a claim that every check has been completed.
        </p>
        <p>
          Pages use headings, labels on form fields, visible focus, and text that can be resized by the
          browser. Colour is not the only way a choice is shown.
        </p>
        <p>
          If something blocks you, write with the page address and what you were trying to do.
          {site.email ? (
            <>
              {" "}
              Use{" "}
              <a className="font-medium text-deep underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </>
          ) : (
            " A contact address will be added here."
          )}
        </p>
      </div>
    </article>
  );
}
