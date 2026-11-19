"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type ShowProject = {
  slug: string;
  name: string;
  image: string;
  phoneImage?: string;
  url: string;
};

const hosting = [
  ["Secure hosting", "The site stays online, on hosting we understand and can actually do something about."],
  ["SSL certificates", "The padlock is included, so visitors are not warned away at the front door."],
  ["Domain management", "Your name, renewed and pointed at the right place. No scavenger hunt when it expires."],
  ["Email forwarding", "A proper address that arrives with a person, not a mailbox nobody opens."],
  ["Website backups", "A copy, kept, so a mistake or a bad day is recoverable."],
  ["Ongoing technical support", "The unglamorous work: updates, checks, and a reply when something looks odd."],
] as const;

const support = [
  ["Website updates", "A new price, a new photo, a closed week. Sent, changed, confirmed."],
  ["Content changes", "Words edited with you, not dumped into a form and hoped for the best."],
  ["Technical assistance", "The contact form, the domain, the thing that worked yesterday. Looked at properly."],
  ["Website maintenance", "The quiet upkeep that stops a small site becoming a fragile one."],
  ["Advice", "If you do not need a new feature, we will say so. If you do, we will explain it first."],
] as const;

function hostOf(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function Shots({
  projects,
  active,
  sizes,
  preloadFirst = false,
  phone = false,
}: {
  projects: ShowProject[];
  active: string;
  sizes: string;
  preloadFirst?: boolean;
  phone?: boolean;
}) {
  return (
    <div className="frame-screen">
      {projects.map((project, index) => (
        <Image
          key={project.slug}
          src={phone ? (project.phoneImage ?? project.image) : project.image}
          alt=""
          fill
          sizes={sizes}
          preload={preloadFirst && index === 0}
          className={project.slug === active ? "shot is-live" : "shot"}
        />
      ))}
    </div>
  );
}

export function ShowpieceHome({ projects }: { projects: ShowProject[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const rigRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(projects[0]?.slug ?? "");
  const [openCare, setOpenCare] = useState(0);
  const project = projects.find((item) => item.slug === active) ?? projects[0];

  const { contextSafe } = useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      if (reduce) return;

      gsap.from(".show-line > span", {
        yPercent: 115,
        duration: 1.05,
        ease: "power4.out",
        stagger: 0.07,
      });

      gsap.from(".stage", {
        y: 32,
        autoAlpha: 0,
        duration: 1,
        delay: 0.12,
        ease: "power3.out",
      });

      gsap.fromTo(
        ".shot",
        { scale: 1.08, yPercent: 0 },
        { scale: 1.08, yPercent: -6, duration: 7.5, ease: "sine.inOut", yoyo: true, repeat: -1 },
      );

      gsap.to(".frame-phone", {
        y: -42,
        ease: "none",
        scrollTrigger: {
          trigger: ".show-hero",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.7,
        },
      });

      gsap.to(".frame-browser", {
        y: 32,
        ease: "none",
        scrollTrigger: {
          trigger: ".show-hero",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.7,
        },
      });

      gsap.utils.toArray<HTMLElement>(".mention-title").forEach((title) => {
        gsap.from(title, {
          y: 24,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: title, start: "top 88%", toggleActions: "play none none reverse" },
        });
      });

      if (fine && stageRef.current && rigRef.current) {
        const stage = stageRef.current;
        const rig = rigRef.current;
        const xTo = gsap.quickTo(rig, "rotationY", { duration: 0.55, ease: "power3" });
        const yTo = gsap.quickTo(rig, "rotationX", { duration: 0.55, ease: "power3" });
        const onMove = (event: MouseEvent) => {
          const box = stage.getBoundingClientRect();
          const px = (event.clientX - box.left) / box.width - 0.5;
          const py = (event.clientY - box.top) / box.height - 0.5;
          xTo(px * 7);
          yTo(py * -5);
        };
        const onLeave = () => {
          xTo(0);
          yTo(0);
        };
        stage.addEventListener("mousemove", onMove);
        stage.addEventListener("mouseleave", onLeave);
        return () => {
          stage.removeEventListener("mousemove", onMove);
          stage.removeEventListener("mouseleave", onLeave);
        };
      }
    },
    { scope: rootRef },
  );

  const onPick = contextSafe((slug: string) => {
    setActive(slug);
    if (!rigRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(rigRef.current, { y: 14, scale: 0.985 }, { y: 0, scale: 1, duration: 0.55, ease: "power3.out" });
  });

  if (!project) return null;

  return (
    <div className="showpiece" ref={rootRef}>
      <section className="show-hero">
        <div className="container show-layout">
          <div className="show-copy">
            <p className="show-pills">
              <span>Website</span>
              <span>Mobile first</span>
            </p>
            <h1 className="show-title">
              <span className="show-line">
                <span>Websites</span>
              </span>
              <span className="show-line">
                <span>worth</span>
              </span>
              <span className="show-line">
                <span>
                  opening<span className="show-dot">.</span>
                </span>
              </span>
            </h1>
            <p className="lede">Two live sites. Designed on a phone first, for Norfolk and Suffolk.</p>
            <div className="actions">
              <Link className="button" href="/contact">
                Start a project
              </Link>
              <a className="button-quiet" href="#sites">
                See them
              </a>
            </div>
          </div>

          <div className="stage" id="sites" ref={stageRef}>
            <div className="stage-rig" ref={rigRef} aria-hidden="true">
              <div className="frame frame-phone">
                <Shots projects={projects} active={project.slug} sizes="180px" phone />
              </div>
              <div className="frame frame-browser">
                <div className="frame-bar">
                  <i />
                  <i />
                  <i />
                  <span>{hostOf(project.url)}</span>
                </div>
                <Shots projects={projects} active={project.slug} sizes="(max-width: 800px) 80vw, 520px" preloadFirst />
              </div>
            </div>
            <div className="stage-foot">
              <p>
                <span className="live-dot" />
                Live · {project.name}
              </p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Open the site
              </a>
            </div>
            <div className="switch" role="group" aria-label="Choose a live site">
              {projects.map((item) => (
                <button key={item.slug} type="button" aria-pressed={item.slug === project.slug} onClick={() => onPick(item.slug)}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="show-block" aria-labelledby="mention-heading">
        <div className="container">
          <h2 id="mention-heading" className="show-kicker">
            Mentioned, and nothing else.
          </h2>
          <div className="mention-list">
            <a className="mention" href="#sites">
              <span>Websites</span>
              <strong className="mention-title">Norfolk Run Collective and RunPattern.</strong>
              <em>View</em>
            </a>
            <a className="mention" href="https://www.run-pilot.com" target="_blank" rel="noopener noreferrer">
              <span>Apps</span>
              <strong className="mention-title">RunPilot.</strong>
              <em>Open</em>
            </a>
            <Link className="mention" href="/hosting">
              <span>Hosting</span>
              <strong className="mention-title">The site has a home, and someone has the keys.</strong>
              <em>Read</em>
            </Link>
          </div>
        </div>
      </section>

      <section className="show-block" aria-labelledby="hosting-heading">
        <div className="container care">
          <div>
            <p className="eyebrow">Hosting</p>
            <h2 id="hosting-heading">Someone has the keys.</h2>
          </div>
          <div>
            {hosting.map(([title, body], index) => {
              const expanded = openCare === index;
              return (
                <div className={expanded ? "care-row is-open" : "care-row"} key={title}>
                  <button type="button" aria-expanded={expanded} onClick={() => setOpenCare(expanded ? -1 : index)}>
                    <span>0{index + 1}</span>
                    <span>{title}</span>
                  </button>
                  <div className="care-panel" aria-hidden={!expanded}>
                    <p>{body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="show-block show-support" aria-labelledby="support-heading">
        <div className="container">
          <h2 id="support-heading">
            A change should not
            <br />
            become a project.
          </h2>
          <ul>
            {support.map(([title, body]) => (
              <li key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="show-close">
        <div className="container">
          <p className="eyebrow">Next</p>
          <h2>Tell us what the site needs to do.</h2>
          <Link className="button" href="/contact">
            Start a project
          </Link>
        </div>
      </section>
    </div>
  );
}
