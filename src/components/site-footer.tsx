import Link from "next/link";
import { Logo } from "@/components/brand-logo";
import { BRAND_LOGO } from "@/lib/brand";
import { footerLinks, nav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo variant={BRAND_LOGO} />
            <p>{site.strapline}</p>
            <p>
              {site.areaDetail} <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <nav aria-label="Services">
            <h2>Explore</h2>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="More">
            <h2>More</h2>
            <ul>
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            {site.name} · {site.area}
          </span>
          <span>Taught, not just built.</span>
        </div>
      </div>
    </footer>
  );
}
