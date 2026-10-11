import Link from "next/link";
import { areas, type AreaTone } from "@/lib/site";

const cardTone: Record<AreaTone, string> = {
  mint: "bg-mint text-charcoal",
  fresh: "bg-fresh text-warm",
  deep: "bg-deep text-warm",
};

const numberTone: Record<AreaTone, string> = {
  mint: "text-deep/25",
  fresh: "text-warm/35",
  deep: "text-fresh/40",
};

export function ServiceCards() {
  return (
    <section aria-label="Service areas" className="bg-soft">
      <div className="grid md:grid-cols-3">
        {areas.map((area) => (
          <Link
            key={area.href}
            href={area.href}
            className={`flex min-h-80 flex-col justify-between p-7 sm:min-h-[28rem] sm:p-9 ${cardTone[area.tone]}`}
          >
            <p className="text-xs leading-4 font-medium">
              Digital Steps
              <span className="mt-1 block text-base leading-5">{area.name}</span>
            </p>
            <div>
              <h2 className="max-w-xs text-[2rem] leading-9 font-medium sm:text-4xl sm:leading-[2.6rem]">
                {area.title}
              </h2>
              <p className="text-xs leading-4 font-medium mt-3 opacity-90">{area.line}</p>
              <p className={`mt-8 text-5xl leading-none font-medium ${numberTone[area.tone]}`} aria-hidden="true">
                {area.number}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
