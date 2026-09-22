"use client";

import { useState } from "react";
import SchemaForm from "./SchemaForm";
import ImageUploadField from "./ImageUploadField";
import { emptyValueForField } from "@/lib/adminResources";

export default function PageContentFormClient({ slug, schema, initialHeroImage, initialContent }) {
  const [heroImage, setHeroImage] = useState(initialHeroImage);
  const [content, setContent] = useState(() => {
    const withDefaults = { ...initialContent };
    for (const field of schema.fields) {
      if (withDefaults[field.name] === undefined) {
        withDefaults[field.name] = emptyValueForField(field);
      }
    }
    return withDefaults;
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  function setField(name, value) {
    setContent((c) => ({ ...c, [name]: value }));
    setSaved(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/page-content/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ heroImage, content }),
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

      {schema.hasHeroImage && (
        <div className="field">
          <label>Hero Background Image</label>
          <ImageUploadField value={heroImage} onChange={setHeroImage} />
          <p className="field-hint">Shown behind the page title, same as every other inner page.</p>
        </div>
      )}

      <SchemaForm fields={schema.fields} values={content} onFieldChange={setField} />

      <div className="form-actions">
        <button type="submit" className="btn-primary" disabled={saving}>
          {saving ? "Saving…" : "Save"}
        </button>
      </div>
    </form>
  );
}
