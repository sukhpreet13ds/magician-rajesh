import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { publicHandler, corsPreflight } from "@/lib/cors";

export const GET = publicHandler(async (request) => {
  const limit = Number(new URL(request.url).searchParams.get("limit")) || undefined;
  const events = await prisma.event.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
    take: limit,
  });
  return NextResponse.json(events);
});

export const OPTIONS = corsPreflight;
