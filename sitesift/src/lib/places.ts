import type { Business, BusinessCategory } from "./types";
import { searchDemoBusinesses } from "./demo-businesses";

const PLACES_BASE = "https://places.googleapis.com/v1/places:searchText";

interface PlacesTextSearchResponse {
  places?: Array<{
    id?: string;
    displayName?: { text?: string };
    formattedAddress?: string;
    nationalPhoneNumber?: string;
    websiteUri?: string;
    rating?: number;
    userRatingCount?: number;
    googleMapsUri?: string;
    primaryTypeDisplayName?: { text?: string };
    primaryType?: string;
    editorialSummary?: { text?: string };
    regularOpeningHours?: { weekdayDescriptions?: string[] };
  }>;
}

function categorize(type?: string, label?: string): {
  category: BusinessCategory;
  categoryLabel: string;
} {
  const t = `${type ?? ""} ${label ?? ""}`.toLowerCase();
  if (/plumb|electr|hvac|landscap|roof|paint|contractor|clean/.test(t))
    return { category: "home_services", categoryLabel: label || "Home Services" };
  if (/restaur|bakery|cafe|coffee|bbq|bar|food|meal/.test(t))
    return { category: "food", categoryLabel: label || "Restaurant" };
  if (/salon|beauty|hair|barber|spa|nail/.test(t))
    return { category: "beauty", categoryLabel: label || "Beauty" };
  if (/dentist|doctor|clinic|therap|chiro|health|medical/.test(t))
    return { category: "health", categoryLabel: label || "Health" };
  if (/auto|car_repair|mechanic|tire/.test(t))
    return { category: "auto", categoryLabel: label || "Auto" };
  if (/store|shop|retail|hardware/.test(t))
    return { category: "retail", categoryLabel: label || "Retail" };
  if (/account|lawyer|attorney|real_estate|insurance|photo|consult/.test(t))
    return { category: "professional", categoryLabel: label || "Professional" };
  return { category: "other", categoryLabel: label || "Local Business" };
}

function parseCityState(address?: string): { city: string; state: string } {
  if (!address) return { city: "", state: "" };
  // "123 Main St, City, ST 12345, USA"
  const parts = address.split(",").map((p) => p.trim());
  if (parts.length >= 3) {
    const city = parts[parts.length - 3] ?? parts[1] ?? "";
    const stateZip = parts[parts.length - 2] ?? "";
    const state = stateZip.split(/\s+/)[0] ?? "";
    return { city, state };
  }
  return { city: parts[1] ?? "", state: "" };
}

export async function searchBusinesses(opts: {
  query: string;
  location: string;
  minRating: number;
  minReviews: number;
}): Promise<{ businesses: Business[]; mode: "google" | "demo"; message?: string }> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();

  if (!apiKey) {
    const businesses = searchDemoBusinesses(opts);
    return {
      businesses,
      mode: "demo",
      message:
        "Running on demo leads. Add GOOGLE_PLACES_API_KEY to search live Google Places results.",
    };
  }

  const textQuery = [opts.query || "local business", opts.location]
    .filter(Boolean)
    .join(" in ");

  try {
    const res = await fetch(PLACES_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": [
          "places.id",
          "places.displayName",
          "places.formattedAddress",
          "places.nationalPhoneNumber",
          "places.websiteUri",
          "places.rating",
          "places.userRatingCount",
          "places.googleMapsUri",
          "places.primaryType",
          "places.primaryTypeDisplayName",
          "places.editorialSummary",
          "places.regularOpeningHours",
        ].join(","),
      },
      body: JSON.stringify({
        textQuery,
        languageCode: "en",
        pageSize: 20,
      }),
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Places API error:", res.status, errText);
      const businesses = searchDemoBusinesses(opts);
      return {
        businesses,
        mode: "demo",
        message: `Google Places unavailable (${res.status}). Showing demo leads instead.`,
      };
    }

    const data = (await res.json()) as PlacesTextSearchResponse;
    const businesses: Business[] = (data.places ?? [])
      .map((p) => {
        const website = p.websiteUri?.trim() || null;
        const { category, categoryLabel } = categorize(
          p.primaryType,
          p.primaryTypeDisplayName?.text,
        );
        const { city, state } = parseCityState(p.formattedAddress);
        return {
          id: p.id ? `g-${p.id}` : `g-${crypto.randomUUID()}`,
          placeId: p.id,
          name: p.displayName?.text ?? "Unnamed business",
          category,
          categoryLabel,
          address: p.formattedAddress ?? "",
          city,
          state,
          phone: p.nationalPhoneNumber,
          rating: p.rating ?? 0,
          reviewCount: p.userRatingCount ?? 0,
          hasWebsite: Boolean(website),
          website,
          googleMapsUri: p.googleMapsUri,
          description: p.editorialSummary?.text,
          hours: p.regularOpeningHours?.weekdayDescriptions?.slice(0, 3).join(" · "),
          source: "google" as const,
        };
      })
      .filter(
        (b) =>
          !b.hasWebsite &&
          b.rating >= opts.minRating &&
          b.reviewCount >= opts.minReviews,
      )
      .sort(
        (a, b) =>
          b.rating * Math.log10(b.reviewCount + 1) -
          a.rating * Math.log10(a.reviewCount + 1),
      );

    return {
      businesses,
      mode: "google",
      message:
        businesses.length === 0
          ? "No reputable listings without a website matched your filters. Try a broader query or lower the review threshold."
          : undefined,
    };
  } catch (err) {
    console.error(err);
    return {
      businesses: searchDemoBusinesses(opts),
      mode: "demo",
      message: "Could not reach Google Places. Showing demo leads instead.",
    };
  }
}
