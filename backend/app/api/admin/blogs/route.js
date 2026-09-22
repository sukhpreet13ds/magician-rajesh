import { collectionHandlers } from "@/lib/crud";

export const { GET, POST } = collectionHandlers("blog", { orderBy: { publishedDate: "desc" } });
