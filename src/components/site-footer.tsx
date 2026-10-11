import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-deep text-warm">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg leading-6 font-medium">Digital Steps</p>
          <p className="text-xs leading-4 font-medium mt-3 max-w-sm text-mint">{site.strapline}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          {nav.map((link) => (
            <Link key={link.href} href={link.href} className="text-xs leading-4 font-medium text-warm hover:text-mint">
              {link.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`} className="text-xs leading-4 font-medium text-mint">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
