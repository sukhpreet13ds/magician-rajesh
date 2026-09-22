import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withErrorHandling } from "@/lib/apiErrors";

export const GET = withErrorHandling(async (_request, { params }) => {
  const { id } = await params;
  const event = await prisma.event.findUnique({
    where: { id: Number(id) },
    include: { photos: { orderBy: { sortOrder: "asc" } } },
  });
  if (!event) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json(event);
});

// Full replace of an event's photos happens here too: pass the complete
// desired `photos` array and it replaces whatever was stored before. Simpler
// and safer for an admin form than diffing individual photo edits.
export const PUT = withErrorHandling(async (request, { params }) => {
  const { id } = await params;
  const eventId = Number(id);
  const body = await request.json();
  const { photos, id: _id, createdAt, updatedAt, ...data } = body ?? {};

  const event = await prisma.$transaction(async (tx) => {
    await tx.event.update({ where: { id: eventId }, data });
    if (photos) {
      await tx.eventPhoto.deleteMany({ where: { eventId } });
      if (photos.length) {
        await tx.eventPhoto.createMany({
          data: photos.map((p, i) => ({
            eventId,
            imageUrl: p.imageUrl,
            title: p.title ?? null,
            sortOrder: p.sortOrder ?? i,
          })),
        });
      }
    }
    return tx.event.findUnique({
      where: { id: eventId },
      include: { photos: { orderBy: { sortOrder: "asc" } } },
    });
  });

  return NextResponse.json(event);
});

export const DELETE = withErrorHandling(async (_request, { params }) => {
  const { id } = await params;
  await prisma.event.delete({ where: { id: Number(id) } });
  return NextResponse.json({ ok: true });
});
