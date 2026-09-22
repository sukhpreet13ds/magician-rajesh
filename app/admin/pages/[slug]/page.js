import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { pageContentSchemas } from "@/lib/pageContentSchemas";
import PageContentFormClient from "../../_components/PageContentFormClient";

export const dynamic = "force-dynamic";

export default async function PageContentEditPage({ params }) {
  const { slug } = await params;
  const schema = pageContentSchemas[slug];
  if (!schema) notFound();

  const existing = await prisma.pageContent.findUnique({ where: { pageSlug: slug } });

  return (
    <div>
      <div className="page-header">
        <h1>{schema.label}</h1>
      </div>
      <PageContentFormClient
        slug={slug}
        schema={schema}
        initialHeroImage={existing?.heroImage ?? ""}
        initialContent={existing?.content ?? {}}
      />
    </div>
  );
}
