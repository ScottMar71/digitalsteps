"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-soft bg-warm">
      <div className="mx-auto max-w-6xl px-5 sm:flex sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-lg font-medium tracking-tight text-deep">
            Digital Steps
          </Link>
          <button
            type="button"
            className="text-sm font-medium text-deep sm:hidden"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <nav
          id="primary-nav"
          aria-label="Primary"
          className={`${open ? "flex flex-col pb-4" : "hidden"} sm:flex sm:flex-row sm:items-center sm:gap-1 sm:py-4`}
        >
          {nav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 text-sm leading-4 font-medium ${
                  active ? "bg-mint text-deep" : "text-deep hover:bg-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
