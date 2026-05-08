import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function FreeBanner() {
  return (
    <section className="bg-indigo-600 py-24 overflow-hidden relative">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />
      <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-white/20" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-white/20" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <AnimateOnScroll direction="left">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-4">Pricing</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              BrimoDocu is<br />
              <span className="text-indigo-200">free.</span><br />
              Always.
            </h2>
            <p className="mt-5 text-indigo-200 text-lg leading-relaxed max-w-sm">
              No subscription. No credit card. No hidden fees. Small businesses deserve great tools without the price tag.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={100}>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-7 backdrop-blur-sm">
              <p className="text-white font-bold text-sm mb-5">Everything included, free:</p>
              <ul className="space-y-3">
                {[
                  "Unlimited document generation",
                  "All template types",
                  "PDF & email delivery",
                  "Business branding on docs",
                  "Secure storage",
                  "No ads, ever",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-indigo-100">
                    <svg className="w-4 h-4 text-indigo-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/register"
                className="mt-7 block text-center bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm"
              >
                Create your account — free
              </a>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
