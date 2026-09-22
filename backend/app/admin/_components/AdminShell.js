"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/pages", label: "Page Content" },
  { href: "/admin/nav", label: "Navigation" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/events", label: "Events" },
  { href: "/admin/gallery", label: "Gallery" },
  { href: "/admin/blogs", label: "Blogs" },
  { href: "/admin/testimonials", label: "Testimonials" },
  { href: "/admin/brands", label: "Brands" },
  { href: "/admin/settings", label: "Site Settings" },
  { href: "/admin/leads/contact", label: "Contact Leads" },
  { href: "/admin/leads/enquiries", label: "Booking Enquiries" },
];

export default function AdminShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin/login") {
    return children;
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">Rajesh Kumar — Admin</div>
        <nav>
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={active ? "active" : ""}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button type="button" className="admin-sidebar-logout" onClick={handleLogout}>
          Log out
        </button>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
