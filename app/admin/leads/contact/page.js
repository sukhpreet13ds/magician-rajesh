import { prisma } from "@/lib/prisma";
import LeadsTable from "../../_components/LeadsTable";

export const dynamic = "force-dynamic";

export default async function ContactLeadsPage() {
  const leads = await prisma.contactSubmission.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="page-header">
        <h1>Contact Form Submissions</h1>
      </div>
      <LeadsTable
        apiBase="/api/admin/leads/contact"
        leads={JSON.parse(JSON.stringify(leads))}
        columns={[
          { name: "createdAt", label: "Date", format: "date" },
          { name: "firstName", label: "First Name" },
          { name: "lastName", label: "Last Name" },
          { name: "email", label: "Email" },
          { name: "phone", label: "Phone" },
          { name: "subject", label: "Subject" },
          { name: "message", label: "Message" },
        ]}
      />
    </div>
  );
}
