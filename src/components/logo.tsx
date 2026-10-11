export function Logo({
  className = "h-8 w-8",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const step = tone === "light" ? "#FAFAF7" : "#163B3A";
  const accent = tone === "light" ? "#CDEBE4" : "#0AA09B";

  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="2" y="20" width="7" height="9" rx="1.5" fill={step} />
      <rect x="12" y="13" width="7" height="16" rx="1.5" fill={step} />
      <rect x="22" y="6" width="7" height="23" rx="1.5" fill={accent} />
      <circle cx="25.5" cy="4.5" r="2.2" fill={accent} />
    </svg>
  );
}
