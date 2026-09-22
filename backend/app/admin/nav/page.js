import { prisma } from "@/lib/prisma";
import NavLinksFormClient from "../_components/NavLinksFormClient";

export const dynamic = "force-dynamic";

const DEFAULT_LINKS = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "SERVICES", path: "/services" },
  { label: "GALLERY", path: "/gallery" },
  { label: "EVENTS", path: "/events" },
  { label: "BLOGS", path: "/blogs" },
  { label: "CONTACT US", path: "/contact" },
];

export default async function NavPage() {
  let links = await prisma.navLink.findMany({ orderBy: { sortOrder: "asc" } });
  if (links.length === 0) {
    await prisma.navLink.createMany({
      data: DEFAULT_LINKS.map((l, i) => ({ ...l, sortOrder: i, visible: true })),
    });
    links = await prisma.navLink.findMany({ orderBy: { sortOrder: "asc" } });
  }

  return (
    <div>
      <div className="page-header">
        <h1>Navigation</h1>
      </div>
      <p className="field-hint field-hint-block">
        Rename or reorder the navbar/footer links, or hide one. The page each link points to is fixed
        (routes are built into the site) — only the label, order and visibility are editable.
      </p>
      <NavLinksFormClient initialLinks={JSON.parse(JSON.stringify(links))} />
    </div>
  );
}
