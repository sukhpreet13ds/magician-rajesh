import Link from "next/link";
import { pageContentSchemas } from "@/lib/pageContentSchemas";

export default function PagesIndex() {
  return (
    <div>
      <div className="page-header">
        <h1>Page Content</h1>
      </div>
      <p className="field-hint field-hint-block">
        Edit the hero text, headings and paragraphs for each page linked from the navbar/footer. Services,
        events, gallery, blogs, testimonials and brands are managed as their own lists in the sidebar.
      </p>
      <div className="card-grid">
        {Object.entries(pageContentSchemas).map(([slug, schema]) => (
          <Link key={slug} href={`/admin/pages/${slug}`} className="card-link">
            {schema.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
