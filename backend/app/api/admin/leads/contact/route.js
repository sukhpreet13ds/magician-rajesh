import { collectionHandlers } from "@/lib/crud";

export const { GET } = collectionHandlers("contactSubmission", { orderBy: { createdAt: "desc" } });
