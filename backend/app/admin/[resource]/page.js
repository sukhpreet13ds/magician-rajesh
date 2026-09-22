import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { adminResources } from "@/lib/adminResources";
import DeleteButton from "../_components/DeleteButton";

export const dynamic = "force-dynamic";

export default async function ResourceListPage({ params }) {
  const { resource: resourceKey } = await params;
  const resource = adminResources[resourceKey];
  if (!resource) notFound();

  const items = await prisma[resource.model].findMany({
    orderBy: { [resource.defaultSort]: resource.defaultSort === "publishedDate" ? "desc" : "asc" },
  });

  return (
    <div>
      <div className="page-header">
        <h1>{resource.label}</h1>
        <Link href={`/admin/${resourceKey}/new`} className="btn-primary">
          + Add {resource.label.replace(/s$/, "")}
        </Link>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            {resource.listColumns.map((col) => (
              <th key={col.name}>{col.label}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 && (
            <tr>
              <td colSpan={resource.listColumns.length + 1} className="empty-row">
                Nothing here yet.
              </td>
            </tr>
          )}
          {items.map((item) => (
            <tr key={item.id}>
              {resource.listColumns.map((col) => (
                <td key={col.name}>
                  {typeof item[col.name] === "boolean" ? (item[col.name] ? "Yes" : "No") : String(item[col.name] ?? "")}
                </td>
              ))}
              <td className="row-actions">
                <Link href={`/admin/${resourceKey}/${item.id}`}>Edit</Link>
                <DeleteButton apiPath={`${resource.apiPath}/${item.id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
