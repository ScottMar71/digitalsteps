/**
 * Testimonials. Entries with `example: true` are illustrative and render with an
 * "Example" tag. TODO (Scott): replace with real, permissioned quotes and delete the flag.
 */
export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  pillar: "learning" | "business" | "solutions";
  example?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had put off video calls for two years because I was scared of pressing the wrong thing. After three sessions I ring my grandchildren every Sunday. Nothing was ever too small to ask.",
    name: "Margaret",
    context: "Beginner learner, Norwich",
    pillar: "learning",
    example: true,
  },
  {
    quote:
      "We had paid for Microsoft 365 for years and used about a tenth of it. One workshop and a follow-up later, the team actually shares files instead of emailing them around.",
    name: "Office manager",
    context: "Twelve-person firm, Norfolk",
    pillar: "business",
    example: true,
  },
  {
    quote:
      "The website is simple, fast and I can update it myself. What I did not expect was to understand how it all fits together by the end.",
    name: "Club organiser",
    context: "Community running club",
    pillar: "solutions",
    example: true,
  },
];

export function testimonialsFor(pillar?: Testimonial["pillar"]) {
  return pillar ? testimonials.filter((t) => t.pillar === pillar) : testimonials;
}
