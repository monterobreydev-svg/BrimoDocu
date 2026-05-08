import Link from "next/link";

const stats = [
  { label: "Total Documents", value: "0",  sub: "generated" },
  { label: "Templates",       value: "3",  sub: "ready to use" },
  { label: "Clients",         value: "0",  sub: "in directory" },
];

const quickCreate = [
  {
    label: "Sales Quotation",
    desc: "Send price proposals with validity period.",
    href: "/dashboard/templates",
    iconBg: "#EFF6FF",
    iconColor: "#1D4ED8",
    icon: (
      <svg style={{ width: 19, height: 19 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    label: "Billing Statement",
    desc: "Itemized summary of charges owed.",
    href: "/dashboard/templates",
    iconBg: "#ECFDF5",
    iconColor: "#059669",
    icon: (
      <svg style={{ width: 19, height: 19 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: "Purchase Order",
    desc: "Issue POs to suppliers with item lists.",
    href: "/dashboard/templates",
    iconBg: "#FFF7ED",
    iconColor: "#C2410C",
    icon: (
      <svg style={{ width: 19, height: 19 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    label: "Warranty Certificate",
    desc: "Guarantee coverage for products sold.",
    href: "/dashboard/templates",
    iconBg: "#FFFBEB",
    iconColor: "#B45309",
    icon: (
      <svg style={{ width: 19, height: 19 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Certificate of Completion",
    desc: "Confirm project or service is delivered.",
    href: "/dashboard/templates",
    iconBg: "#F5F3FF",
    iconColor: "#7C3AED",
    icon: (
      <svg style={{ width: 19, height: 19 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    label: "Delivery Receipt",
    desc: "Proof of delivery for shipped goods.",
    href: "/dashboard/templates",
    iconBg: "#F0FDFA",
    iconColor: "#0F766E",
    icon: (
      <svg style={{ width: 19, height: 19 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">

      {/* Topbar */}
      <div
        className="flex items-center justify-between flex-shrink-0"
        style={{ height: 52, padding: "0 20px", background: "#fff", borderBottom: "1px solid #E2E8F0" }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>Dashboard</span>
        <Link
          href="/dashboard/templates"
          className="flex items-center gap-[5px] hover:bg-[#1E40AF] active:scale-[.98] transition-all"
          style={{ background: "#1D4ED8", color: "#fff", padding: "7px 13px", borderRadius: 7, fontSize: 12.5, fontWeight: 500, textDecoration: "none" }}
        >
          <svg style={{ width: 13, height: 13 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          New document
        </Link>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto" style={{ padding: 22, background: "#F4F6F9" }}>

        {/* Stat grid */}
        <div className="grid grid-cols-3 gap-[11px]" style={{ marginBottom: 18 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 8, padding: "14px 16px" }}>
              <div style={{ fontSize: 10.5, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 5 }}>
                {s.label}
              </div>
              <div style={{ fontSize: 22, fontWeight: 600, color: "#0F172A", letterSpacing: "-.02em" }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "#64748B", marginTop: 3 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Quick create header */}
        <div className="flex items-center justify-between" style={{ marginBottom: 11 }}>
          <span style={{ fontSize: 13.5, fontWeight: 600, color: "#0F172A" }}>Quick create</span>
          <Link
            href="/dashboard/templates"
            className="hover:bg-[#F4F6F9] hover:text-[#0F172A] transition-colors"
            style={{ background: "transparent", color: "#334155", border: "1px solid #E2E8F0", padding: "5px 11px", borderRadius: 7, fontSize: 12, fontWeight: 500, textDecoration: "none" }}
          >
            Manage templates →
          </Link>
        </div>

        {/* Template grid — rectangular horizontal cards */}
        <div
          className="grid gap-[11px]"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", marginBottom: 18 }}
        >
          {quickCreate.map((q) => (
            <Link
              key={q.label}
              href={q.href}
              className="flex items-center gap-[13px] hover:border-[#BFDBFE] hover:shadow-[0_0_0_3px_rgba(29,78,216,0.07)] transition-all"
              style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10, padding: "13px 15px", textDecoration: "none" }}
            >
              <div style={{ width: 38, height: 38, borderRadius: 9, background: q.iconBg, color: q.iconColor, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {q.icon}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#0F172A", marginBottom: 2 }}>{q.label}</div>
                <div style={{ fontSize: 11.5, color: "#64748B", lineHeight: 1.4 }}>{q.desc}</div>
              </div>
            </Link>
          ))}

          {/* New template */}
          <Link
            href="/dashboard/templates"
            className="flex items-center justify-center gap-[10px] hover:border-[#1D4ED8] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] transition-all"
            style={{ background: "#F4F6F9", border: "1px dashed #CBD5E1", borderRadius: 10, padding: "13px 15px", color: "#94A3B8", textDecoration: "none" }}
          >
            <svg style={{ width: 18, height: 18 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>New template</div>
              <div style={{ fontSize: 11.5 }}>Any document type</div>
            </div>
          </Link>
        </div>

        {/* Recent documents */}
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10, overflow: "hidden" }}>

          {/* Card head */}
          <div className="flex items-center justify-between" style={{ padding: "13px 17px", borderBottom: "1px solid #F1F5F9" }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>Recent documents</span>
            <Link
              href="/dashboard/documents"
              className="hover:bg-[#F4F6F9] hover:text-[#0F172A] transition-colors"
              style={{ background: "transparent", color: "#334155", border: "1px solid #E2E8F0", padding: "5px 11px", borderRadius: 7, fontSize: 12, fontWeight: 500, textDecoration: "none" }}
            >
              View all
            </Link>
          </div>

          {/* Table */}
          <table className="w-full" style={{ borderCollapse: "collapse", fontSize: 12.5 }}>
            <thead>
              <tr>
                {["Document", "Client", "Template", "Date"].map((col) => (
                  <th
                    key={col}
                    style={{ fontSize: 10.5, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: ".05em", padding: "8px 14px", background: "#F4F6F9", borderBottom: "1px solid #E2E8F0", textAlign: "left" }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} style={{ padding: "48px 14px", textAlign: "center" }}>
                  <div className="flex flex-col items-center gap-[6px]">
                    <svg style={{ width: 28, height: 28, color: "#E2E8F0" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span style={{ fontSize: 12.5, fontWeight: 500, color: "#64748B" }}>No documents yet</span>
                    <span style={{ fontSize: 11.5, color: "#94A3B8" }}>Create your first document using a template above.</span>
                    <Link href="/dashboard/templates" className="hover:underline" style={{ fontSize: 12, fontWeight: 600, color: "#1D4ED8", marginTop: 4, textDecoration: "none" }}>
                      Get started →
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
