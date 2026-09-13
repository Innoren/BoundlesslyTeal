import Link from "next/link";
import { notFound } from "next/navigation";
import { PresentSite } from "@/components/PresentSite";
import { getSite } from "@/lib/store";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PresentPage({ params }: PageProps) {
  const { id } = await params;
  const site = getSite(id);
  if (!site) notFound();

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <div className="sticky top-0 z-50 flex items-center justify-between gap-3 border-b border-black/10 bg-[var(--ink)]/95 px-4 py-2.5 text-sm text-[var(--paper)] backdrop-blur print:hidden">
        <div className="min-w-0">
          <p className="truncate font-semibold">{site.business.name}</p>
          <p className="truncate text-xs text-white/65">
            Draft website · ready to present
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/"
            className="rounded-full border border-white/25 px-3 py-1.5 text-xs font-semibold hover:bg-white/10"
          >
            Back to sift
          </Link>
          <a
            href={`tel:${site.business.phone?.replace(/[^\d+]/g, "") ?? ""}`}
            className={`rounded-full bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-white ${site.business.phone ? "" : "pointer-events-none opacity-40"}`}
          >
            Call owner
          </a>
        </div>
      </div>
      <PresentSite site={site} />
    </div>
  );
}
