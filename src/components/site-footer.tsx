import Link from "next/link";
import { Logo } from "@/components/logo";
import { legalLinks, nav, site, socialLinks } from "@/lib/site";

export async function SiteFooter() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-deep text-warm">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="w-fit rounded-2xl bg-warm px-3 py-2">
            <Logo className="h-14 w-auto" />
          </p>
          <p className="mt-4 max-w-sm text-base leading-7 text-mint">{site.strapline}</p>
          <p className="mt-4 text-sm leading-6 text-warm/90">
            Lessons in {site.serviceArea}. {site.onlineNote}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid gap-2">
            {nav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm leading-6 font-medium text-warm hover:text-mint">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm leading-6">
          {site.email ? (
            <a href={`mailto:${site.email}`} className="font-medium text-mint">
              {site.email}
            </a>
          ) : (
            <p>Contact details will be published here.</p>
          )}
          {site.phone ? <p className="mt-2">{site.phone}</p> : null}
          {socialLinks.length > 0 ? (
            <ul className="mt-4 grid gap-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-warm hover:text-mint">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <ul className="mt-4 grid gap-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-warm hover:text-mint">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-warm/15">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs leading-4 font-medium text-mint sm:px-8">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
