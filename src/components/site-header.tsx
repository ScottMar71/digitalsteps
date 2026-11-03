import Link from "next/link";
import { Logo } from "@/components/brand-logo";
import { MobileNav, NavLinks } from "@/components/nav-links";
import { BRAND_LOGO } from "@/lib/brand";
import { nav } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="header-logo" aria-label="Digital Steps home">
          <Logo variant={BRAND_LOGO} tone="paper" />
        </Link>
        <NavLinks items={nav} className="nav-desktop" />
        <MobileNav items={nav} />
      </div>
    </header>
  );
}
