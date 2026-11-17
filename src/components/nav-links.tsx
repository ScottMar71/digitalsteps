"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { nav, serviceNav } from "@/content/site";

type Item = { href: string; label: string };

function isCurrent(path: string, href: string) {
  return path === href || path.startsWith(`${href}/`);
}

export function NavLinks() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const serviceCurrent = serviceNav.some((item) => isCurrent(path, item.href));

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="nav-desktop" aria-label="Primary">
      {nav.map((item, index) => (
        <span key={item.href} className="nav-slot">
          <Link href={item.href} aria-current={isCurrent(path, item.href) ? "page" : undefined}>
            {item.label}
          </Link>
          {index === 0 ? (
            <div ref={root} className={open ? "nav-services is-open" : serviceCurrent ? "nav-services is-current" : "nav-services"}>
              <button
                ref={buttonRef}
                type="button"
                aria-expanded={open}
                aria-controls={menuId}
                onClick={() => setOpen((value) => !value)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowDown") return;
                  event.preventDefault();
                  setOpen(true);
                  requestAnimationFrame(() => {
                    root.current?.querySelector<HTMLAnchorElement>(".nav-drop a")?.focus();
                  });
                }}
              >
                Services
                <span className="chev" aria-hidden="true" />
              </button>
              {open ? (
                <div id={menuId} className="nav-drop" role="group" aria-label="Services">
                  {serviceNav.map((item) => (
                    <Link key={item.href} href={item.href} aria-current={isCurrent(path, item.href) ? "page" : undefined}>
                      <span>{item.label}</span>
                      <small>{item.note}</small>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </span>
      ))}
      <Link href="/contact" className="button nav-cta">
        Start a project
      </Link>
    </nav>
  );
}

export function MobileNav({ items }: { items: readonly Item[] }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;

    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const sheet = sheetRef.current;
    const links = sheet ? Array.from(sheet.querySelectorAll<HTMLElement>("a, button")) : [];
    const focusable = [buttonRef.current, ...links].filter((node): node is HTMLElement => node !== null);
    (focusable[1] ?? focusable[0])?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className="nav-mobile">
      <button
        ref={buttonRef}
        type="button"
        className="menu-button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div ref={sheetRef} id={menuId} className="nav-sheet" role="dialog" aria-modal="true" aria-label="Menu">
          <nav aria-label="Primary">
            <Link href="/work" aria-current={isCurrent(path, "/work") ? "page" : undefined}>
              Work
            </Link>
            <span className="nav-group">Services</span>
            {serviceNav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isCurrent(path, item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
            {items
              .filter((item) => item.href !== "/work")
              .map((item) => (
                <Link key={item.href} href={item.href} aria-current={isCurrent(path, item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              ))}
            <Link href="/contact" className="button">
              Start a project
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
