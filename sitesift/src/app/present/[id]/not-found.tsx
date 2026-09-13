import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
      <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
        Draft not found
      </p>
      <p className="mt-3 text-sm text-[var(--muted)]">
        Generated sites live in memory for this server process. Design the
        website again from the sift list.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white"
      >
        Back to SiteSift
      </Link>
    </main>
  );
}
