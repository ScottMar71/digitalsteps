import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-soft bg-warm">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-medium text-deep">Digital Steps</p>
          <p className="mt-3 max-w-sm text-sm leading-6 font-normal text-charcoal/80">
            Technology made simple. Confidence built step by step.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm font-medium sm:flex-row sm:items-center sm:gap-6">
          {nav.map((link) => (
            <Link key={link.href} href={link.href} className="text-deep hover:text-fresh">
              {link.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`} className="text-deep hover:text-fresh">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
