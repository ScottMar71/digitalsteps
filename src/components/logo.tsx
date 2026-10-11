import Image from "next/image";

export function Logo({
  className = "h-12 w-auto sm:h-16",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Digital Steps"
      width={843}
      height={304}
      priority={priority}
      className={className}
    />
  );
}
