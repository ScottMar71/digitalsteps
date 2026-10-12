/**
 * Home hero artwork: the Digital Steps motif at full scale.
 * Four steps rise left to right; the first is ember (the start), the dot is where you get to.
 * Purely decorative, so hidden from assistive tech. Animation lives in site.css (.hero-art).
 */
const STEP_W = 56;
const GAP = 18;
const BASE_Y = 416;
const HEIGHTS = [72, 148, 224, 300];
const START_X = 44;

export function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMax meet" focusable="false">
        {HEIGHTS.map((h, i) => (
          <rect
            key={h}
            className="hero-art-step"
            x={START_X + i * (STEP_W + GAP)}
            y={BASE_Y - h}
            width={STEP_W}
            height={h}
            rx={14}
            fill={i === 0 ? "var(--ember)" : "var(--ink)"}
            style={{ animationDelay: `${120 + i * 120}ms` }}
          />
        ))}
        <circle
          className="hero-art-dot"
          cx={START_X + 4 * (STEP_W + GAP) + STEP_W / 2 - 10}
          cy={BASE_Y - HEIGHTS[3] - 32}
          r={18}
          fill="var(--ember)"
        />
      </svg>
    </div>
  );
}
