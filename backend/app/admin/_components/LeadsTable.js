"use client";

import { useState } from "react";
import DeleteButton from "./DeleteButton";

function formatValue(value, format) {
  if (format === "date") return value ? new Date(value).toLocaleString() : "";
  return String(value ?? "");
}

export default function LeadsTable({ apiBase, leads: initialLeads, columns }) {
  const [leads, setLeads] = useState(initialLeads);

  async function toggleRead(lead) {
    const res = await fetch(`${apiBase}/${lead.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: !lead.read }),
    });
    if (res.ok) {
      const updated = await res.json();
      setLeads((ls) => ls.map((l) => (l.id === lead.id ? updated : l)));
    }
  }

  if (leads.length === 0) {
    return <p className="empty-row">No submissions yet.</p>;
  }

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Read</th>
          {columns.map((c) => (
            <th key={c.name}>{c.label}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead.id} className={lead.read ? "" : "row-unread"}>
            <td>
              <input type="checkbox" checked={!!lead.read} onChange={() => toggleRead(lead)} />
            </td>
            {columns.map((c) => (
              <td key={c.name}>{formatValue(lead[c.name], c.format)}</td>
            ))}
            <td className="row-actions">
              <DeleteButton
                apiPath={`${apiBase}/${lead.id}`}
                onDeleted={() => setLeads((ls) => ls.filter((l) => l.id !== lead.id))}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
