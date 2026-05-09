import Link from "next/link";
import { notFound } from "next/navigation";
import { VariantCard } from "./VariantCard";

type Variant = {
  id: string;
  label: string;
  desc: string;
};

type TemplateGroup = {
  label: string;
  category: string;
  iconBg: string;
  iconColor: string;
  variants: Variant[];
};

const templateData: Record<string, TemplateGroup> = {
  "invoice": {
    label: "Invoice",
    category: "Billing",
    iconBg: "#EFF6FF",
    iconColor: "#1D4ED8",
    variants: [
      { id: "classic",   label: "Classic Invoice",   desc: "Standard professional billing format with line items and due date." },
      { id: "proforma",  label: "Proforma Invoice",  desc: "Pre-payment estimate sent to clients before final invoicing." },
      { id: "vat",       label: "VAT Invoice",        desc: "Includes full itemized tax breakdown for VAT-registered businesses." },
      { id: "recurring", label: "Recurring Invoice",  desc: "For subscription or retainer clients billed on a regular schedule." },
    ],
  },
  "sales-quotation": {
    label: "Sales Quotation",
    category: "Billing",
    iconBg: "#EFF6FF",
    iconColor: "#2563EB",
    variants: [
      { id: "standard", label: "Standard Quotation", desc: "Simple price proposal with validity period and totals." },
      { id: "detailed",  label: "Detailed Quotation", desc: "Itemized breakdown with terms, conditions, and validity period." },
    ],
  },
  "billing-statement": {
    label: "Billing Statement",
    category: "Billing",
    iconBg: "#ECFDF5",
    iconColor: "#059669",
    variants: [
      { id: "monthly",  label: "Monthly Statement",  desc: "Summary of all charges and payments within a single month." },
      { id: "overdue",  label: "Overdue Statement",  desc: "Highlights outstanding balances and past-due amounts." },
    ],
  },
  "purchase-order": {
    label: "Purchase Order",
    category: "Billing",
    iconBg: "#FFF7ED",
    iconColor: "#C2410C",
    variants: [
      { id: "standard", label: "Standard PO",  desc: "Basic purchase order with item list, quantities, and pricing." },
      { id: "blanket",  label: "Blanket PO",   desc: "Open-ended PO for recurring orders with a single supplier." },
    ],
  },
  "contract": {
    label: "Service Contract",
    category: "Legal",
    iconBg: "#F5F3FF",
    iconColor: "#7C3AED",
    variants: [
      { id: "basic",    label: "Basic Contract",      desc: "Simple scope and payment terms for short engagements." },
      { id: "detailed", label: "Detailed Contract",   desc: "Full terms, deliverables, SLA clauses, and payment schedule." },
      { id: "retainer", label: "Retainer Agreement",  desc: "For ongoing monthly services billed on a retainer basis." },
    ],
  },
  "warranty": {
    label: "Warranty Certificate",
    category: "Legal",
    iconBg: "#FFFBEB",
    iconColor: "#B45309",
    variants: [
      { id: "standard",  label: "Standard Warranty",  desc: "Basic product warranty with coverage period and conditions." },
      { id: "extended",  label: "Extended Warranty",  desc: "Long-term coverage with enhanced terms and service inclusions." },
    ],
  },
  "certificate": {
    label: "Certificate of Completion",
    category: "Legal",
    iconBg: "#FDF2F8",
    iconColor: "#BE185D",
    variants: [
      { id: "project", label: "Project Completion",  desc: "Formally confirms a project has been completed and accepted." },
      { id: "service", label: "Service Completion",  desc: "Acknowledges that a specific service has been fully delivered." },
    ],
  },
  "delivery-receipt": {
    label: "Delivery Receipt",
    category: "Operations",
    iconBg: "#F0FDFA",
    iconColor: "#0F766E",
    variants: [
      { id: "standard",  label: "Standard Receipt",  desc: "Basic delivery acknowledgment with item list and signature." },
      { id: "detailed",  label: "Detailed Receipt",  desc: "Includes item condition notes, checklist, and receiver details." },
    ],
  },
  "report": {
    label: "Business Report",
    category: "Operations",
    iconBg: "#F4F6F9",
    iconColor: "#475569",
    variants: [
      { id: "monthly",   label: "Monthly Report",    desc: "Monthly performance summary with revenue and activity highlights." },
      { id: "quarterly", label: "Quarterly Report",  desc: "Quarterly business review covering key metrics and trends." },
      { id: "annual",    label: "Annual Report",     desc: "Year-end summary of business performance and financials." },
    ],
  },
};

export default async function TemplateTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const group = templateData[type];

  if (!group) notFound();

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
            style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none", fontWeight: 500 }}
          >
            Templates
          </Link>
          <svg width={13} height={13} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#CBD5E1" }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span style={{ fontSize: 13, color: "#0F172A", fontWeight: 600 }}>{group.label}</span>
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

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: "auto", padding: 22, background: "#F4F6F9" }}>

        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: group.iconBg,
                color: group.iconColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", margin: 0 }}>
              {group.label}
            </h2>
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: ".05em",
                textTransform: "uppercase",
                color: group.iconColor,
                background: group.iconBg,
                padding: "2px 8px",
                borderRadius: 99,
              }}
            >
              {group.category}
            </span>
          </div>
          <p style={{ fontSize: 13, color: "#64748B", margin: 0 }}>
            Choose a template format to start generating your document.
          </p>
        </div>

        {/* Variant cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
            gap: 12,
          }}
        >
          {group.variants.map((v) => (
            <VariantCard
              key={v.id}
              variant={v}
              type={type}
              iconBg={group.iconBg}
              iconColor={group.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

