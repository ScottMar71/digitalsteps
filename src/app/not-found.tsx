import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="text-xs font-medium tracking-[0.16em] text-deep uppercase">404</p>
      <h1 className="mt-4 text-5xl font-medium tracking-tight text-deep">This page is not here.</h1>
      <Link href="/" className="mt-8 inline-flex text-sm font-medium text-deep hover:text-fresh">
        Back to the start
      </Link>
    </div>
  );
}
