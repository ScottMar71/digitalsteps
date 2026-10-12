import { BRAND, type LogoVariant } from "@/lib/brand";

const { ink, paper, ember } = BRAND.colours;

type MarkProps = {
  variant: LogoVariant;
  /** Mood tweaks the ember dot for the error pages without changing the mark's geometry. */
  mood?: "steady" | "lost" | "fallen";
  className?: string;
  title?: string;
};

/** The symbol on its own. Square, 96x96 viewBox. */
export function LogoMark({ variant, mood = "steady", className, title = "Digital Steps" }: MarkProps) {
  // The dot is the "next step". Lost: it drifts off the top step. Fallen: it sits at the bottom.
  const dot =
    mood === "fallen" ? { cx: 14, cy: 86 } : mood === "lost" ? { cx: 60, cy: 10 } : null;

  return (
    <svg className={className} viewBox="0 0 96 96" role="img" aria-label={title}>
      <title>{title}</title>
      {variant === "rise" ? (
        <>
          <path
            d="M6 90 H30 V64 H54 V38 H78 V22"
            fill="none"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle className="logo-dot" cx={dot?.cx ?? 78} cy={dot?.cy ?? 7} r="7" fill={ember} />
        </>
      ) : null}

      {variant === "stack" ? (
        <>
          <rect x="4" y="62" width="24" height="30" rx="6" fill="currentColor" />
          <rect x="34" y="36" width="24" height="56" rx="6" fill="currentColor" />
          <rect
            className="logo-dot"
            x="64"
            y={mood === "fallen" ? 62 : 4}
            width="24"
            height={mood === "fallen" ? 30 : 88}
            rx="6"
            fill={mood === "lost" ? "currentColor" : ember}
            fillOpacity={mood === "lost" ? 0.22 : 1}
          />
        </>
      ) : null}

      {variant === "tile" ? (
        <>
          {/* Steps use --logo-steps so the tile can be reversed on ink (set --logo-steps to ink). */}
          <rect width="96" height="96" rx="22" fill="currentColor" />
          {/* The first step is ember: where you start. The dot is the next step. */}
          <rect x="18" y="60" width="16" height="18" rx="3" fill={ember} />
          <rect x="36" y="42" width="16" height="36" rx="3" fill={`var(--logo-steps, ${paper})`} />
          <rect x="54" y="24" width="16" height="54" rx="3" fill={`var(--logo-steps, ${paper})`} />
          <circle className="logo-dot" cx={dot?.cx ?? 78} cy={dot?.cy ?? 20} r="6" fill={ember} />
        </>
      ) : null}
    </svg>
  );
}

/** Mark plus wordmark. Wordmark is real text so it always uses the brand font. */
export function Logo({ variant, className }: { variant: LogoVariant; className?: string }) {
  return (
    <span className={["logo", `logo-${variant}`, className].filter(Boolean).join(" ")} style={{ color: ink }}>
      <LogoMark variant={variant} className="logo-mark" />
      <span className="logo-word" aria-hidden="true">
        {variant === "stack" ? (
          <>
            digital
            <br />
            steps
          </>
        ) : (
          "digital steps"
        )}
      </span>
    </span>
  );
}
