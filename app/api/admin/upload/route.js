import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { withErrorHandling } from "@/lib/apiErrors";

export const runtime = "nodejs";

const ALLOWED_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
};
const MAX_BYTES = 8 * 1024 * 1024; // 8MB

export const POST = withErrorHandling(async (request) => {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }

  const ext = ALLOWED_TYPES[file.type];
  if (!ext) {
    return NextResponse.json({ error: "Unsupported file type." }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File is too large (max 8MB)." }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const folder = new Date().toISOString().slice(0, 7); // YYYY-MM
  const dir = path.join(process.cwd(), "public", "uploads", folder);
  await mkdir(dir, { recursive: true });

  const filename = `${randomUUID()}.${ext}`;
  await writeFile(path.join(dir, filename), bytes);

  const base = process.env.APP_URL || new URL(request.url).origin;
  return NextResponse.json({ url: `${base}/uploads/${folder}/${filename}` }, { status: 201 });
});
