import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { publicHandler, corsPreflight } from "@/lib/cors";

export const GET = publicHandler(async () => {
  const testimonials = await prisma.testimonial.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json(testimonials);
});

export const OPTIONS = corsPreflight;
