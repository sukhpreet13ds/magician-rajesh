import { NextResponse } from "next/server";
import { prisma } from "./prisma";
import { withErrorHandling } from "./apiErrors";

// Shared list+create / get+update+delete handlers for the simple, flat
// content models (GalleryItem, Testimonial, Brand, ...). Models with
// relations or extra invariants (Service, Event, Blog) get their own route
// files but can still reuse itemHandlers for the single-record GET/PUT/DELETE
// half where it fits.

function stripWriteOnlyFields(body) {
  const { id, createdAt, updatedAt, ...rest } = body ?? {};
  return rest;
}

export function collectionHandlers(modelName, { orderBy = { sortOrder: "asc" } } = {}) {
  const model = prisma[modelName];
  return {
    GET: withErrorHandling(async () => {
      const items = await model.findMany({ orderBy });
      return NextResponse.json(items);
    }),
    POST: withErrorHandling(async (request) => {
      const body = await request.json();
      const item = await model.create({ data: stripWriteOnlyFields(body) });
      return NextResponse.json(item, { status: 201 });
    }),
  };
}

export function itemHandlers(modelName, { idType = "number" } = {}) {
  const model = prisma[modelName];
  const castId = (id) => (idType === "number" ? Number(id) : id);
  return {
    GET: withErrorHandling(async (_request, { params }) => {
      const { id } = await params;
      const item = await model.findUnique({ where: { id: castId(id) } });
      if (!item) return NextResponse.json({ error: "Not found." }, { status: 404 });
      return NextResponse.json(item);
    }),
    PUT: withErrorHandling(async (request, { params }) => {
      const { id } = await params;
      const body = await request.json();
      const item = await model.update({
        where: { id: castId(id) },
        data: stripWriteOnlyFields(body),
      });
      return NextResponse.json(item);
    }),
    DELETE: withErrorHandling(async (_request, { params }) => {
      const { id } = await params;
      await model.delete({ where: { id: castId(id) } });
      return NextResponse.json({ ok: true });
    }),
  };
}
