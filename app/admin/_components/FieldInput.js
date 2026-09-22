"use client";

import ImageUploadField from "./ImageUploadField";
import ParagraphsField from "./ParagraphsField";
import ItemListField from "./ItemListField";

function toDateInputValue(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

export default function FieldInput({ field, value, onChange }) {
  switch (field.type) {
    case "textarea":
      return (
        <textarea
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          required={field.required}
        />
      );
    case "number":
      return (
        <input
          type="number"
          value={value ?? 0}
          onChange={(e) => onChange(Number(e.target.value))}
          required={field.required}
        />
      );
    case "boolean":
      return (
        <label className="checkbox-inline">
          <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} />
          <span>{value ? "Yes" : "No"}</span>
        </label>
      );
    case "select":
      return (
        <select value={value ?? ""} onChange={(e) => onChange(e.target.value)} required={field.required}>
          <option value="" disabled>
            Select…
          </option>
          {field.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    case "date":
      return (
        <input
          type="date"
          value={toDateInputValue(value)}
          onChange={(e) => onChange(e.target.value ? new Date(e.target.value).toISOString() : "")}
        />
      );
    case "image":
      return <ImageUploadField value={value} onChange={onChange} />;
    case "paragraphs":
      return <ParagraphsField value={value} onChange={onChange} />;
    case "itemList":
      return <ItemListField itemFields={field.itemFields} value={value} onChange={onChange} />;
    case "info":
      return null;
    case "text":
    default:
      return (
        <input
          type="text"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          required={field.required}
        />
      );
  }
}
