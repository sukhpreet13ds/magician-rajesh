import AdminShell from "./_components/AdminShell";
import "./admin.css";

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
