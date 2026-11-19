import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Our vision",
  description:
    "Digital Steps exists to make great design, modern technology and artificial intelligence accessible to businesses of every size.",
  alternates: { canonical: "/vision" },
};

const principles: { title: string; body: string }[] = [
  {
    title: "Innovation with purpose",
    body: "We embrace new ideas, emerging technologies and AI, but always with a clear objective: making things better, smarter or more effective.",
  },
  {
    title: "Creativity without compromise",
    body: "We believe great digital experiences start with great thinking. Every website, brand and application should be distinctive, considered and built with purpose.",
  },
  {
    title: "People before technology",
    body: "Technology should work for people, not the other way around. We listen, understand and build solutions around real business needs.",
  },
  {
    title: "Partnership over transactions",
    body: "We build lasting relationships through honesty, transparency and collaboration. Your success is the measure of our success.",
  },
  {
    title: "Quality that makes a difference",
    body: "We take pride in the details. From design and development to security, performance and support, we aim to deliver work we are proud to put our name to.",
  },
  {
    title: "Technology within reach",
    body: "We believe professional digital solutions shouldn't be exclusive to large organisations. We make powerful technology accessible, practical and affordable.",
  },
  {
    title: "Always moving forward",
    body: "We stay curious, continually learn and evolve with technology. We build solutions that don't just meet today's needs but prepare businesses for tomorrow.",
  },
];

export default function VisionPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Our vision</p>
          <h1>A smarter digital future for every business.</h1>
        </div>
      </header>

      <section className="section">
        <div className="container narrow prose" style={{ marginTop: 0 }}>
          <p>
            To make the benefits of great design, modern technology and artificial intelligence accessible to businesses of every size.
          </p>
          <p>
            We envision a world where every business has the digital presence, tools and intelligent technology it needs to compete, innovate and thrive.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container narrow prose" style={{ marginTop: 0 }}>
          <p className="eyebrow">Our mission</p>
          <h2>Turning ideas into intelligent digital solutions.</h2>
          <p>
            Our mission is to help businesses embrace the opportunities of the digital world through creative design, bespoke development and practical AI-powered solutions.
          </p>
          <p>
            We bring together websites, applications, branding, automation and intelligent processes to simplify complexity, improve efficiency and create meaningful business results.
          </p>
          <p>
            We make technology approachable, affordable and purposeful, providing a trusted partnership from the first idea through to ongoing growth.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our guiding principles</p>
            <h2>What drives everything we do.</h2>
            <p className="section-lede">The principles that shape how we think, work, create and build relationships.</p>
          </div>
          <ol className="plain-list">
            {principles.map((item, index) => (
              <li key={item.title}>
                <strong>
                  {index + 1}. {item.title}
                </strong>
                {item.body}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="usp" aria-labelledby="philosophy-heading">
        <div className="container usp-grid">
          <h2 id="philosophy-heading">
            <span>Make digital</span>
            <span>work better.</span>
          </h2>
          <div>
            <p className="eyebrow">Our brand philosophy</p>
            <p>We don&apos;t believe in technology for technology&apos;s sake. We believe in making digital simpler, smarter and more accessible, creating solutions that help real businesses achieve more.</p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us what you need to move forward."
        body="A new website, a bespoke application, or a smarter way of working. We'll start by understanding the objective."
      />
    </>
  );
}
