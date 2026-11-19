import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Digital Steps is a digital agency combining creative design, technical expertise and intelligent technology to help businesses thrive.",
  alternates: { canonical: "/about" },
};

const capabilities: { title: string; body: string; href?: string }[] = [
  {
    title: "Website Design & Development",
    body: "Bespoke, responsive websites built around your brand, customers and commercial objectives.",
    href: "/web-design",
  },
  {
    title: "Application Development",
    body: "Custom web applications and digital platforms that solve real business challenges.",
  },
  {
    title: "Artificial Intelligence",
    body: "Practical AI solutions that enhance productivity, improve decision-making and unlock new opportunities.",
  },
  {
    title: "AI-Driven Processes",
    body: "Intelligent workflows, automation and connected systems that reduce repetitive tasks and streamline operations.",
  },
  {
    title: "Branding & Digital Identity",
    body: "Building distinctive brands that communicate professionalism and create lasting impressions.",
  },
  {
    title: "Hosting & Technical Support",
    body: "Reliable infrastructure, ongoing maintenance, security and technical expertise.",
    href: "/hosting",
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">About us</p>
          <h1>We build digital experiences.</h1>
          <p className="lede">We create smarter ways of working.</p>
        </div>
      </header>

      <section className="section">
        <div className="container narrow prose" style={{ marginTop: 0 }}>
          <p>
            We are a forward-thinking digital agency combining creative design, technical expertise and intelligent technology to help businesses thrive in an increasingly connected world.
          </p>
          <p>
            Our team brings together expertise in website design, application development, artificial intelligence and digital transformation. We work with businesses to turn ideas into practical, powerful digital solutions that improve how they operate, engage customers and grow.
          </p>
          <p>
            We believe technology should do more than look impressive. It should solve problems, create opportunities and deliver meaningful results.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <h2>More than just web design.</h2>
            <p className="section-lede">
              Our capabilities extend well beyond traditional website development. We design and build bespoke digital experiences, develop applications and harness the power of AI to help businesses work smarter.
            </p>
          </div>
          <div className="narrow prose" style={{ marginTop: 0 }}>
            <p>
              From professional business websites and custom-built applications to intelligent AI-driven processes and automated workflows, we create solutions designed around the way your business actually works.
            </p>
          </div>
          <ul className="plain-list" style={{ marginTop: "1.75rem" }}>
            {capabilities.map((item) => (
              <li key={item.title}>
                <strong>{item.href ? <Link href={item.href}>{item.title}</Link> : item.title}</strong>
                {item.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="usp" aria-labelledby="purpose-heading">
        <div className="container usp-grid">
          <h2 id="purpose-heading">
            <span>Innovation</span>
            <span>with purpose.</span>
          </h2>
          <div>
            <p>We don&apos;t adopt technology simply because it&apos;s new. We identify where it can make a genuine difference.</p>
            <p>
              By combining human creativity with the latest advances in AI and automation, we help organisations rethink traditional processes, improve efficiency and create better digital experiences for their customers and teams.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow prose" style={{ marginTop: 0 }}>
          <h2>A partnership built around your success.</h2>
          <p>We believe the best digital solutions come from understanding the people and businesses behind them.</p>
          <p>
            Whether you need a completely new website, a bespoke application, an AI-powered business process or a complete digital transformation, we bring the creativity, knowledge and technical capability to make it happen.
          </p>
          <p>
            <strong>Designing what&apos;s next. Building what matters. Making technology work harder for you.</strong>
          </p>
          <p>Your business deserves more than a digital presence. It deserves the technology, tools and intelligent solutions to move forward.</p>
        </div>
      </section>

      <CtaBand
        title="Tell us what you need to move forward."
        body="A new website, a bespoke application, or a smarter way of working. We'll start by understanding the objective."
      />
    </>
  );
}
