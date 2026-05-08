import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function DocumentsPage() {
  return (
    <>
      <DashboardHeader
        title="Documents"
        action={{ label: "+ New Document", href: "/dashboard/documents/new" }}
      />
      <main className="flex-1 p-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700 mb-1">No documents yet</p>
            <p className="text-xs text-gray-400 mb-4">Pick a template and generate your first document.</p>
            <a href="/dashboard/templates" className="text-sm font-semibold text-indigo-600 hover:underline">
              Browse templates →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
