import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { publicHandler, corsPreflight } from "@/lib/cors";

export const GET = publicHandler(async (_request, { params }) => {
  const { slug } = await params;
  const page = await prisma.pageContent.findUnique({ where: { pageSlug: slug } });
  if (!page) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json(page);
});

export const OPTIONS = corsPreflight;
