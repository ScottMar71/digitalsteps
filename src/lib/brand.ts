export type LogoVariant = "rise" | "stack" | "tile";

/** Site-wide logo. Option C "Tile" was chosen; the alternatives remain previewable at /brand. */
export const BRAND_LOGO: LogoVariant = "tile";

export const BRAND = {
  name: "Digital Steps",
  strapline: "Technology made simple. Confidence built step by step.",
  colours: {
    paper: "#F6F3EC",
    paper2: "#EDE9DF",
    line: "#DAD5C8",
    ink: "#1C1C1A",
    inkSoft: "#5B5A55",
    ember: "#E2561F",
    emberDeep: "#B83E0F",
  },
} as const;
