import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withErrorHandling } from "@/lib/apiErrors";

export const GET = withErrorHandling(async () => {
  const settings = await prisma.siteSettings.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1 },
  });
  return NextResponse.json(settings);
});

export const PUT = withErrorHandling(async (request) => {
  const body = await request.json();
  const { id, updatedAt, ...data } = body ?? {};
  const settings = await prisma.siteSettings.upsert({
    where: { id: 1 },
    update: data,
    create: { id: 1, ...data },
  });
  return NextResponse.json(settings);
});
