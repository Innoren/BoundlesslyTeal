import { NextResponse } from "next/server";
import { searchBusinesses } from "@/lib/places";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    query?: string;
    location?: string;
    minRating?: number;
    minReviews?: number;
  };

  const result = await searchBusinesses({
    query: body.query?.trim() || "local business",
    location: body.location?.trim() || "",
    minRating: typeof body.minRating === "number" ? body.minRating : 4.5,
    minReviews: typeof body.minReviews === "number" ? body.minReviews : 50,
  });

  return NextResponse.json(result);
}
