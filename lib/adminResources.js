// Config-driven definitions for the six repeatable content types. One
// generic list + form UI (app/admin/[resource]/...) reads this instead of
// six near-identical hand-built CRUD screens.

export const adminResources = {
  services: {
    label: "Services",
    model: "service",
    apiPath: "/api/admin/services",
    listColumns: [
      { name: "title", label: "Title" },
      { name: "slug", label: "Slug" },
      { name: "published", label: "Published" },
    ],
    defaultSort: "sortOrder",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      {
        name: "slug",
        label: "Slug (URL)",
        type: "text",
        required: true,
        hint: "Used at /services/<slug> on the public site. Lowercase, dashes only.",
      },
      { name: "cardImageUrl", label: "Card Image", type: "image" },
      { name: "cardDescription", label: "Card Description", type: "textarea" },
      { name: "detailHeading", label: "Detail Page Heading", type: "text" },
      { name: "detailSubheading", label: "Detail Page Subheading", type: "text" },
      { name: "detailParagraphs", label: "Detail Page Paragraphs (1st block)", type: "paragraphs" },
      { name: "detailImageUrl", label: "Detail Page Image (1st)", type: "image" },
      { name: "detailSecondHeading", label: "Detail Page — 2nd Heading (optional)", type: "text" },
      { name: "detailParagraphs2", label: "Detail Page Paragraphs (2nd block, optional)", type: "paragraphs" },
      { name: "detailImageUrl2", label: "Detail Page Image (2nd, optional)", type: "image" },
      { name: "sortOrder", label: "Sort Order", type: "number" },
      { name: "published", label: "Published", type: "boolean" },
    ],
  },

  events: {
    label: "Events",
    model: "event",
    include: { photos: { orderBy: { sortOrder: "asc" } } },
    apiPath: "/api/admin/events",
    listColumns: [
      { name: "title", label: "Title" },
      { name: "slug", label: "Slug" },
      { name: "published", label: "Published" },
    ],
    defaultSort: "sortOrder",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      {
        name: "slug",
        label: "Slug (URL)",
        type: "text",
        required: true,
        hint: "Used at /events/<slug> on the public site.",
      },
      { name: "eventDate", label: "Event Date", type: "date" },
      { name: "displayDate", label: "Display Date Text", type: "text", hint: 'e.g. "Thursday 1st of January" — shown instead of the date above if set' },
      { name: "cardImageUrl", label: "Card Image", type: "image" },
      { name: "detailTag", label: "Detail Page Tag", type: "text" },
      { name: "detailHeading", label: "Detail Page Heading", type: "text" },
      { name: "detailSubheading", label: "Detail Page Subheading", type: "text" },
      {
        name: "photos",
        label: "Photo Gallery",
        type: "itemList",
        itemFields: [
          { name: "imageUrl", label: "Photo", type: "image" },
          { name: "title", label: "Caption", type: "text" },
        ],
      },
      { name: "sortOrder", label: "Sort Order", type: "number" },
      { name: "published", label: "Published", type: "boolean" },
    ],
  },

  gallery: {
    label: "Gallery",
    model: "galleryItem",
    apiPath: "/api/admin/gallery",
    listColumns: [
      { name: "title", label: "Title" },
      { name: "type", label: "Type" },
      { name: "category", label: "Category" },
      { name: "published", label: "Published" },
    ],
    defaultSort: "sortOrder",
    fields: [
      { name: "type", label: "Type", type: "select", options: ["image", "video"], required: true },
      { name: "imageUrl", label: "Image", type: "image", hint: "Required when Type = image" },
      { name: "videoEmbedId", label: "YouTube Video ID", type: "text", hint: "Required when Type = video" },
      { name: "title", label: "Title / Caption", type: "text" },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: ["videos", "stage", "corporate", "events"],
        required: true,
      },
      {
        name: "sizeClass",
        label: "Layout Size",
        type: "select",
        options: [
          "gallery-item-large",
          "gallery-item-wide",
          "gallery-item-tall",
          "gallery-item-medium",
          "gallery-item-small",
        ],
        required: true,
      },
      { name: "sortOrder", label: "Sort Order", type: "number" },
      { name: "published", label: "Published", type: "boolean" },
    ],
  },

  blogs: {
    label: "Blogs",
    model: "blog",
    apiPath: "/api/admin/blogs",
    listColumns: [
      { name: "title", label: "Title" },
      { name: "category", label: "Category" },
      { name: "published", label: "Published" },
    ],
    defaultSort: "publishedDate",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      {
        name: "slug",
        label: "Slug (URL)",
        type: "text",
        required: true,
        hint: "Used at /blogs/<slug> on the public site.",
      },
      { name: "publishedDate", label: "Published Date", type: "date" },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: ["Corporate Magic", "Mentalism", "Techno Magic", "Stage Magic"],
        required: true,
      },
      { name: "readTime", label: "Read Time", type: "text", hint: 'e.g. "5 min read"' },
      { name: "author", label: "Author", type: "text" },
      { name: "imageUrl", label: "Featured Image", type: "image" },
      { name: "summary", label: "Summary (card teaser)", type: "textarea" },
      { name: "content", label: "Article Body", type: "paragraphs" },
      { name: "quote", label: "Pull Quote (optional)", type: "textarea" },
      { name: "youtubeVideoId", label: "YouTube Video ID (optional)", type: "text" },
      { name: "videoTitle", label: "Video Subtitle (optional)", type: "text" },
      { name: "sortOrder", label: "Sort Order", type: "number" },
      { name: "published", label: "Published", type: "boolean" },
    ],
  },

  testimonials: {
    label: "Testimonials",
    model: "testimonial",
    apiPath: "/api/admin/testimonials",
    listColumns: [
      { name: "name", label: "Name" },
      { name: "rating", label: "Rating" },
      { name: "published", label: "Published" },
    ],
    defaultSort: "sortOrder",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "rating", label: "Rating (1-5)", type: "number" },
      { name: "text", label: "Review Text", type: "textarea", required: true },
      { name: "sortOrder", label: "Sort Order", type: "number" },
      { name: "published", label: "Published", type: "boolean" },
    ],
  },

  brands: {
    label: "Brands",
    model: "brand",
    apiPath: "/api/admin/brands",
    listColumns: [
      { name: "name", label: "Name" },
      { name: "published", label: "Published" },
    ],
    defaultSort: "sortOrder",
    fields: [
      { name: "name", label: "Brand Name (optional)", type: "text" },
      { name: "logoUrl", label: "Logo", type: "image", required: true },
      { name: "sortOrder", label: "Sort Order", type: "number" },
      { name: "published", label: "Published", type: "boolean" },
    ],
  },
};

export function emptyValueForField(field) {
  switch (field.type) {
    case "boolean":
      return field.default ?? true;
    case "number":
      return field.default ?? 0;
    case "paragraphs":
      return [];
    case "itemList":
      return [];
    default:
      return "";
  }
}

export function emptyResourceValues(resource) {
  const values = {};
  for (const field of resource.fields) {
    values[field.name] = emptyValueForField(field);
  }
  return values;
}
