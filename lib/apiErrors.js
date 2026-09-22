import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export function withErrorHandling(handler) {
  return async (...args) => {
    try {
      return await handler(...args);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          return NextResponse.json(
            { error: `A record with that ${err.meta?.target ?? "value"} already exists.` },
            { status: 409 }
          );
        }
        if (err.code === "P2025") {
          return NextResponse.json({ error: "Not found." }, { status: 404 });
        }
      }
      if (err.status) {
        return NextResponse.json({ error: err.message }, { status: err.status });
      }
      console.error(err);
      return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
  };
}
