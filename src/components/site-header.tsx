import Link from "next/link";
import { Logo } from "@/components/brand-logo";
import { BRAND_LOGO } from "@/lib/brand";
import { nav } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="header-logo" aria-label="Digital Steps home">
          <Logo variant={BRAND_LOGO} />
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="button nav-cta">
            Book a session
          </Link>
        </nav>

        {/* Native disclosure so the menu works without JavaScript. */}
        <details className="nav-mobile">
          <summary aria-label="Open menu">Menu</summary>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="button">
                Book a session
              </Link>
            </li>
          </ul>
        </details>
      </div>
    </header>
  );
}
