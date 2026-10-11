import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <h1 className="text-4xl leading-10 font-medium text-deep">This page is not here.</h1>
      <p className="mt-4 text-lg leading-7 text-charcoal">The link may be out of date.</p>
      <Link href="/" className="mt-8 inline-flex h-12 items-center text-sm leading-4 font-medium text-deep underline">
        Back to the homepage
      </Link>
    </div>
  );
}
