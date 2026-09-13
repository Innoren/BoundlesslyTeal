"use client";

import { useMemo, useState } from "react";
import type { Business } from "@/lib/types";
import { BusinessCard } from "./BusinessCard";

interface SearchResponse {
  businesses: Business[];
  mode: "google" | "demo";
  message?: string;
}

export function SiftWorkspace() {
  const [query, setQuery] = useState("plumber");
  const [location, setLocation] = useState("Austin, TX");
  const [minRating, setMinRating] = useState(4.5);
  const [minReviews, setMinReviews] = useState(50);
  const [loading, setLoading] = useState(false);
  const [designingId, setDesigningId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SearchResponse | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const countLabel = useMemo(() => {
    if (!result) return null;
    const n = result.businesses.length;
    return `${n} reputable business${n === 1 ? "" : "es"} without a website`;
  }, [result]);

  async function runSearch(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    setError(null);
    setHasSearched(true);
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, location, minRating, minReviews }),
      });
      if (!res.ok) throw new Error("Search failed");
      const data = (await res.json()) as SearchResponse;
      setResult(data);
    } catch {
      setError("Something went wrong while searching. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function designWebsite(business: Business) {
    setDesigningId(business.id);
    setError(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ business }),
      });
      if (!res.ok) throw new Error("Generate failed");
      const data = (await res.json()) as { presentUrl: string };
      window.open(data.presentUrl, "_blank", "noopener,noreferrer");
    } catch {
      setError("Could not design the website. Please try again.");
    } finally {
      setDesigningId(null);
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <header className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] px-6 py-10 sm:px-10 sm:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(27,127,110,0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 20%, rgba(196,120,60,0.12), transparent 50%), linear-gradient(180deg, #f7f5ef 0%, #eef3f0 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 sitesift-grain opacity-[0.35]" />

        <div className="relative">
          <p className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
            SiteSift
          </p>
          <h1 className="mt-4 max-w-2xl text-xl font-medium leading-snug text-[var(--ink)] sm:text-2xl">
            Find reputable Google businesses with no website — then design one
            for them in a single click.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Sift high-rated local listings, skip anyone who already has a site,
            and open a presentable draft you can show the owner.
          </p>
        </div>
      </header>

      <form
        onSubmit={runSearch}
        className="mt-8 grid gap-4 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5 sm:grid-cols-2 lg:grid-cols-12 lg:p-6"
      >
        <label className="flex flex-col gap-1.5 lg:col-span-4">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Business type
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. bakery, electrician, salon"
            className="rounded-xl border border-[var(--line)] bg-white px-3 py-2.5 text-[var(--ink)] outline-none ring-[var(--accent)] focus:ring-2"
          />
        </label>
        <label className="flex flex-col gap-1.5 lg:col-span-4">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Location
          </span>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, ST"
            className="rounded-xl border border-[var(--line)] bg-white px-3 py-2.5 text-[var(--ink)] outline-none ring-[var(--accent)] focus:ring-2"
          />
        </label>
        <label className="flex flex-col gap-1.5 lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Min rating
          </span>
          <input
            type="number"
            min={1}
            max={5}
            step={0.1}
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="rounded-xl border border-[var(--line)] bg-white px-3 py-2.5 text-[var(--ink)] outline-none ring-[var(--accent)] focus:ring-2"
          />
        </label>
        <label className="flex flex-col gap-1.5 lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Min reviews
          </span>
          <input
            type="number"
            min={0}
            step={10}
            value={minReviews}
            onChange={(e) => setMinReviews(Number(e.target.value))}
            className="rounded-xl border border-[var(--line)] bg-white px-3 py-2.5 text-[var(--ink)] outline-none ring-[var(--accent)] focus:ring-2"
          />
        </label>
        <div className="flex items-end lg:col-span-12">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-70 sm:w-auto"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Sifting…
              </>
            ) : (
              "Sift businesses"
            )}
          </button>
        </div>
      </form>

      {error ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      ) : null}

      {result?.message ? (
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {result.message}
        </p>
      ) : null}

      {hasSearched && result ? (
        <section className="mt-8">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                Prospects
              </h2>
              <p className="text-sm text-[var(--muted)]">{countLabel}</p>
            </div>
            <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
              Mode: {result.mode}
            </p>
          </div>

          {result.businesses.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--panel)] px-6 py-16 text-center">
              <p className="font-[family-name:var(--font-display)] text-xl text-[var(--ink)]">
                No matches
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Try demo-friendly queries like “bakery”, “plumber”, or “salon”,
                or set location to a demo city (Austin, Portland, Denver…).
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {result.businesses.map((b) => (
                <BusinessCard
                  key={b.id}
                  business={b}
                  designing={designingId === b.id}
                  onDesign={designWebsite}
                />
              ))}
            </div>
          )}
        </section>
      ) : null}

      {!hasSearched ? (
        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Sift",
              body: "Pull reputable listings and keep only those with no website.",
            },
            {
              step: "02",
              title: "Design",
              body: "One click builds a branded landing page from their Google profile.",
            },
            {
              step: "03",
              title: "Present",
              body: "Open a pitch-ready preview you can show the business owner.",
            },
          ].map((item, i) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5 opacity-0 animate-[rise_0.7s_ease_forwards]"
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
            >
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--accent)]">
                {item.step}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {item.body}
              </p>
            </div>
          ))}
        </section>
      ) : null}
    </div>
  );
}
