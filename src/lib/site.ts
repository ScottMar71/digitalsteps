export const site = {
  name: "Digital Steps",
  description:
    "Digital Steps helps teams turn new tools, products, and ways of working into everyday behaviour.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
} as const;

export const services = [
  {
    number: "01",
    title: "Adoption programmes",
    body: "Help customers, partners, and internal teams use a product inside the work they already do.",
  },
  {
    number: "02",
    title: "Capability design",
    body: "Define the skills, practice, and feedback a role needs, then build them into the week.",
  },
  {
    number: "03",
    title: "Learning operations",
    body: "Create enablement a team can run again, without starting from a blank slide deck.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "See the real work",
    body: "Sit with the job as it is done. Find where people stall, improvise, or quietly return to the old way.",
  },
  {
    number: "02",
    title: "Name the behaviour",
    body: "Agree the few actions that would count as success. Write them so a manager could observe them.",
  },
  {
    number: "03",
    title: "Design the steps",
    body: "Practice, prompts, and support in the flow of work. Short enough to use on a busy day.",
  },
  {
    number: "04",
    title: "Watch what changes",
    body: "Look at behaviour and operational outcomes. Adjust the steps. Treat attendance as a clue, not the result.",
  },
] as const;
