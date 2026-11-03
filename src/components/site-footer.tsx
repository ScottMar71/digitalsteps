import Link from "next/link";
import { Logo } from "@/components/brand-logo";
import { BRAND_LOGO } from "@/lib/brand";
import { footerLinks, footerServices, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo variant={BRAND_LOGO} tone="paper" />
            <p>{site.proposition}</p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              {site.area}
            </p>
          </div>
          <nav aria-label="Services">
            <h2>Services</h2>
            <ul>
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Studio">
            <h2>Studio</h2>
            <ul>
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <a href={site.linkedin} rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            {site.name} · {site.areaShort}
          </span>
          <span>No templates. No shortcuts.</span>
        </div>
      </div>
    </footer>
  );
}
