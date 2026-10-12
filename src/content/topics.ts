export const topics = [
  { value: "learning", label: "One-to-one tuition or digital skills" },
  { value: "business", label: "Business or workplace training" },
  { value: "websites", label: "A website" },
  { value: "apps", label: "An app, automation or digital tool" },
  { value: "support", label: "Small business IT support" },
  { value: "other", label: "Something else" },
] as const;

export type Topic = (typeof topics)[number]["value"];

export function isTopic(value: string | undefined): value is Topic {
  return topics.some((t) => t.value === value);
}
