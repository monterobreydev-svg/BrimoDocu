"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainNav = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: (
      <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    href: "/dashboard/documents",
    label: "Documents",
    icon: (
      <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    href: "/dashboard/templates",
    label: "Templates",
    icon: (
      <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const quickCreate = [
  { label: "Invoice",          badge: "INV", href: "/dashboard/templates" },
  { label: "Service Contract", badge: "SC",  href: "/dashboard/templates" },
  { label: "Business Report",  badge: "RPT", href: "/dashboard/templates" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="flex flex-col flex-shrink-0 h-screen sticky top-0 overflow-hidden"
      style={{ width: 224, background: "#fff", borderRight: "1px solid #E2E8F0" }}
    >
      {/* Head */}
      <div style={{ padding: "15px 14px 11px", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ fontSize: 13.5, fontWeight: 600, color: "#0F172A" }}>BrimoDocu</div>
        <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 1 }}>Document automation</div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto" style={{ padding: "10px 8px" }}>

        {/* Main */}
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: ".08em", padding: "0 7px", marginBottom: 5 }}>
            Main
          </div>
          {mainNav.map((item) => {
            const active = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 transition-all"
                style={{
                  padding: "7px 9px",
                  borderRadius: 7,
                  fontSize: 12.5,
                  fontWeight: active ? 500 : 400,
                  color: active ? "#1D4ED8" : "#334155",
                  background: active ? "#EFF6FF" : "transparent",
                  textDecoration: "none",
                  marginBottom: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                <span style={{ opacity: active ? 1 : 0.7, flexShrink: 0 }}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Quick Create */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: ".08em", padding: "0 7px", marginBottom: 5 }}>
            Quick Create
          </div>
          {quickCreate.map((item) => (
            <Link
              key={item.badge}
              href={item.href}
              className="flex items-center transition-all hover:bg-[#F4F6F9] hover:text-[#0F172A]"
              style={{
                padding: "7px 9px",
                borderRadius: 7,
                fontSize: 12.5,
                color: "#334155",
                textDecoration: "none",
                marginBottom: 1,
              }}
            >
              <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden" }}>{item.label}</span>
              <span style={{ marginLeft: "auto", background: "#F1F5F9", color: "#94A3B8", fontSize: 10, padding: "1px 7px", borderRadius: 20, flexShrink: 0 }}>
                {item.badge}
              </span>
            </Link>
          ))}
        </div>

      </div>

      {/* Footer */}
      <div style={{ padding: "10px 8px", borderTop: "1px solid #F1F5F9" }}>
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-2 transition-all hover:bg-[#F4F6F9]"
          style={{ padding: "7px 9px", borderRadius: 7, fontSize: 12.5, color: "#334155", textDecoration: "none", marginBottom: 2 }}
        >
          <svg style={{ width: 14, height: 14, opacity: 0.7, flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Settings
        </Link>

        <div className="flex items-center cursor-pointer hover:bg-[#F4F6F9] transition-all" style={{ gap: 9, padding: "7px 9px", borderRadius: 7 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 600, color: "#fff", flexShrink: 0 }}>
            B
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Your Business</div>
            <div style={{ fontSize: 11, color: "#94A3B8" }}>Free Plan</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
