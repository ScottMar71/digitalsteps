export const topics = [
  { value: "website", label: "A new website" },
  { value: "redesign", label: "A website redesign" },
  { value: "branding", label: "Branding" },
  { value: "hosting", label: "Hosting and support" },
  { value: "community", label: "A community project" },
  { value: "other", label: "Something else" },
] as const;

export type Topic = (typeof topics)[number]["value"];

export function isTopic(value: string | undefined): value is Topic {
  return topics.some((t) => t.value === value);
}
