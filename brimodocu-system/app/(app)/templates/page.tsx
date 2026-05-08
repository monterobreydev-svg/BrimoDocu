import { AppNavbar } from "@/components/layout/AppNavbar";

const placeholderTemplates = [
  { type: "invoice", label: "Invoice", description: "Bill clients for services or products." },
  { type: "contract", label: "Service Contract", description: "Define scope, terms, and payment for a project." },
  { type: "report", label: "Business Report", description: "Summarize monthly or quarterly business activity." },
];

export default function TemplatesPage() {
  return (
    <>
      <AppNavbar title="Templates" />
      <main className="flex-1 p-6">
        <p className="text-sm text-gray-500 mb-6">Pick a template to start generating a document.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholderTemplates.map((t) => (
            <a
              key={t.type}
              href={`/documents/new?type=${t.type}`}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-indigo-200 hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                <svg className="w-5 h-5 text-indigo-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{t.label}</h3>
              <p className="text-xs text-gray-500">{t.description}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
