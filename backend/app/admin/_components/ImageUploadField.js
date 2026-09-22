"use client";

import { useRef, useState } from "react";

export default function ImageUploadField({ value, onChange }) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed.");
      onChange(data.url);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="image-field">
      {value ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" className="image-field-preview" />
      ) : (
        <div className="image-field-empty">No image</div>
      )}
      <div className="image-field-controls">
        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml"
          onChange={handleFile}
          disabled={uploading}
        />
        {value && (
          <button type="button" className="btn-link" onClick={() => onChange("")}>
            Remove
          </button>
        )}
      </div>
      {uploading && <p className="field-hint">Uploading…</p>}
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}
