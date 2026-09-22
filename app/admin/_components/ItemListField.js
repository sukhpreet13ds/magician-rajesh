"use client";

import FieldInput from "./FieldInput";
import { emptyValueForField } from "@/lib/adminResources";

export default function ItemListField({ itemFields, value, onChange }) {
  const items = Array.isArray(value) ? value : [];

  function updateItem(i, name, val) {
    const next = items.map((item, idx) => (idx === i ? { ...item, [name]: val } : item));
    onChange(next);
  }

  function remove(i) {
    onChange(items.filter((_, idx) => idx !== i));
  }

  function move(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  }

  function addItem() {
    const blank = {};
    for (const f of itemFields) blank[f.name] = emptyValueForField(f);
    onChange([...items, blank]);
  }

  return (
    <div className="item-list-field">
      {items.map((item, i) => (
        <div className="item-list-row" key={i}>
          <div className="item-list-row-header">
            <span>#{i + 1}</span>
            <div className="item-list-actions">
              <button type="button" onClick={() => move(i, -1)} disabled={i === 0}>
                ↑
              </button>
              <button type="button" onClick={() => move(i, 1)} disabled={i === items.length - 1}>
                ↓
              </button>
              <button type="button" className="btn-danger-link" onClick={() => remove(i)}>
                Remove
              </button>
            </div>
          </div>
          {itemFields.map((f) => (
            <div className="field" key={f.name}>
              <label>{f.label}</label>
              <FieldInput field={f} value={item[f.name]} onChange={(v) => updateItem(i, f.name, v)} />
            </div>
          ))}
        </div>
      ))}
      <button type="button" className="btn-secondary" onClick={addItem}>
        + Add item
      </button>
    </div>
  );
}
