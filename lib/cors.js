import { withErrorHandling } from "./apiErrors";

function allowedOrigins() {
  return (process.env.PUBLIC_SITE_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function corsHeaders(request) {
  const origin = request.headers.get("origin");
  const allowed = allowedOrigins();
  const headers = {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  if (origin && allowed.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  } else if (allowed.includes("*")) {
    headers["Access-Control-Allow-Origin"] = "*";
  }
  return headers;
}

export function withCors(handler) {
  return async (request, ctx) => {
    const response = await handler(request, ctx);
    const headers = corsHeaders(request);
    for (const [key, value] of Object.entries(headers)) {
      response.headers.set(key, value);
    }
    return response;
  };
}

export function corsPreflight(request) {
  return new Response(null, { status: 204, headers: corsHeaders(request) });
}

// Combines error-handling + CORS for a public GET/POST handler in one call.
export function publicHandler(handler) {
  return withCors(withErrorHandling(handler));
}
