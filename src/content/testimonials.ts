/**
 * SAMPLE TESTIMONIALS ONLY.
 * These are fictional demonstration quotes for the design. They are not customer
 * feedback. Replace each entry with a genuine, permissioned review and remove
 * `sample: true` when you do.
 */
export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  sample: true;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sample quote: the new site finally looks like the business we have spent years building. People can see what we do, and we can change a sentence ourselves.",
    name: "Jordan Hale",
    context: "Fictional name · independent business",
    sample: true,
  },
  {
    quote:
      "Sample quote: we expected a long agency process and a number that made us wince. We got a clear plan, a site we are proud of, and a price we understood before it started.",
    name: "A. Okonkwo",
    context: "Fictional name · start-up",
    sample: true,
  },
  {
    quote:
      "Sample quote: supporters can find the training times, the fixture list and how to help, without ringing the club. That alone was worth it.",
    name: "Sam Reed",
    context: "Fictional name · community club",
    sample: true,
  },
];
