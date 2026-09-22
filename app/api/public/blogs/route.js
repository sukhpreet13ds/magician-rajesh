import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { publicHandler, corsPreflight } from "@/lib/cors";

export const GET = publicHandler(async () => {
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { publishedDate: "desc" },
  });
  return NextResponse.json(blogs);
});

export const OPTIONS = corsPreflight;
