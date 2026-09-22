"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SchemaForm from "./SchemaForm";
import DeleteButton from "./DeleteButton";

export default function ResourceFormClient({ resourceKey, resource, initialValues, itemId }) {
  const router = useRouter();
  const [values, setValues] = useState(initialValues);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function setField(name, value) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const url = itemId ? `${resource.apiPath}/${itemId}` : resource.apiPath;
      const method = itemId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed.");
      router.push(`/admin/${resourceKey}`);
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      {error && <p className="field-error">{error}</p>}
      <SchemaForm fields={resource.fields} values={values} onFieldChange={setField} />
      <div className="form-actions">
        <button type="submit" className="btn-primary" disabled={saving}>
          {saving ? "Saving…" : "Save"}
        </button>
        {itemId && (
          <DeleteButton
            apiPath={`${resource.apiPath}/${itemId}`}
            label="Delete"
            confirmText={`Delete this ${resource.label.replace(/s$/, "").toLowerCase()}?`}
            onDeleted={() => router.push(`/admin/${resourceKey}`)}
          />
        )}
      </div>
    </form>
  );
}
