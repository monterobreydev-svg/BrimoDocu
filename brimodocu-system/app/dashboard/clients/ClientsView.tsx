"use client";
import { useState, useEffect, useTransition, useMemo } from "react";
import { useRouter } from "next/navigation";
import { createClient, updateClient, deleteClient } from "@/app/actions/clients";

interface ClientRow {
  id:            string;
  name:          string;
  email:         string | null;
  phone:         string | null;
  address:       string | null;
  tin:           string | null;
  contactPerson: string | null;
  notes:         string | null;
  createdAt:     string;
}

const AVATAR_COLORS = ["#4F46E5","#0891B2","#059669","#D97706","#DC2626","#7C3AED","#0F766E","#BE185D"];

function avatarColor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

function initials(name: string) {
  const p = name.trim().split(/\s+/);
  return p.length === 1 ? p[0].slice(0, 2).toUpperCase() : (p[0][0] + p[p.length - 1][0]).toUpperCase();
}

const inp: React.CSSProperties = {
  width: "100%", padding: "8px 11px", borderRadius: 7,
  border: "1px solid #E2E8F0", fontSize: 13, color: "#0F172A",
  background: "#fff", outline: "none", boxSizing: "border-box",
};

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <label style={{ fontSize: 11.5, fontWeight: 600, color: "#334155" }}>
        {label}
        {optional && <span style={{ fontWeight: 400, color: "#94A3B8", marginLeft: 4 }}>(optional)</span>}
      </label>
      {children}
    </div>
  );
}

