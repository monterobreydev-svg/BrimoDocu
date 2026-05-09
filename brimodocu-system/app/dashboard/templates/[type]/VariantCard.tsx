"use client";

import Link from "next/link";

type Variant = {
  id: string;
  label: string;
  desc: string;
};

export function VariantCard({
  variant,
  type,
  iconBg,
  iconColor,
}: {
  variant: Variant;
  type: string;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <Link
      href={`/dashboard/documents/new?type=${type}&variant=${variant.id}`}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        border: "1px solid #E2E8F0",
        borderRadius: 12,
        padding: "18px 18px 16px",
        textDecoration: "none",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.border = "1px solid #BFDBFE";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0 3px rgba(29,78,216,0.07)";
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.border = "1px solid #E2E8F0";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          background: iconBg,
          color: iconColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
          flexShrink: 0,
        }}
      >
        <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>

      <div style={{ fontSize: 13.5, fontWeight: 700, color: "#0F172A", marginBottom: 5 }}>
        {variant.label}
      </div>
      <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5, flex: 1 }}>
        {variant.desc}
      </div>
    </Link>
  );
}
