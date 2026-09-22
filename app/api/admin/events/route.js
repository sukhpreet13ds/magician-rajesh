import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withErrorHandling } from "@/lib/apiErrors";

export const GET = withErrorHandling(async () => {
  const events = await prisma.event.findMany({
    orderBy: { sortOrder: "asc" },
    include: { photos: { orderBy: { sortOrder: "asc" } } },
  });
  return NextResponse.json(events);
});

export const POST = withErrorHandling(async (request) => {
  const body = await request.json();
  const { photos, id, createdAt, updatedAt, ...data } = body ?? {};

  const event = await prisma.event.create({
    data: {
      ...data,
      photos: photos?.length
        ? {
            create: photos.map((p, i) => ({
              imageUrl: p.imageUrl,
              title: p.title ?? null,
              sortOrder: p.sortOrder ?? i,
            })),
          }
        : undefined,
    },
    include: { photos: { orderBy: { sortOrder: "asc" } } },
  });
  return NextResponse.json(event, { status: 201 });
});
