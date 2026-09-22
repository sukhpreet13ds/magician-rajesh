import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withErrorHandling } from "@/lib/apiErrors";

export const GET = withErrorHandling(async () => {
  const pages = await prisma.pageContent.findMany({ orderBy: { pageSlug: "asc" } });
  return NextResponse.json(pages);
});
