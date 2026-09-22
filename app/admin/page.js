import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [services, events, gallery, blogs, testimonials, brands, unreadContact, unreadEnquiries] =
    await Promise.all([
      prisma.service.count(),
      prisma.event.count(),
      prisma.galleryItem.count(),
      prisma.blog.count(),
      prisma.testimonial.count(),
      prisma.brand.count(),
      prisma.contactSubmission.count({ where: { read: false } }),
      prisma.bookingEnquiry.count({ where: { read: false } }),
    ]);

  const tiles = [
    { href: "/admin/pages", label: "Page Content", value: "Home / About / …" },
    { href: "/admin/services", label: "Services", value: services },
    { href: "/admin/events", label: "Events", value: events },
    { href: "/admin/gallery", label: "Gallery Items", value: gallery },
    { href: "/admin/blogs", label: "Blogs", value: blogs },
    { href: "/admin/testimonials", label: "Testimonials", value: testimonials },
    { href: "/admin/brands", label: "Brands", value: brands },
    { href: "/admin/leads/contact", label: "New Contact Messages", value: unreadContact },
    { href: "/admin/leads/enquiries", label: "New Booking Enquiries", value: unreadEnquiries },
  ];

  return (
    <div>
      <div className="page-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-grid">
        {tiles.map((tile) => (
          <Link key={tile.href} href={tile.href} className="dashboard-tile">
            <div className="dashboard-tile-value">{tile.value}</div>
            <div className="dashboard-tile-label">{tile.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
