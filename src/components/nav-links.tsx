"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type Item = { href: string; label: string };

export function NavLinks({ items, className }: { items: readonly Item[]; className?: string }) {
  const path = usePathname();
  return (
    <nav className={className} aria-label="Primary">
      {items.map((item) => {
        const active = path === item.href || path.startsWith(`${item.href}/`);
        return (
          <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
            {item.label}
          </Link>
        );
      })}
      <Link href="/contact" className="button nav-cta">
        Start a project
      </Link>
    </nav>
  );
}

export function MobileNav({ items }: { items: readonly Item[] }) {
  const path = usePathname();
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [path]);

  return (
    <details className="nav-mobile" ref={ref}>
      <summary>Menu</summary>
      <div className="nav-panel">
        {items.map((item) => {
          const active = path === item.href || path.startsWith(`${item.href}/`);
          return (
            <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
              {item.label}
            </Link>
          );
        })}
        <Link href="/contact" className="button">
          Start a project
        </Link>
      </div>
    </details>
  );
}
