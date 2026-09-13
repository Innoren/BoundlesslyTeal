export type BusinessCategory =
  | "home_services"
  | "food"
  | "beauty"
  | "professional"
  | "health"
  | "retail"
  | "auto"
  | "other";

export interface Business {
  id: string;
  name: string;
  category: BusinessCategory;
  categoryLabel: string;
  address: string;
  city: string;
  state: string;
  phone?: string;
  rating: number;
  reviewCount: number;
  hasWebsite: boolean;
  website?: string | null;
  googleMapsUri?: string;
  placeId?: string;
  description?: string;
  hours?: string;
  photoHint?: string;
  source: "demo" | "google";
}

export interface SearchParams {
  query: string;
  location: string;
  minRating: number;
  minReviews: number;
}

export interface GeneratedSite {
  id: string;
  businessId: string;
  business: Business;
  createdAt: string;
  theme: SiteTheme;
  copy: SiteCopy;
}

export type SiteThemeId =
  | "harbor"
  | "workshop"
  | "atelier"
  | "grove"
  | "kiln";

export interface SiteTheme {
  id: SiteThemeId;
  label: string;
  fontDisplay: string;
  fontBody: string;
  colors: {
    ink: string;
    paper: string;
    accent: string;
    accentSoft: string;
    muted: string;
    wash: string;
  };
  heroGradient: string;
  pattern: "grain" | "lines" | "dots";
}

export interface SiteCopy {
  tagline: string;
  headline: string;
  supporting: string;
  ctaPrimary: string;
  ctaSecondary: string;
  aboutTitle: string;
  aboutBody: string;
  servicesTitle: string;
  services: { title: string; body: string }[];
  trustTitle: string;
  trustBody: string;
  contactTitle: string;
  contactBody: string;
}
