import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { publicHandler, corsPreflight } from "@/lib/cors";

export const GET = publicHandler(async () => {
  const [settings, navLinks] = await Promise.all([
    prisma.siteSettings.upsert({ where: { id: 1 }, update: {}, create: { id: 1 } }),
    prisma.navLink.findMany({ where: { visible: true }, orderBy: { sortOrder: "asc" } }),
  ]);
  return NextResponse.json({ settings, navLinks });
});

export const OPTIONS = corsPreflight;
