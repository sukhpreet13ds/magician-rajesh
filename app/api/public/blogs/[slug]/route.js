import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { publicHandler, corsPreflight } from "@/lib/cors";

export const GET = publicHandler(async (_request, { params }) => {
  const { slug } = await params;
  const blog = await prisma.blog.findFirst({ where: { slug, published: true } });
  if (!blog) return NextResponse.json({ error: "Not found." }, { status: 404 });

  const related = await prisma.blog.findMany({
    where: { published: true, id: { not: blog.id } },
    orderBy: { publishedDate: "desc" },
    take: 3,
  });

  return NextResponse.json({ ...blog, related });
});

export const OPTIONS = corsPreflight;
