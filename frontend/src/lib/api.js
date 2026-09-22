const API_URL = import.meta.env.VITE_API_URL;

async function request(path, options) {
  const res = await fetch(`${API_URL}${path}`, options);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request to ${path} failed (${res.status}).`);
  }
  return res.json();
}

export const api = {
  site: () => request("/api/public/site"),
  pageContent: (slug) => request(`/api/public/page-content/${slug}`),

  services: () => request("/api/public/services"),
  service: (slug) => request(`/api/public/services/${slug}`),

  events: (limit) => request(`/api/public/events${limit ? `?limit=${limit}` : ""}`),
  event: (slug) => request(`/api/public/events/${slug}`),

  gallery: () => request("/api/public/gallery"),

  blogs: () => request("/api/public/blogs"),
  blog: (slug) => request(`/api/public/blogs/${slug}`),

  testimonials: () => request("/api/public/testimonials"),
  brands: () => request("/api/public/brands"),

  submitContact: (data) =>
    request("/api/public/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  submitEnquiry: (data) =>
    request("/api/public/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
};
