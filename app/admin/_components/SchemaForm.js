"use client";

import FieldInput from "./FieldInput";

export default function SchemaForm({ fields, values, onFieldChange }) {
  return (
    <div className="schema-form">
      {fields.map((field) => {
        if (field.type === "info") {
          return (
            <p key={field.name} className="field-hint field-hint-block">
              {field.hint}
            </p>
          );
        }
        return (
          <div className="field" key={field.name}>
            <label>
              {field.label}
              {field.required && <span className="required-mark"> *</span>}
            </label>
            <FieldInput
              field={field}
              value={values[field.name]}
              onChange={(v) => onFieldChange(field.name, v)}
            />
            {field.hint && <p className="field-hint">{field.hint}</p>}
          </div>
        );
      })}
    </div>
  );
}
