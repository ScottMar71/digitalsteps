import Link from "next/link";

export function CtaBand({
  title = "Ready to take your business online?",
  body = "Let's create something brilliant together. Tell us what you need and we'll help you take the next step.",
  href = "/contact",
  label = "Start Your Project",
}: {
  title?: string;
  body?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <Link className="button" href={href}>
          {label}
        </Link>
      </div>
    </section>
  );
}
