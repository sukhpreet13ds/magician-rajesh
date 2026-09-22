import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { publicHandler, corsPreflight } from "@/lib/cors";

export const GET = publicHandler(async (_request, { params }) => {
  const { slug } = await params;
  const service = await prisma.service.findFirst({ where: { slug, published: true } });
  if (!service) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json(service);
});

export const OPTIONS = corsPreflight;
