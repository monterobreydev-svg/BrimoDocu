import Link from "next/link";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  action?: { label: string; href: string };
}

export function DashboardHeader({ title, description, action }: DashboardHeaderProps) {
  return (
    <div
      className="flex items-center justify-between flex-shrink-0"
      style={{ height: 52, padding: "0 20px", background: "#fff", borderBottom: "1px solid #E2E8F0" }}
    >
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>{title}</div>
        {description && <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 1 }}>{description}</div>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="flex items-center gap-[5px] hover:bg-[#1E40AF] active:scale-[.98] transition-all"
          style={{ background: "#1D4ED8", color: "#fff", padding: "7px 13px", borderRadius: 7, fontSize: 12.5, fontWeight: 500, textDecoration: "none" }}
        >
          <svg style={{ width: 13, height: 13 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          {action.label}
        </Link>
      )}
    </div>
  );
}
