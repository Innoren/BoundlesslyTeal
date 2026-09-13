import { NextResponse } from "next/server";
import { generateSite } from "@/lib/generator";
import { DEMO_BUSINESSES } from "@/lib/demo-businesses";
import { saveSite, getSite } from "@/lib/store";
import type { Business } from "@/lib/types";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    business?: Business;
    businessId?: string;
  };

  let business = body.business;
  if (!business && body.businessId) {
    business = DEMO_BUSINESSES.find((b) => b.id === body.businessId);
  }

  if (!business?.name) {
    return NextResponse.json(
      { error: "Business details are required." },
      { status: 400 },
    );
  }

  const draft = generateSite(business);
  const site = saveSite(draft);

  return NextResponse.json({
    id: site.id,
    presentUrl: `/present/${site.id}`,
    site,
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  const site = getSite(id);
  if (!site) {
    return NextResponse.json({ error: "Site not found" }, { status: 404 });
  }
  return NextResponse.json({ site });
}
