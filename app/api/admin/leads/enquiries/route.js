import { collectionHandlers } from "@/lib/crud";

export const { GET } = collectionHandlers("bookingEnquiry", { orderBy: { createdAt: "desc" } });
