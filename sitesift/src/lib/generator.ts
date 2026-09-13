import type {
  Business,
  BusinessCategory,
  GeneratedSite,
  SiteCopy,
  SiteTheme,
  SiteThemeId,
} from "./types";

export const THEMES: Record<SiteThemeId, SiteTheme> = {
  harbor: {
    id: "harbor",
    label: "Harbor",
    fontDisplay: "Fraunces",
    fontBody: "Source Sans 3",
    colors: {
      ink: "#14213d",
      paper: "#f4f7f5",
      accent: "#1b7f6e",
      accentSoft: "#c8e6df",
      muted: "#5c6b73",
      wash: "#dce8e4",
    },
    heroGradient:
      "linear-gradient(135deg, #0f2a2a 0%, #1b4d4a 42%, #2a6b5e 100%)",
    pattern: "grain",
  },
  workshop: {
    id: "workshop",
    label: "Workshop",
    fontDisplay: "Archivo Black",
    fontBody: "IBM Plex Sans",
    colors: {
      ink: "#1a1a1a",
      paper: "#f2efe8",
      accent: "#c45c26",
      accentSoft: "#f0d6c4",
      muted: "#6a635a",
      wash: "#e4ddd0",
    },
    heroGradient:
      "linear-gradient(160deg, #2b2118 0%, #4a3424 45%, #6b4a32 100%)",
    pattern: "lines",
  },
  atelier: {
    id: "atelier",
    label: "Atelier",
    fontDisplay: "Playfair Display",
    fontBody: "Lato",
    colors: {
      ink: "#2c2438",
      paper: "#faf8f6",
      accent: "#8b5e6b",
      accentSoft: "#eddde2",
      muted: "#7a7080",
      wash: "#efe8ec",
    },
    heroGradient:
      "linear-gradient(140deg, #3a2f3f 0%, #5c4558 50%, #8b6b78 100%)",
    pattern: "dots",
  },
  grove: {
    id: "grove",
    label: "Grove",
    fontDisplay: "Libre Baskerville",
    fontBody: "Karla",
    colors: {
      ink: "#1e2f1c",
      paper: "#f6f4ec",
      accent: "#4f7c4a",
      accentSoft: "#d7e5d4",
      muted: "#66705f",
      wash: "#e5ebda",
    },
    heroGradient:
      "linear-gradient(150deg, #1c2e1a 0%, #355233 48%, #5a7a4e 100%)",
    pattern: "grain",
  },
  kiln: {
    id: "kiln",
    label: "Kiln",
    fontDisplay: "Bebas Neue",
    fontBody: "Nunito Sans",
    colors: {
      ink: "#22180f",
      paper: "#fff8f0",
      accent: "#b33b1a",
      accentSoft: "#f5d4c4",
      muted: "#7a6558",
      wash: "#f0e0d0",
    },
    heroGradient:
      "linear-gradient(145deg, #2a140c 0%, #6b2a14 40%, #a84820 100%)",
    pattern: "lines",
  },
};

const CATEGORY_THEME: Record<BusinessCategory, SiteThemeId> = {
  home_services: "workshop",
  food: "kiln",
  beauty: "atelier",
  professional: "harbor",
  health: "harbor",
  retail: "workshop",
  auto: "workshop",
  other: "grove",
};

const SERVICE_PRESETS: Record<
  BusinessCategory,
  { title: string; body: string }[]
