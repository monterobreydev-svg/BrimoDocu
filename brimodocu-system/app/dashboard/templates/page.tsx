"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

const categories = ["All", "Billing", "Legal", "Operations"];

const templates = [
  // Billing
  {
    type: "invoice",
    label: "Invoice",
    desc: "Bill clients for services or products rendered.",
    category: "Billing",
    iconBg: "#EFF6FF",
    iconColor: "#1D4ED8",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    type: "sales-quotation",
    label: "Sales Quotation",
    desc: "Send price proposals with validity period.",
    category: "Billing",
    iconBg: "#EFF6FF",
    iconColor: "#2563EB",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    type: "billing-statement",
    label: "Billing Statement",
    desc: "Itemized summary of charges owed by a client.",
    category: "Billing",
    iconBg: "#ECFDF5",
    iconColor: "#059669",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    type: "purchase-order",
    label: "Purchase Order",
    desc: "Issue POs to suppliers with full item lists.",
    category: "Billing",
    iconBg: "#FFF7ED",
    iconColor: "#C2410C",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },

  // Legal
  {
    type: "contract",
    label: "Service Contract",
    desc: "Define scope, terms, and payment for a project.",
    category: "Legal",
    iconBg: "#F5F3FF",
    iconColor: "#7C3AED",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    type: "warranty",
    label: "Warranty Certificate",
    desc: "Guarantee coverage for products sold.",
    category: "Legal",
    iconBg: "#FFFBEB",
    iconColor: "#B45309",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    type: "certificate",
    label: "Certificate of Completion",
    desc: "Confirm a project or service has been delivered.",
    category: "Legal",
    iconBg: "#FDF2F8",
    iconColor: "#BE185D",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },

  // Operations
  {
    type: "delivery-receipt",
    label: "Delivery Receipt",
    desc: "Proof of delivery for shipped goods.",
    category: "Operations",
    iconBg: "#F0FDFA",
    iconColor: "#0F766E",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    type: "report",
    label: "Business Report",
    desc: "Summarize monthly or quarterly business activity.",
    category: "Operations",
    iconBg: "#F4F6F9",
    iconColor: "#475569",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function TemplatesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return templates.filter((t) => {
      const matchesCategory = activeCategory === "All" || t.category === activeCategory;
      const matchesSearch = !q || t.label.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

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
        <span style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>Templates</span>
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

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: "auto", padding: 22, background: "#F4F6F9" }}>

        <p style={{ fontSize: 13, color: "#64748B", marginBottom: 20 }}>
          Select a document type to browse its available templates.
        </p>

        {/* Search + Category row */}
        <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>

          {/* Search bar */}
          <div style={{ position: "relative", flex: "1 1 220px", minWidth: 180 }}>
            <svg
              width={15} height={15} fill="none" stroke="currentColor" viewBox="0 0 24 24"
              style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#94A3B8", pointerEvents: "none" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
            <input
              type="text"
              placeholder="Search templates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                paddingLeft: 34,
                paddingRight: 12,
                paddingTop: 8,
                paddingBottom: 8,
                fontSize: 13,
                border: "1px solid #E2E8F0",
                borderRadius: 8,
                background: "#fff",
                color: "#0F172A",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Category pills */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 7,
                    fontSize: 12.5,
                    fontWeight: 500,
                    cursor: "pointer",
                    border: active ? "1px solid #1D4ED8" : "1px solid #E2E8F0",
                    background: active ? "#1D4ED8" : "#fff",
                    color: active ? "#fff" : "#475569",
                    transition: "all 0.15s",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Count label */}
        <div style={{ fontSize: 11.5, color: "#94A3B8", marginBottom: 12 }}>
          {filtered.length} template{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          {search ? ` matching "${search}"` : ""}
        </div>

        {/* Template grid */}
        {filtered.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
              gap: 12,
            }}
          >
            {filtered.map((t) => (
              <TemplateCard key={t.type} template={t} />
            ))}
          </div>
        ) : (
          <div
            style={{
              background: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: 10,
              padding: "48px 24px",
              textAlign: "center",
            }}
          >
            <svg width={32} height={32} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#E2E8F0", margin: "0 auto 10px" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
            <p style={{ fontSize: 13, fontWeight: 500, color: "#64748B", marginBottom: 4 }}>No templates found</p>
            <p style={{ fontSize: 12, color: "#94A3B8" }}>Try a different keyword or category.</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              style={{
                marginTop: 14,
                padding: "7px 16px",
                fontSize: 12.5,
                fontWeight: 500,
                border: "1px solid #E2E8F0",
                borderRadius: 7,
                background: "#fff",
                color: "#475569",
                cursor: "pointer",
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function TemplateCard({ template }: { template: typeof templates[number] }) {
  return (
    <Link
      href={`/dashboard/templates/${template.type}`}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        border: "1px solid #E2E8F0",
        borderRadius: 12,
        padding: "18px 18px 16px",
        textDecoration: "none",
        transition: "all 0.15s",
        position: "relative",
        overflow: "hidden",
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
      {/* Category badge */}
      <span
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: ".04em",
          textTransform: "uppercase",
          color: template.iconColor,
          background: template.iconBg,
          padding: "2px 7px",
          borderRadius: 99,
        }}
      >
        {template.category}
      </span>

      {/* Icon */}
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          background: template.iconBg,
          color: template.iconColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
          flexShrink: 0,
        }}
      >
        {template.icon}
      </div>

      {/* Text */}
      <div style={{ fontSize: 13.5, fontWeight: 700, color: "#0F172A", marginBottom: 5 }}>
        {template.label}
      </div>
      <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5, flex: 1 }}>
        {template.desc}
      </div>

    </Link>
  );
}
