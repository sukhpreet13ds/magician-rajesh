import { notFound } from "next/navigation";
import { adminResources, emptyResourceValues } from "@/lib/adminResources";
import ResourceFormClient from "../../_components/ResourceFormClient";

export default async function NewResourcePage({ params }) {
  const { resource: resourceKey } = await params;
  const resource = adminResources[resourceKey];
  if (!resource) notFound();

  return (
    <div>
      <div className="page-header">
        <h1>New {resource.label.replace(/s$/, "")}</h1>
      </div>
      <ResourceFormClient
        resourceKey={resourceKey}
        resource={resource}
        initialValues={emptyResourceValues(resource)}
        itemId={null}
      />
    </div>
  );
}
