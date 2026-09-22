"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({ apiPath, label = "Delete", onDeleted, confirmText = "Delete this item?" }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function handleDelete() {
    if (!window.confirm(confirmText)) return;
    setBusy(true);
    try {
      const res = await fetch(apiPath, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Delete failed.");
      }
      if (onDeleted) onDeleted();
      else router.refresh();
    } catch (err) {
      alert(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <button type="button" className="btn-danger-link" onClick={handleDelete} disabled={busy}>
      {busy ? "…" : label}
    </button>
  );
}
