"use client";
import { useEffect, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const enter = (delay: number) =>
    `transition-all duration-700 ease-out ${
      loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      <div className="dot-grid absolute inset-0 opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            <div className={enter(100)} style={{ transitionDelay: "100ms" }}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                100% free for small businesses
              </span>
            </div>

            <h1
              className={`mt-6 text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 ${enter(200)}`}
              style={{ transitionDelay: "200ms" }}
            >
              Documents done<br />
              in{" "}
              <span className="text-indigo-600 underline decoration-indigo-200 decoration-4 underline-offset-4">
                seconds.
              </span>
            </h1>

            <p
              className={`mt-7 text-lg text-gray-500 leading-relaxed max-w-md ${enter(300)}`}
              style={{ transitionDelay: "300ms" }}
            >
              BrimoDocu automates invoices, contracts, and reports for small
              businesses. Fill in a form — get a professional PDF. No design
              skills needed.
            </p>

            <div
              className={`mt-10 flex flex-wrap gap-4 ${enter(400)}`}
              style={{ transitionDelay: "400ms" }}
            >
              <a
                href="/register"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all text-sm"
              >
                Start generating — free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-gray-600 font-medium px-7 py-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
              >
                How it works
              </a>
            </div>

            <div
              className={`mt-12 flex gap-8 ${enter(500)}`}
              style={{ transitionDelay: "500ms" }}
            >
              {[
                { value: "3s", label: "Avg. generation time" },
                { value: "100%", label: "Free forever" },
                { value: "3+", label: "Document types" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-extrabold text-gray-900">{value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: document mockup */}
          <div
            className={`relative transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "550ms" }}
          >
            <div className="absolute -top-3 -right-3 w-full h-full bg-gradient-to-br from-indigo-100 to-blue-100 rounded-3xl rotate-3" />

            <div className="relative bg-white rounded-3xl shadow-2xl shadow-indigo-100/60 border border-gray-100 p-8">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.2em]">Invoice</p>
                  <p className="text-2xl font-extrabold text-gray-900 mt-0.5">#INV-0042</p>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-full border border-emerald-100">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Generated
                </span>
              </div>

              <div className="h-px bg-gray-100 mb-5" />

              <div className="space-y-3 text-sm mb-5">
                {[
                  { label: "Client", value: "Acme Corp" },
                  { label: "Service", value: "Web Design" },
                  { label: "Due Date", value: "June 15, 2024" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-400">{label}</span>
                    <span className="font-semibold text-gray-700">{value}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-gray-100 mb-5" />

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Total Due</span>
                <span className="text-3xl font-extrabold text-indigo-600">$1,250</span>
              </div>

              <div className="flex gap-2 mt-6">
                <button className="flex-1 text-xs font-semibold bg-indigo-600 text-white py-2.5 rounded-xl hover:bg-indigo-700 transition-colors">
                  Download PDF
                </button>
                <button className="flex-1 text-xs font-semibold bg-gray-100 text-gray-700 py-2.5 rounded-xl hover:bg-gray-200 transition-colors">
                  Send Email
                </button>
              </div>
            </div>

            <div className="animate-float absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg border border-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              PDF Ready
            </div>
            <div className="animate-float absolute -bottom-5 right-6 bg-white rounded-2xl shadow-lg border border-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 flex items-center gap-2" style={{ animationDelay: "1s" }}>
              ⚡ Generated in 3s
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
