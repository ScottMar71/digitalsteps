export type LogoVariant = "rise" | "stack" | "tile";

/**
 * Site-wide logo choice. Change this one value once a logo option is picked.
 * Preview all three at /brand.
 */
export const BRAND_LOGO: LogoVariant = "stack";

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
