const benefits = [
  "Generate invoices in seconds",
  "Send documents directly to clients",
  "Contracts and reports included",
  "100% free — always",
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">

      {/* ── Left panel (desktop only) ── */}
      <div className="hidden lg:flex w-[440px] xl:w-[500px] shrink-0 bg-indigo-600 flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5" />
        <div className="absolute top-1/2 right-8 w-3 h-3 rounded-full bg-white/20" />
        <div className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full bg-white/20" />

        {/* Logo */}
        <a href="/" className="relative z-10 text-xl font-extrabold tracking-tight w-fit">
          <span className="text-white">Brimo</span>
          <span className="text-indigo-200">Docu</span>
        </a>

        {/* Pitch */}
        <div className="relative z-10">
          <p className="text-3xl font-extrabold text-white leading-tight mb-8">
            Stop typing the<br />same documents<br />over and over.
          </p>
          <ul className="space-y-4">
            {benefits.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-indigo-100">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-indigo-400 text-xs">
          © {new Date().getFullYear()} BrimoDocu
        </p>
      </div>

      {/* ── Right panel (form) ── */}
      <div className="flex-1 flex items-center justify-center bg-white p-6 py-12">
        <div className="w-full max-w-sm">

          {/* Mobile logo */}
          <div className="text-center mb-10 lg:hidden">
            <a href="/" className="text-2xl font-extrabold tracking-tight">
              <span className="text-indigo-600">Brimo</span>
              <span className="text-gray-900">Docu</span>
            </a>
          </div>

          {children}
        </div>
      </div>

    </div>
  );
}
