import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { publicHandler, corsPreflight } from "@/lib/cors";

export const POST = publicHandler(async (request) => {
  const body = await request.json();
  const { firstName, lastName, email, phone, subject, message } = body ?? {};

  if (!firstName || !lastName || !email || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  await prisma.contactSubmission.create({
    data: {
      firstName: String(firstName).slice(0, 200),
      lastName: String(lastName).slice(0, 200),
      email: String(email).slice(0, 200),
      phone: String(phone).slice(0, 50),
      subject: subject ? String(subject).slice(0, 200) : null,
      message: String(message).slice(0, 5000),
    },
  });

  return NextResponse.json({ ok: true }, { status: 201 });
});

export const OPTIONS = corsPreflight;
