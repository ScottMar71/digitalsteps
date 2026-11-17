"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";

export type StudioItem = {
  slug: string;
  name: string;
  industry: string;
  statusLabel: string;
  summary: string;
  src: string;
  alt: string;
};

export function HeroStudio({ items }: { items: StudioItem[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = items[active] ?? items[0];

  if (!current) return null;

  function select(index: number) {
    const next = (index + items.length) % items.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  function onTabsKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      select(active + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      select(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(items.length - 1);
    }
  }

  return (
    <div className="studio">
      <div className="studio-tabs" role="tablist" aria-label="Selected projects" onKeyDown={onTabsKeyDown}>
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.slug}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`studio-tab-${item.slug}`}
              aria-selected={selected}
              aria-controls="studio-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
            >
              <span className="studio-tab-index">0{index + 1}</span>
              {item.name}
            </button>
          );
        })}
      </div>

      <div className="studio-stage" id="studio-panel" role="tabpanel" aria-labelledby={`studio-tab-${current.slug}`}>
        <div className="studio-frame">
          <div className="browser-chrome" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="studio-screen">
            {items.map((item, index) => (
              <div key={item.slug} className={index === active ? "studio-shot is-active" : "studio-shot"} aria-hidden={index !== active}>
                <Image
                  src={item.src}
                  alt={index === active ? item.alt : ""}
                  fill
                  sizes="(max-width: 980px) 92vw, 640px"
                  preload={index === 0}
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="studio-copy">
          <p className="studio-meta">
            {current.statusLabel}
            <span aria-hidden="true"> · </span>
            {current.industry}
          </p>
          <p>{current.summary}</p>
          <Link className="text-link" href={`/work/${current.slug}`}>
            View project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
