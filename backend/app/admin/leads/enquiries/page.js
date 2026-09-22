import { prisma } from "@/lib/prisma";
import LeadsTable from "../../_components/LeadsTable";

export const dynamic = "force-dynamic";

export default async function EnquiryLeadsPage() {
  const leads = await prisma.bookingEnquiry.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="page-header">
        <h1>Booking Enquiries</h1>
      </div>
      <LeadsTable
        apiBase="/api/admin/leads/enquiries"
        leads={JSON.parse(JSON.stringify(leads))}
        columns={[
          { name: "createdAt", label: "Date", format: "date" },
          { name: "eventType", label: "Event Type" },
          { name: "firstName", label: "First Name" },
          { name: "lastName", label: "Last Name" },
          { name: "email", label: "Email" },
          { name: "phone", label: "Phone" },
          { name: "eventDate", label: "Event Date", format: "date" },
          { name: "location", label: "Location" },
          { name: "guestCount", label: "Guests" },
          { name: "knownFor", label: "Heard Via" },
        ]}
      />
    </div>
  );
}
