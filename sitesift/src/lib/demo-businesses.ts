import type { Business } from "./types";

/** Curated demo leads: reputable local businesses with no website. */
export const DEMO_BUSINESSES: Business[] = [
  {
    id: "demo-harbor-hardware",
    name: "Harbor & Oak Hardware",
    category: "retail",
    categoryLabel: "Hardware Store",
    address: "214 Front Street",
    city: "Portland",
    state: "ME",
    phone: "(207) 555-0142",
    rating: 4.8,
    reviewCount: 186,
    hasWebsite: false,
    description:
      "Family-run hardware store known for knowledgeable staff and hard-to-find fasteners.",
    hours: "Mon–Sat 7am–6pm",
    photoHint: "weathered brick storefront with stacked lumber",
    source: "demo",
  },
  {
    id: "demo-mesa-plumbing",
    name: "Mesa Ridge Plumbing",
    category: "home_services",
    categoryLabel: "Plumber",
    address: "88 Canyon Road",
    city: "Santa Fe",
    state: "NM",
    phone: "(505) 555-0198",
    rating: 4.9,
    reviewCount: 312,
    hasWebsite: false,
    description:
      "Licensed plumbers specializing in older adobe homes and emergency repairs.",
    hours: "24/7 emergency · Office Mon–Fri 8–5",
    photoHint: "van parked outside adobe home at dusk",
    source: "demo",
  },
  {
    id: "demo-lotus-salon",
    name: "Lotus Lane Salon",
    category: "beauty",
    categoryLabel: "Hair Salon",
    address: "15 Maple Court",
    city: "Asheville",
    state: "NC",
    phone: "(828) 555-0166",
    rating: 4.7,
    reviewCount: 241,
    hasWebsite: false,
    description:
      "Boutique salon focused on color correction and low-maintenance cuts.",
    hours: "Tue–Sat 9am–7pm",
    photoHint: "sunlit salon chair near large windows",
    source: "demo",
  },
  {
    id: "demo-northwind-bakery",
    name: "Northwind Bakery",
    category: "food",
    categoryLabel: "Bakery",
    address: "402 Birch Avenue",
    city: "Minneapolis",
    state: "MN",
    phone: "(612) 555-0133",
    rating: 4.9,
    reviewCount: 528,
    hasWebsite: false,
    description:
      "Sourdough bakery with weekend pastry lines and wholesale for local cafés.",
    hours: "Wed–Sun 7am–2pm",
    photoHint: "flour-dusted counter with fresh loaves",
    source: "demo",
  },
  {
    id: "demo-clearpath-pt",
    name: "ClearPath Physical Therapy",
    category: "health",
    categoryLabel: "Physical Therapist",
    address: "900 Summit Plaza, Suite 210",
    city: "Denver",
    state: "CO",
    phone: "(303) 555-0177",
    rating: 4.8,
    reviewCount: 167,
    hasWebsite: false,
    description:
      "Sports and post-surgical rehab with one-on-one appointment blocks.",
    hours: "Mon–Thu 7am–6pm · Fri 7am–3pm",
    photoHint: "bright clinic with resistance bands and wood floors",
    source: "demo",
  },
  {
    id: "demo-ironclad-auto",
    name: "Ironclad Auto Repair",
    category: "auto",
    categoryLabel: "Auto Repair",
    address: "67 Industrial Way",
    city: "Detroit",
    state: "MI",
    phone: "(313) 555-0184",
    rating: 4.6,
    reviewCount: 403,
    hasWebsite: false,
    description:
      "Honest diagnostics and European & domestic repairs since 1994.",
    hours: "Mon–Fri 8am–5:30pm",
    photoHint: "open bay garage with classic cars",
    source: "demo",
  },
  {
    id: "demo-reed-bookkeeping",
    name: "Reed & Co. Bookkeeping",
    category: "professional",
    categoryLabel: "Bookkeeper",
    address: "12 Court Square",
    city: "Charleston",
    state: "SC",
    phone: "(843) 555-0119",
    rating: 5.0,
    reviewCount: 94,
    hasWebsite: false,
    description:
      "Bookkeeping for restaurants and trades — monthly closes without the jargon.",
    hours: "Mon–Fri 9am–4pm",
    photoHint: "quiet office with ledgers and a brick fireplace",
    source: "demo",
  },
  {
    id: "demo-pinecrest-landscaping",
    name: "Pinecrest Landscaping",
    category: "home_services",
    categoryLabel: "Landscaper",
    address: "550 Ridge Road",
    city: "Boise",
    state: "ID",
    phone: "(208) 555-0155",
    rating: 4.7,
    reviewCount: 219,
    hasWebsite: false,
    description:
      "Native-plant gardens and seasonal cleanups for foothill properties.",
    hours: "Seasonal · Mon–Sat 7am–5pm",
    photoHint: "terraced garden with sage and river rock",
    source: "demo",
  },
  {
    id: "demo-coral-dental",
    name: "Coral Street Dental",
    category: "health",
    categoryLabel: "Dentist",
    address: "33 Coral Street",
    city: "Tampa",
    state: "FL",
    phone: "(813) 555-0128",
    rating: 4.8,
    reviewCount: 356,
    hasWebsite: false,
    description:
      "Gentle family dentistry with same-week openings for new patients.",
    hours: "Mon–Thu 8am–5pm",
    photoHint: "calm dental suite with ocean-toned walls",
    source: "demo",
  },
  {
    id: "demo-ember-bbq",
    name: "Ember Pit BBQ",
    category: "food",
    categoryLabel: "Barbecue Restaurant",
    address: "918 Smokehouse Lane",
    city: "Austin",
    state: "TX",
    phone: "(512) 555-0190",
    rating: 4.9,
    reviewCount: 891,
    hasWebsite: false,
    description:
      "Oak-smoked brisket and ribs; cash and card, sold until the pits empty.",
    hours: "Thu–Sun 11am–until sold out",
    photoHint: "smoke rising from offset smokers at golden hour",
    source: "demo",
  },
  {
    id: "demo-vale-electric",
    name: "Vale Electric Co.",
    category: "home_services",
    categoryLabel: "Electrician",
    address: "441 Service Drive",
    city: "Madison",
    state: "WI",
    phone: "(608) 555-0147",
    rating: 4.9,
    reviewCount: 278,
    hasWebsite: false,
    description:
      "Panel upgrades, EV chargers, and careful work in historic homes.",
    hours: "Mon–Fri 7:30am–5pm · On-call weekends",
    photoHint: "electrician at a clean residential panel",
    source: "demo",
  },
  {
    id: "demo-softlight-photo",
    name: "Softlight Studio",
    category: "professional",
    categoryLabel: "Photographer",
    address: "7 Gallery Row",
    city: "Seattle",
    state: "WA",
    phone: "(206) 555-0161",
    rating: 4.8,
    reviewCount: 132,
    hasWebsite: false,
    description:
      "Portrait and small-business photography with natural light sets.",
    hours: "By appointment",
    photoHint: "north-facing studio with soft window light",
    source: "demo",
  },
];

