"use client";

import { useState } from "react";

export default function NavLinksFormClient({ initialLinks }) {
  const [links, setLinks] = useState(initialLinks);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  function update(i, patch) {
    setLinks((ls) => ls.map((l, idx) => (idx === i ? { ...l, ...patch } : l)));
    setSaved(false);
  }

  function move(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= links.length) return;
    const next = [...links];
    [next[i], next[j]] = [next[j], next[i]];
    setLinks(next);
    setSaved(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/nav-links", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(links),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed.");
      setLinks(data);
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

      <table className="admin-table">
        <thead>
          <tr>
            <th>Label</th>
            <th>Path</th>
            <th>Visible</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {links.map((link, i) => (
            <tr key={link.id ?? i}>
              <td>
                <input
                  type="text"
                  value={link.label}
                  onChange={(e) => update(i, { label: e.target.value })}
                />
              </td>
              <td className="muted-cell">{link.path}</td>
              <td>
                <input
                  type="checkbox"
                  checked={link.visible}
                  onChange={(e) => update(i, { visible: e.target.checked })}
                />
              </td>
              <td className="row-actions">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0}>
                  ↑
                </button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === links.length - 1}>
                  ↓
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-actions">
        <button type="submit" className="btn-primary" disabled={saving}>
          {saving ? "Saving…" : "Save"}
        </button>
      </div>
    </form>
  );
}
