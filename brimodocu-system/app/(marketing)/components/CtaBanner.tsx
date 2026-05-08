import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function CtaBanner() {
  return (
    <section className="bg-gray-950 py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-transparent to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <AnimateOnScroll direction="up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 bg-indigo-950 border border-indigo-900 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
            Ready to start?
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Stop spending hours<br />on paperwork.
          </h2>
          <p className="mt-5 text-gray-400 text-lg">
            Join small businesses already using BrimoDocu to generate documents in seconds, not hours.
          </p>
          <a
            href="/register"
            className="mt-10 inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-900 transition-all text-base"
          >
            Create your first document — free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-4 text-xs text-gray-600">No credit card required. No time limit.</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
