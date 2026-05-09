import Link from "next/link";

type Props = {
  label: string;
  category: string;
  iconBg: string;
  iconColor: string;
};

export function TemplateTypeLayout({ label, category, iconBg, iconColor }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>

      {/* Topbar */}
      <div
        style={{
          height: 52,
          padding: "0 20px",
          background: "#fff",
          borderBottom: "1px solid #E2E8F0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Link
            href="/dashboard/templates"
            style={{ fontSize: 13, color: "#94A3B8", fontWeight: 500, textDecoration: "none" }}
          >
            Templates
          </Link>
          <svg width={13} height={13} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#CBD5E1" }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span style={{ fontSize: 13, color: "#0F172A", fontWeight: 600 }}>{label}</span>
        </div>

        <Link
          href="/dashboard/documents/new"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            background: "#1D4ED8",
            color: "#fff",
            padding: "7px 13px",
            borderRadius: 7,
            fontSize: 12.5,
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          <svg width={13} height={13} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          New document
        </Link>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: 22, background: "#F4F6F9" }}>

        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: iconBg,
                color: iconColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", margin: 0 }}>{label}</h2>
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: ".05em",
                textTransform: "uppercase",
                color: iconColor,
                background: iconBg,
                padding: "2px 8px",
                borderRadius: 99,
              }}
            >
              {category}
            </span>
          </div>
          <p style={{ fontSize: 13, color: "#64748B", margin: 0, paddingLeft: 40 }}>
            Templates for this document type will appear here.
          </p>
        </div>

        {/* Empty state */}
        <div
          style={{
            background: "#fff",
            border: "1px dashed #E2E8F0",
            borderRadius: 12,
            padding: "48px 24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 11,
              background: iconBg,
              color: iconColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 12px",
            }}
          >
            <svg width={22} height={22} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#64748B", margin: "0 0 4px" }}>
            No templates yet
          </p>
          <p style={{ fontSize: 12, color: "#94A3B8", margin: 0 }}>
            {label} templates will be available here soon.
          </p>
        </div>
      </div>
    </div>
  );
}
