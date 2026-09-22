"use client";

import { useState } from "react";
import SchemaForm from "./SchemaForm";
import { siteSettingsFields } from "@/lib/siteSettingsSchema";

export default function SettingsFormClient({ initialValues }) {
  const [values, setValues] = useState(initialValues);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  function setField(name, value) {
    setValues((v) => ({ ...v, [name]: value }));
    setSaved(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed.");
      setSaved(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      {error && <p className="field-error">{error}</p>}
      {saved && <p className="field-success">Saved.</p>}
      <SchemaForm fields={siteSettingsFields} values={values} onFieldChange={setField} />
      <div className="form-actions">
        <button type="submit" className="btn-primary" disabled={saving}>
          {saving ? "Saving…" : "Save"}
        </button>
      </div>
    </form>
  );
}
