"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Reveals [data-reveal] elements as they enter the viewport.
 * Content stays visible with no JavaScript and when motion is reduced.
 */
export function Motion() {
  const path = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length) return;

    const waiting: HTMLElement[] = [];
    for (const node of nodes) {
      if (node.classList.contains("is-in")) continue;
      const top = node.getBoundingClientRect().top;
      if (top > window.innerHeight * 0.92) waiting.push(node);
    }
    if (!waiting.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.14 },
    );

    for (const node of waiting) node.classList.add("will-reveal");

    const frame = requestAnimationFrame(() => {
      for (const node of waiting) {
        node.classList.add("is-armed");
        io.observe(node);
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, [path]);

  return null;
}
