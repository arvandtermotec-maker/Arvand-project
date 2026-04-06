import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center text-white">
      <p className="text-sm uppercase tracking-[0.3em] text-orange-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Page not found</h1>
      <p className="mt-5 max-w-xl text-lg text-white/65">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="mt-8 rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white">Back to Home</Link>
    </div>
  );
}
