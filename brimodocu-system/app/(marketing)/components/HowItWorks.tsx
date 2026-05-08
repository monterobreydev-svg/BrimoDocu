import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Pick a template",
    description: "Browse the library and select the document type you need — invoice, contract, or report.",
    detail: "Takes 10 seconds.",
  },
  {
    number: "02",
    title: "Fill in the details",
    description: "Answer a few plain-English fields: client name, amounts, dates. No formatting or design work.",
    detail: "Takes 2 minutes.",
  },
  {
    number: "03",
    title: "Export and send",
    description: "Download a polished PDF or send it directly to your client's inbox with one click.",
    detail: "Takes 5 seconds.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        <AnimateOnScroll className="max-w-xl mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">How It Works</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            From blank to sent<br />in under 3 minutes.
          </h2>
        </AnimateOnScroll>

        <div className="relative">
          <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-px bg-gray-100" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 120} direction="left">
                <div className="flex items-start gap-8 md:gap-12">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-indigo-50 border border-indigo-100 flex flex-col items-center justify-center">
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Step</span>
                      <span className="text-2xl font-extrabold text-indigo-600 leading-none">{step.number}</span>
                    </div>
                  </div>

                  <div className="pt-3 flex-1 border-b border-gray-100 pb-12 last:border-none last:pb-0">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <p className="mt-2 text-gray-500 leading-relaxed max-w-lg">{step.description}</p>
                      </div>
                      <span className="flex-shrink-0 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full whitespace-nowrap">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
