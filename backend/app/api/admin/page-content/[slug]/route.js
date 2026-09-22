import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withErrorHandling } from "@/lib/apiErrors";

export const GET = withErrorHandling(async (_request, { params }) => {
  const { slug } = await params;
  const page = await prisma.pageContent.findUnique({ where: { pageSlug: slug } });
  if (!page) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json(page);
});

export const PUT = withErrorHandling(async (request, { params }) => {
  const { slug } = await params;
  const body = await request.json();
  const { heroImage, content } = body ?? {};

  const page = await prisma.pageContent.upsert({
    where: { pageSlug: slug },
    update: { heroImage, content },
    create: { pageSlug: slug, heroImage, content },
  });
  return NextResponse.json(page);
});
