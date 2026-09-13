import { randomUUID } from "crypto";
import type { GeneratedSite } from "./types";

const globalStore = globalThis as typeof globalThis & {
  __sitesiftStore?: Map<string, GeneratedSite>;
};

function getStore(): Map<string, GeneratedSite> {
  if (!globalStore.__sitesiftStore) {
    globalStore.__sitesiftStore = new Map();
  }
  return globalStore.__sitesiftStore;
}

export function saveSite(
  site: Omit<GeneratedSite, "id" | "createdAt"> & { id?: string },
): GeneratedSite {
  const full: GeneratedSite = {
    ...site,
    id: site.id ?? randomUUID(),
    createdAt: new Date().toISOString(),
  };
  getStore().set(full.id, full);
  return full;
}

export function getSite(id: string): GeneratedSite | undefined {
  return getStore().get(id);
}

export function listSites(): GeneratedSite[] {
  return Array.from(getStore().values()).sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
}