function matchesReputation(b: Business, minRating: number, minReviews: number) {
  return !b.hasWebsite && b.rating >= minRating && b.reviewCount >= minReviews;
}

function matchesQuery(b: Business, q: string) {
  if (!q) return true;
  const generic = [
    "local business",
    "business",
    "businesses",
    "company",
    "shop",
    "near me",
  ];
  if (generic.includes(q)) return true;
  const hay = [
    b.name,
    b.categoryLabel,
    b.category,
    b.city,
    b.state,
    b.description ?? "",
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(q) || fuzzyCategoryMatch(q, b);
}

function matchesLocation(b: Business, loc: string) {
  if (!loc || ["us", "usa", "near me", "anywhere", "all"].includes(loc)) {
    return true;
  }
  const place = `${b.city} ${b.state} ${b.address}`.toLowerCase();
  if (place.includes(loc)) return true;
  return loc.split(/[\s,]+/).some((p) => p.length > 1 && place.includes(p));
}

export function searchDemoBusinesses(opts: {
  query?: string;
  location?: string;
  minRating?: number;
  minReviews?: number;
}): Business[] {
  const q = (opts.query ?? "").trim().toLowerCase();
  const loc = (opts.location ?? "").trim().toLowerCase();
  const minRating = opts.minRating ?? 4.5;
  const minReviews = opts.minReviews ?? 50;

  const base = DEMO_BUSINESSES.filter((b) =>
    matchesReputation(b, minRating, minReviews),
  );

  const withQuery = base.filter((b) => matchesQuery(b, q));
  const withLocation = withQuery.filter((b) => matchesLocation(b, loc));

  // Demo mode: if the city has no matches, still return category matches
  // so the product is usable without a Places API key.
  const results = withLocation.length > 0 ? withLocation : withQuery;

  return results.sort(
    (a, b) =>
      b.rating * Math.log10(b.reviewCount + 1) -
      a.rating * Math.log10(a.reviewCount + 1),
  );
}

function fuzzyCategoryMatch(q: string, b: Business): boolean {
  const aliases: Record<string, string[]> = {
    home_services: ["plumber", "plumbing", "electrician", "electric", "landscap", "hvac", "contractor"],
    food: ["bakery", "bbq", "restaurant", "cafe", "food"],
    beauty: ["salon", "hair", "barber", "spa", "beauty"],
    professional: ["bookkeep", "account", "photo", "lawyer", "attorney", "consult"],
    health: ["dental", "dentist", "therapy", "clinic", "doctor", "physio"],
    retail: ["hardware", "shop", "store", "retail"],
    auto: ["auto", "mechanic", "car", "repair"],
  };
  const list = aliases[b.category] ?? [];
  return list.some((a) => q.includes(a) || a.includes(q));
}
