import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { adminResources } from "@/lib/adminResources";
import ResourceFormClient from "../../_components/ResourceFormClient";

export const dynamic = "force-dynamic";

export default async function EditResourcePage({ params }) {
  const { resource: resourceKey, id } = await params;
  const resource = adminResources[resourceKey];
  if (!resource) notFound();

  const item = await prisma[resource.model].findUnique({
    where: { id: Number(id) },
    include: resource.include,
  });
  if (!item) notFound();

  return (
    <div>
      <div className="page-header">
        <h1>Edit {resource.label.replace(/s$/, "")}</h1>
      </div>
      <ResourceFormClient
        resourceKey={resourceKey}
        resource={resource}
        initialValues={JSON.parse(JSON.stringify(item))}
        itemId={item.id}
      />
    </div>
  );
}
