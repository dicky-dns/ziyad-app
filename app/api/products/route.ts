import { NextRequest, NextResponse } from "next/server";

import { getProducts } from "@/services/product";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 12;

  try {
    const data = await getProducts(page, limit);
    return NextResponse.json(data);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch products";

    return NextResponse.json({ message }, { status: 500 });
  }
}
