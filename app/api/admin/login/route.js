import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signSessionToken, SESSION_COOKIE } from "@/lib/auth";
import { withErrorHandling } from "@/lib/apiErrors";

export const POST = withErrorHandling(async (request) => {
  const { email, password } = await request.json();
  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const admin = await prisma.adminUser.findUnique({ where: { email } });
  const valid = admin ? await bcrypt.compare(password, admin.passwordHash) : false;

  if (!admin || !valid) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  const token = await signSessionToken({ adminId: admin.id, email: admin.email });
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
});
