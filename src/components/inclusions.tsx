import { inclusions } from "@/content/pricing";

const marks = [
  <svg key="design" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M8 34 L18 14 L28 28 L34 20 L40 34" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="18" cy="14" r="2" fill="currentColor" />
  </svg>,
  <svg key="responsive" viewBox="0 0 48 48" aria-hidden="true">
    <rect x="6" y="12" width="22" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <rect x="30" y="16" width="10" height="16" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 34 h10" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="ssl" viewBox="0 0 48 48" aria-hidden="true">
    <rect x="12" y="20" width="24" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M18 20 v-4 a6 6 0 0 1 12 0 v4" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="social" viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="14" cy="24" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="34" cy="14" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="34" cy="34" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M17 22 L31 16 M17 26 L31 32" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="domain" viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 24 h24 M24 12 c4 4 6 8 6 12 s-2 8-6 12 c-4-4-6-8-6-12 s2-8 6-12z" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="email" viewBox="0 0 48 48" aria-hidden="true">
    <rect x="8" y="14" width="32" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10 16 l14 11 L38 16" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
];

export function Inclusions({ heading = "Every package includes" }: { heading?: string }) {
  return (
    <section className="section" id="included">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Included as standard</p>
          <h2>{heading}</h2>
          <p className="section-lede">These are part of the work, not a menu of extras.</p>
        </div>
        <ul className="inclusion-grid">
          {inclusions.map((item, index) => (
            <li key={item.title} className="reveal">
              <span className="inclusion-mark">{marks[index]}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
