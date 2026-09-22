import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { publicHandler, corsPreflight } from "@/lib/cors";

export const GET = publicHandler(async () => {
  const items = await prisma.galleryItem.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json(items);
});

export const OPTIONS = corsPreflight;
