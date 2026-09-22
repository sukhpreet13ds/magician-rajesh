import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { publicHandler, corsPreflight } from "@/lib/cors";

export const GET = publicHandler(async (_request, { params }) => {
  const { slug } = await params;
  const event = await prisma.event.findFirst({
    where: { slug, published: true },
    include: { photos: { orderBy: { sortOrder: "asc" } } },
  });
  if (!event) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json(event);
});

export const OPTIONS = corsPreflight;
