export function Mark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-end gap-[3px] ${className}`} aria-hidden="true">
      <span className="h-2 w-[3px] bg-forest" />
      <span className="h-3 w-[3px] bg-forest" />
      <span className="h-4 w-[3px] bg-rust" />
    </span>
  );
}
