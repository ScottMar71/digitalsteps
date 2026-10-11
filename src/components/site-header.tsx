"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="border-b border-soft bg-warm">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-3 text-deep" onClick={() => setOpen(false)}>
            <Logo />
            <span className="text-lg leading-6 font-medium">{site.name}</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-12 items-center gap-2 px-3 text-sm leading-4 font-medium text-deep lg:hidden"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
            {open ? "Close" : "Menu"}
          </button>
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            <NavLinks pathname={pathname} onNavigate={() => setOpen(false)} />
          </nav>
        </div>
        <nav
          id="primary-nav"
          aria-label="Primary"
          className={`${open ? "flex" : "hidden"} flex-col gap-1 pb-4 lg:hidden`}
        >
          <NavLinks pathname={pathname} onNavigate={() => setOpen(false)} />
        </nav>
      </div>
    </header>
  );
}

function NavLinks({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
  return (
    <>
      {nav.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
            className={`rounded-full px-3 py-2 text-sm leading-5 font-medium ${
              active ? "bg-mint text-deep" : "text-deep hover:bg-soft"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
      <Link
        href="/contact"
        onClick={onNavigate}
        className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-deep px-5 text-sm leading-4 font-medium text-warm lg:mt-0 lg:ml-2"
      >
        Get Started
      </Link>
    </>
  );
}