> = {
  home_services: [
    {
      title: "On-site diagnosis",
      body: "Clear findings before any work begins — no surprise line items.",
    },
    {
      title: "Quality repairs",
      body: "Done once, done right, with materials that match the job.",
    },
    {
      title: "Maintenance plans",
      body: "Seasonal checkups so small issues never become emergencies.",
    },
  ],
  food: [
    {
      title: "Made fresh daily",
      body: "Recipes that start early and sell until they’re gone.",
    },
    {
      title: "Local favorites",
      body: "The plates and pastries neighbors already swear by.",
    },
    {
      title: "Catering & pickup",
      body: "Feed your table or your team without the guesswork.",
    },
  ],
  beauty: [
    {
      title: "Signature cuts & color",
      body: "Looks that grow out gracefully and feel like you.",
    },
    {
      title: "Consultations",
      body: "Time to listen before scissors or color ever come out.",
    },
    {
      title: "At-home care",
      body: "Product guidance so your style lasts between visits.",
    },
  ],
  professional: [
    {
      title: "Clear process",
      body: "A simple path from first call to finished deliverable.",
    },
    {
      title: "Local expertise",
      body: "Advice grounded in how businesses actually run here.",
    },
    {
      title: "Responsive support",
      body: "Questions answered quickly — not lost in a ticket queue.",
    },
  ],
  health: [
    {
      title: "Personalized care",
      body: "Appointments that start with listening, not a clipboard rush.",
    },
    {
      title: "Evidence-based plans",
      body: "Treatment built around your goals and daily life.",
    },
    {
      title: "Easy scheduling",
      body: "New patients welcomed with openings that fit real weeks.",
    },
  ],
  retail: [
    {
      title: "Hard-to-find stock",
      body: "The parts and tools the big boxes quietly don’t carry.",
    },
    {
      title: "Expert advice",
      body: "Ask anyone on the floor — they’ve run the same projects.",
    },
    {
      title: "Local delivery",
      body: "Get what you need to the job without a second trip.",
    },
  ],
  auto: [
    {
      title: "Honest diagnostics",
      body: "We’ll show you what’s wrong before we touch a wrench.",
    },
    {
      title: "Trusted repairs",
      body: "Work that holds up on the highway, not just the driveway.",
    },
    {
      title: "Preventive care",
      body: "Keep your vehicle reliable with service that respects your budget.",
    },
  ],
  other: [
    {
      title: "Local service",
      body: "Neighbors first — the kind of help you can call again.",
    },
    {
      title: "Proven results",
      body: "Built on reviews from people who live nearby.",
    },
    {
      title: "Easy to reach",
      body: "Phone and in-person — no maze of forms to get started.",
    },
  ],
};

function pickTheme(business: Business): SiteTheme {
  return THEMES[CATEGORY_THEME[business.category] ?? "grove"];
}

function buildCopy(business: Business): SiteCopy {
  const place = [business.city, business.state].filter(Boolean).join(", ");
  const services = SERVICE_PRESETS[business.category] ?? SERVICE_PRESETS.other;

  const headlines: Record<BusinessCategory, string> = {
    home_services: `Reliable ${business.categoryLabel.toLowerCase()} work in ${place || "your neighborhood"}`,
    food: `${business.name} — worth the trip`,
    beauty: `Your chair is waiting at ${business.name}`,
    professional: `Straightforward ${business.categoryLabel.toLowerCase()} for local businesses`,
    health: `Care that feels personal in ${place || "town"}`,
    retail: `The ${business.categoryLabel.toLowerCase()} locals recommend`,
    auto: `Repairs you can trust — ${place || "locally owned"}`,
    other: `${business.name}, rooted in ${place || "the community"}`,
  };

  const taglines: Record<BusinessCategory, string> = {
    home_services: "Licensed · Local · Accountable",
    food: "Made here. Loved here.",
    beauty: "Craft, color, and calm",
    professional: "Clarity over clutter",
    health: "Listen first. Treat carefully.",
    retail: "Ask us. We’ve done it.",
    auto: "Diagnostics before dollars",
    other: "Known for showing up",
  };

  return {
    tagline: taglines[business.category],
    headline: headlines[business.category],
    supporting:
      business.description ||
      `${business.name} is a highly rated ${business.categoryLabel.toLowerCase()} in ${place || "the area"} — ${business.rating.toFixed(1)} stars from ${business.reviewCount} Google reviews, still without a website of their own.`,
    ctaPrimary: business.phone ? "Call now" : "Get directions",
    ctaSecondary: "See hours & location",
    aboutTitle: `About ${business.name}`,
    aboutBody:
      business.description ||
      `Neighbors already trust ${business.name}. This site gives that reputation a home — clear contact, clear services, and a first impression that matches the reviews.`,
    servicesTitle: "What we do",
    services,
    trustTitle: "Why people choose us",
    trustBody: `Rated ${business.rating.toFixed(1)} out of 5 across ${business.reviewCount.toLocaleString()} Google reviews. Reputable enough to find — polished enough to present.`,
    contactTitle: "Visit or call",
    contactBody: place
      ? `Find us in ${place}. We’re ready when you are.`
      : "Reach out — we’re ready when you are.",
  };
}

export function generateSite(business: Business): Omit<GeneratedSite, "id" | "createdAt"> {
  return {
    businessId: business.id,
    business,
    theme: pickTheme(business),
    copy: buildCopy(business),
  };
}

export function googleFontsHref(theme: SiteTheme): string {
  const families = [theme.fontDisplay, theme.fontBody]
    .map((f) => `family=${encodeURIComponent(f).replace(/%20/g, "+")}:wght@400;500;600;700`)
    .join("&");
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}
