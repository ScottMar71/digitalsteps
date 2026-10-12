export function StairMark({ mood }: { mood: "wait" | "miss" | "fall" }) {
  const face = mood === "fall" ? "x x" : mood === "miss" ? "o o" : "• •";
  const mouth = mood === "fall" ? "︵" : mood === "miss" ? "∼" : "‿";

  return (
    <svg className="mark" viewBox="0 0 140 120" role="img" aria-label="A small person and three steps">
      <rect x="8" y="78" width="34" height="28" rx="6" fill="#163B3A" />
      <rect x="48" y="56" width="34" height="50" rx="6" fill="#163B3A" />
      <rect x="88" y="34" width="34" height="72" rx="6" fill={mood === "miss" ? "#CDEBE4" : "#0AA09B"} />
      {mood === "miss" ? <text x="97" y="74" fill="#163B3A" fontSize="22">?</text> : null}
      <circle cx={mood === "fall" ? 34 : 108} cy={mood === "fall" ? 48 : 22} r="14" fill="#FAFAF7" stroke="#163B3A" strokeWidth="3" />
      <text x={mood === "fall" ? 24 : 98} y={mood === "fall" ? 46 : 20} fill="#163B3A" fontSize="8">
        {face}
      </text>
      <text x={mood === "fall" ? 29 : 103} y={mood === "fall" ? 56 : 30} fill="#163B3A" fontSize="10">
        {mouth}
      </text>
      {mood === "fall" ? <ellipse cx="34" cy="70" rx="16" ry="5" fill="#C4841D" opacity="0.35" /> : null}
      {mood === "wait" ? <circle cx="122" cy="16" r="5" fill="#C4841D" /> : null}
    </svg>
  );
}
