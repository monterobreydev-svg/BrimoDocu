import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default async function DocumentPage(props: PageProps<"/dashboard/documents/[id]">) {
  const { id } = await props.params;

  return (
    <>
      <DashboardHeader title={`Document #${id}`} />
      <main className="flex-1 p-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Document Editor</p>
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">Document #{id}</h2>
          <p className="text-sm text-gray-400">
            TODO: load document fields, render editable form, preview panel, PDF export.
          </p>
        </div>
      </main>
    </>
  );
}
