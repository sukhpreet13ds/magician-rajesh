import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { publicHandler, corsPreflight } from "@/lib/cors";

export const POST = publicHandler(async (request) => {
  const body = await request.json();
  const {
    eventType,
    firstName,
    lastName,
    email,
    phone,
    eventDate,
    location,
    guestCount,
    knownFor,
    privacyConsent,
    emailConsent,
  } = body ?? {};

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const parsedEventDate = eventDate ? new Date(eventDate) : null;
  if (eventDate && Number.isNaN(parsedEventDate?.getTime())) {
    return NextResponse.json({ error: "Invalid event date." }, { status: 400 });
  }

  await prisma.bookingEnquiry.create({
    data: {
      eventType: eventType ? String(eventType).slice(0, 100) : null,
      firstName: String(firstName).slice(0, 200),
      lastName: String(lastName).slice(0, 200),
      email: String(email).slice(0, 200),
      phone: String(phone).slice(0, 50),
      eventDate: parsedEventDate,
      location: location ? String(location).slice(0, 300) : null,
      guestCount: guestCount ? String(guestCount).slice(0, 50) : null,
      knownFor: knownFor ? String(knownFor).slice(0, 100) : null,
      privacyConsent: Boolean(privacyConsent),
      emailConsent: Boolean(emailConsent),
    },
  });

  return NextResponse.json({ ok: true }, { status: 201 });
});

export const OPTIONS = corsPreflight;