export function ClientsView({ initialClients }: { initialClients: ClientRow[] }) {
  const router = useRouter();
  const [clients, setClients]         = useState(initialClients);
  const [search, setSearch]           = useState("");
  const [panelOpen, setPanelOpen]     = useState(false);
  const [editingId, setEditingId]     = useState<string | null>(null);
  const [deleteId, setDeleteId]       = useState<string | null>(null);
  const [isPending, startTransition]  = useTransition();

  const [name,          setName]          = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email,         setEmail]         = useState("");
  const [phone,         setPhone]         = useState("");
  const [address,       setAddress]       = useState("");
  const [tin,           setTin]           = useState("");
  const [notes,         setNotes]         = useState("");

  useEffect(() => { setClients(initialClients); }, [initialClients]);

  const filtered = useMemo(() =>
    clients.filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      (c.email ?? "").toLowerCase().includes(search.toLowerCase()) ||
      (c.contactPerson ?? "").toLowerCase().includes(search.toLowerCase())
    ), [clients, search]);

  function clearForm() {
    setName(""); setContactPerson(""); setEmail(""); setPhone("");
    setAddress(""); setTin(""); setNotes("");
  }

  function openCreate() {
    setEditingId(null);
    clearForm();
    setPanelOpen(true);
  }

  function openEdit(c: ClientRow) {
    setEditingId(c.id);
    setName(c.name);
    setContactPerson(c.contactPerson ?? "");
    setEmail(c.email ?? "");
    setPhone(c.phone ?? "");
    setAddress(c.address ?? "");
    setTin(c.tin ?? "");
    setNotes(c.notes ?? "");
    setPanelOpen(true);
  }

  function closePanel() { setPanelOpen(false); }

  function handleSubmit() {
    if (!name.trim()) return;
    const data = { name, contactPerson, email, phone, address, tin, notes };
    startTransition(async () => {
      if (editingId) await updateClient(editingId, data);
      else           await createClient(data);
      router.refresh();
      closePanel();
    });
  }

  function handleDelete(id: string) {
    startTransition(async () => {
      await deleteClient(id);
      router.refresh();
      setDeleteId(null);
    });
  }

  return (
    <div className="flex flex-col h-full">

      {/* Topbar */}
      <div
        className="flex items-center justify-between flex-shrink-0"
        style={{ height: 52, padding: "0 20px", background: "#fff", borderBottom: "1px solid #E2E8F0" }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>Clients</span>
        <button
          onClick={openCreate}
          className="flex items-center gap-[5px] hover:bg-[#1E40AF] active:scale-[.98] transition-all"
          style={{ background: "#1D4ED8", color: "#fff", padding: "7px 13px", borderRadius: 7, fontSize: 12.5, fontWeight: 500, border: "none", cursor: "pointer" }}
        >
          <svg style={{ width: 13, height: 13 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          Add client
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto" style={{ padding: 22, background: "#F4F6F9" }}>
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10, overflow: "hidden" }}>

          {/* Search + count */}
          <div style={{ padding: "12px 17px", borderBottom: "1px solid #F1F5F9", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ position: "relative", flex: 1, maxWidth: 300 }}>
              <svg style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", width: 13, height: 13, color: "#94A3B8", pointerEvents: "none" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                style={{ ...inp, paddingLeft: 30, background: "#F8FAFC" }}
                placeholder="Search clients…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <span style={{ fontSize: 11.5, color: "#94A3B8", marginLeft: "auto" }}>
              {clients.length} client{clients.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Empty state */}
          {filtered.length === 0 ? (
            <div style={{ padding: "64px 20px", textAlign: "center" }}>
              <div className="flex flex-col items-center gap-[7px]">
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4 }}>
                  <svg style={{ width: 22, height: 22, color: "#CBD5E1" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#64748B" }}>
                  {search ? "No clients match your search" : "No clients yet"}
                </span>
                <span style={{ fontSize: 12, color: "#94A3B8" }}>
                  {search ? "Try a different term" : "Add your first client to get started"}
                </span>
                {!search && (
                  <button onClick={openCreate} className="hover:underline" style={{ fontSize: 12, fontWeight: 600, color: "#1D4ED8", background: "none", border: "none", cursor: "pointer", marginTop: 4 }}>
                    Add client →
                  </button>
                )}
              </div>
            </div>
          ) : (
            <table className="w-full" style={{ borderCollapse: "collapse", fontSize: 12.5 }}>
              <thead>
                <tr>
                  {[
                    { label: "Client",         align: "left"  },
                    { label: "Email",          align: "left"  },
                    { label: "Phone",          align: "left"  },
                    { label: "Contact Person", align: "left"  },
                    { label: "TIN",            align: "left"  },
                    { label: "",               align: "right" },
                  ].map(col => (
                    <th
                      key={col.label}
                      style={{ fontSize: 10.5, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: ".05em", padding: "8px 14px", background: "#F4F6F9", borderBottom: "1px solid #E2E8F0", textAlign: col.align as "left" | "right" }}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <tr
                    key={c.id}
                    className="hover:bg-[#FAFBFC] transition-colors"
                    style={{ borderBottom: i < filtered.length - 1 ? "1px solid #F1F5F9" : "none" }}
                  >
                    {/* Name + avatar */}
                    <td style={{ padding: "11px 14px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 30, height: 30, borderRadius: "50%", background: avatarColor(c.name), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                          {initials(c.name)}
                        </div>
                        <div>
                          <div style={{ fontWeight: 500, color: "#0F172A" }}>{c.name}</div>
                          {c.address && <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 1 }}>{c.address.split("\n")[0]}</div>}
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "11px 14px", color: "#334155" }}>{c.email || <span style={{ color: "#CBD5E1" }}>—</span>}</td>
                    <td style={{ padding: "11px 14px", color: "#334155" }}>{c.phone || <span style={{ color: "#CBD5E1" }}>—</span>}</td>
                    <td style={{ padding: "11px 14px", color: "#334155" }}>{c.contactPerson || <span style={{ color: "#CBD5E1" }}>—</span>}</td>
                    <td style={{ padding: "11px 14px", color: "#334155" }}>{c.tin || <span style={{ color: "#CBD5E1" }}>—</span>}</td>

                    {/* Actions */}
                    <td style={{ padding: "11px 14px", textAlign: "right" }}>
                      {deleteId === c.id ? (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6 }}>
                          <span style={{ fontSize: 11.5, color: "#64748B" }}>Delete?</span>
                          <button onClick={() => handleDelete(c.id)} disabled={isPending} style={{ padding: "4px 10px", borderRadius: 5, background: "#DC2626", color: "#fff", fontSize: 11.5, fontWeight: 500, border: "none", cursor: "pointer" }}>Yes</button>
                          <button onClick={() => setDeleteId(null)} style={{ padding: "4px 10px", borderRadius: 5, background: "#F1F5F9", color: "#334155", fontSize: 11.5, fontWeight: 500, border: "none", cursor: "pointer" }}>Cancel</button>
                        </div>
                      ) : (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 2 }}>
                          <button
                            onClick={() => openEdit(c)}
                            className="hover:bg-[#EFF6FF] hover:text-[#1D4ED8] transition-colors"
                            style={{ padding: "5px 7px", borderRadius: 6, border: "none", background: "transparent", color: "#94A3B8", cursor: "pointer" }}
                            title="Edit"
                          >
                            <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => setDeleteId(c.id)}
                            className="hover:bg-[#FFF1F2] hover:text-[#DC2626] transition-colors"
                            style={{ padding: "5px 7px", borderRadius: 6, border: "none", background: "transparent", color: "#94A3B8", cursor: "pointer" }}
                            title="Delete"
                          >
                            <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={closePanel}
        style={{
          position: "fixed", inset: 0, background: "rgba(15,23,42,0.3)",
          zIndex: 40, backdropFilter: "blur(1px)",
          opacity: panelOpen ? 1 : 0,
          pointerEvents: panelOpen ? "auto" : "none",
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Slide-over panel */}
      <div
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, width: 400,
          background: "#fff", borderLeft: "1px solid #E2E8F0",
          boxShadow: "-6px 0 28px rgba(15,23,42,0.12)",
          zIndex: 50, display: "flex", flexDirection: "column",
          transform: panelOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.22s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Panel header */}
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: "#0F172A" }}>{editingId ? "Edit client" : "New client"}</div>
            <div style={{ fontSize: 11.5, color: "#94A3B8", marginTop: 1 }}>Fill in the client details below</div>
          </div>
          <button
            onClick={closePanel}
            className="hover:bg-[#F4F6F9] transition-colors"
            style={{ padding: 6, borderRadius: 7, border: "none", background: "transparent", cursor: "pointer", color: "#64748B" }}
          >
            <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Panel form */}
        <div className="flex-1 overflow-y-auto" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
          <Field label="Client / Company Name">
            <input style={inp} value={name} onChange={e => setName(e.target.value)} placeholder="e.g. ABC Trading Co." autoFocus />
          </Field>
          <Field label="Contact Person" optional>
            <input style={inp} value={contactPerson} onChange={e => setContactPerson(e.target.value)} placeholder="e.g. Juan dela Cruz" />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <Field label="Email" optional>
              <input style={inp} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="client@email.com" />
            </Field>
            <Field label="Phone" optional>
              <input style={inp} value={phone} onChange={e => setPhone(e.target.value)} placeholder="+63 9XX XXX XXXX" />
            </Field>
          </div>
          <Field label="Address" optional>
            <textarea style={{ ...inp, resize: "vertical", minHeight: 70 }} value={address} onChange={e => setAddress(e.target.value)} placeholder="Street, City, Province, ZIP" />
          </Field>
          <Field label="TIN" optional>
            <input style={inp} value={tin} onChange={e => setTin(e.target.value)} placeholder="000-000-000-000" />
          </Field>
          <Field label="Notes" optional>
            <textarea style={{ ...inp, resize: "vertical", minHeight: 58 }} value={notes} onChange={e => setNotes(e.target.value)} placeholder="Any notes about this client…" />
          </Field>
        </div>

        {/* Panel footer */}
        <div style={{ padding: "14px 20px", borderTop: "1px solid #F1F5F9", display: "flex", gap: 8, justifyContent: "flex-end", flexShrink: 0 }}>
          <button
            onClick={closePanel}
            style={{ padding: "8px 16px", borderRadius: 7, border: "1px solid #E2E8F0", background: "#fff", fontSize: 13, color: "#334155", cursor: "pointer", fontWeight: 500 }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isPending || !name.trim()}
            className="hover:bg-[#1E40AF] active:scale-[.98] transition-all"
            style={{ padding: "8px 20px", borderRadius: 7, border: "none", background: "#1D4ED8", fontSize: 13, color: "#fff", fontWeight: 500, cursor: isPending || !name.trim() ? "not-allowed" : "pointer", opacity: isPending || !name.trim() ? 0.7 : 1 }}
          >
            {isPending ? "Saving…" : editingId ? "Save changes" : "Add client"}
          </button>
        </div>
      </div>

    </div>
  );
}
