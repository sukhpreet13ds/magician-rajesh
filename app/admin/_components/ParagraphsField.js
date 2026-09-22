"use client";

export default function ParagraphsField({ value, onChange }) {
  const paragraphs = Array.isArray(value) ? value : [];

  function update(i, text) {
    const next = [...paragraphs];
    next[i] = text;
    onChange(next);
  }

  function remove(i) {
    onChange(paragraphs.filter((_, idx) => idx !== i));
  }

  function move(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= paragraphs.length) return;
    const next = [...paragraphs];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  }

  return (
    <div className="paragraphs-field">
      {paragraphs.map((p, i) => (
        <div className="paragraphs-field-row" key={i}>
          <textarea value={p} onChange={(e) => update(i, e.target.value)} rows={3} />
          <div className="paragraphs-field-actions">
            <button type="button" onClick={() => move(i, -1)} disabled={i === 0} title="Move up">
              ↑
            </button>
            <button
              type="button"
              onClick={() => move(i, 1)}
              disabled={i === paragraphs.length - 1}
              title="Move down"
            >
              ↓
            </button>
            <button type="button" className="btn-danger-link" onClick={() => remove(i)} title="Remove">
              ✕
            </button>
          </div>
        </div>
      ))}
      <button type="button" className="btn-secondary" onClick={() => onChange([...paragraphs, ""])}>
        + Add paragraph
      </button>
    </div>
  );
}
