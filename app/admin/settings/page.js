import { prisma } from "@/lib/prisma";
import SettingsFormClient from "../_components/SettingsFormClient";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const settings = await prisma.siteSettings.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1 },
  });

  return (
    <div>
      <div className="page-header">
        <h1>Site Settings</h1>
      </div>
      <p className="field-hint field-hint-block">
        These values are shared across the whole public site (navbar, footer, contact page) — edit once,
        update everywhere.
      </p>
      <SettingsFormClient initialValues={JSON.parse(JSON.stringify(settings))} />
    </div>
  );
}
