import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Coming soon",
  description:
    "Digital Steps is nearly ready. Beginner computer tuition, digital skills, AI education and friendly IT help in Norfolk.",
};

export default function HomePage() {
  return (
    <PageShell
      kicker="Coming soon"
      title={
        <>
          We are taking the website <em>one step at a time.</em>
        </>
      }
      lede="Which is exactly how we teach, so this feels fair. The site is nearly ready. In the meantime, nobody here will ever make you feel silly for asking a question."
    >
      <p className="aside">Patient computer tuition, digital skills, AI made plain, and websites built for real people. Norfolk, England.</p>
    </PageShell>
  );
}
