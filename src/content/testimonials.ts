/**
 * Testimonials. Entries with `illustrative: true` are composites written to show the
 * kind of outcome each service produces; they render with a small "Illustrative" tag.
 * Swap in real, permissioned quotes and remove the flag as they arrive.
 */
export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  pillar: "learning" | "business" | "solutions";
  illustrative?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had put off online banking for years because I was sure I would press the wrong thing and lose everything. Scott showed me, then let me do it, then let me do it again. Now I check my account every morning with a cup of tea.",
    name: "Pauline",
    context: "Beginner learner, Wymondham",
    pillar: "learning",
    illustrative: true,
  },
  {
    quote:
      "After redundancy I was dreading the word \u201cTeams\u201d. Two sessions, a practice video interview, and I walked into the real one calm. I start the new job next month.",
    name: "David",
    context: "Returning to work, Bury St Edmunds",
    pillar: "learning",
    illustrative: true,
  },
  {
    quote:
      "We had paid for Microsoft 365 for six years and used it as expensive email. One half-day and a follow-up later, the whole team works in shared files and nobody emails attachments any more.",
    name: "Practice manager",
    context: "Accountancy firm, Norwich",
    pillar: "business",
    illustrative: true,
  },
  {
    quote:
      "It was the first training session I can remember where nobody checked their phone. Everyone left with one AI thing they would actually use on Monday morning, and most of them did.",
    name: "Director",
    context: "Marketing agency, Ipswich",
    pillar: "business",
    illustrative: true,
  },
  {
    quote:
      "The website is simple, quick and I can change the prices myself. What I did not expect was to understand how it all fits together by the end. Nobody has ever bothered to explain that before.",
    name: "Owner",
    context: "Garden maintenance business, North Norfolk",
    pillar: "solutions",
    illustrative: true,
  },
  {
    quote:
      "He sorted the email, the backups and the passwords, then sat with me until I could do the everyday bits on my own. I finally have one person to ring who answers and talks like a human.",
    name: "Owner",
    context: "Independent shop, Diss",
    pillar: "solutions",
    illustrative: true,
  },
];

export function testimonialsFor(pillar?: Testimonial["pillar"]) {
  return pillar ? testimonials.filter((t) => t.pillar === pillar) : testimonials;
}
