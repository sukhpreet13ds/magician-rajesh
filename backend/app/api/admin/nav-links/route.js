import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withErrorHandling } from "@/lib/apiErrors";

export const GET = withErrorHandling(async () => {
  const links = await prisma.navLink.findMany({ orderBy: { sortOrder: "asc" } });
  return NextResponse.json(links);
});

// Bulk replace: the admin nav editor sends the full ordered list back every
// save (there are only 7 rows — a reorderable list, not a CRUD table).
export const PUT = withErrorHandling(async (request) => {
  const links = await request.json();
  const saved = await prisma.$transaction(
    links.map((link, i) =>
      link.id
        ? prisma.navLink.update({
            where: { id: link.id },
            data: { label: link.label, path: link.path, visible: link.visible, sortOrder: i },
          })
        : prisma.navLink.create({
            data: { label: link.label, path: link.path, visible: link.visible ?? true, sortOrder: i },
          })
    )
  );
  return NextResponse.json(saved);
});
