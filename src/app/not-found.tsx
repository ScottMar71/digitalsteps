import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="text-sm font-medium tracking-[0.16em] text-forest uppercase">404</p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight">This page is not here.</h1>
      <Link href="/" className="mt-8 inline-flex text-sm font-medium text-rust underline-offset-4 hover:underline">
        Back to the start
      </Link>
    </div>
  );
}
