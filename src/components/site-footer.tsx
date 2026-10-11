import Link from "next/link";
import { Mark } from "@/components/mark";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="flex items-center gap-3 font-serif text-lg text-ink">
            <Mark />
            Digital Steps
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            Practical learning and adoption for teams who need the new way of working to stick.
          </p>
        </div>
        <div className="flex gap-5 text-sm">
          <Link href="/approach" className="text-ink underline-offset-4 hover:underline">
            Approach
          </Link>
          <Link href="/contact" className="text-ink underline-offset-4 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
