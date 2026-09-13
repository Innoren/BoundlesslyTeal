"use client";

import type { Business } from "@/lib/types";

interface Props {
  business: Business;
  designing: boolean;
  onDesign: (business: Business) => void;
}

export function BusinessCard({ business, designing, onDesign }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:shadow-[0_20px_50px_-28px_rgba(20,40,36,0.45)]">
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--accent-soft)] opacity-0 blur-2xl transition group-hover:opacity-80" />

      <div className="relative flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            {business.categoryLabel}
          </p>
          <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl text-[var(--ink)]">
            {business.name}
          </h3>
        </div>
        <div className="rounded-full bg-[var(--wash)] px-3 py-1 text-sm font-semibold text-[var(--ink)]">
          ★ {business.rating.toFixed(1)}
          <span className="ml-1 font-medium text-[var(--muted)]">
            ({business.reviewCount.toLocaleString()})
          </span>
        </div>
      </div>

      <p className="relative mt-3 text-sm leading-relaxed text-[var(--muted)]">
        {[business.address, business.city, business.state]
          .filter(Boolean)
          .join(", ")}
      </p>

      {business.description ? (
        <p className="relative mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--ink)]/80">
          {business.description}
        </p>
      ) : null}

      <div className="relative mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
          No website
        </span>
        {business.phone ? (
          <span className="text-xs text-[var(--muted)]">{business.phone}</span>
        ) : null}
        <span className="ml-auto text-[10px] uppercase tracking-wider text-[var(--muted)]">
          {business.source === "google" ? "Google Places" : "Demo lead"}
        </span>
      </div>

      <button
        type="button"
        disabled={designing}
        onClick={() => onDesign(business)}
        className="relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--ink)] px-4 py-3 text-sm font-semibold text-[var(--paper)] transition hover:bg-[var(--accent)] disabled:cursor-wait disabled:opacity-70"
      >
        {designing ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Designing…
          </>
        ) : (
          <>Design website</>
        )}
      </button>
    </article>
  );
}
