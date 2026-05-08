import { DashboardHeader } from "@/components/layout/DashboardHeader";

const stats = [
  { label: "Documents this month", value: "0" },
  { label: "Templates used", value: "0" },
  { label: "Emails sent", value: "0" },
];

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader
        title="Dashboard"
        action={{ label: "+ New Document", href: "/dashboard/documents" }}
      />
      <main className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5">
              <p className="text-xs text-gray-400 mb-1">{s.label}</p>
              <p className="text-3xl font-extrabold text-gray-900">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-sm font-bold text-gray-900 mb-4">Recent Documents</h2>
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700 mb-1">No documents yet</p>
            <p className="text-xs text-gray-400 mb-4">Generate your first invoice, contract, or report.</p>
            <a href="/dashboard/documents" className="text-sm font-semibold text-indigo-600 hover:underline">
              Create your first document →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
