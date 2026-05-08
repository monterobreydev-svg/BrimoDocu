export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-lg font-extrabold tracking-tight">
          <span className="text-indigo-500">Brimo</span>
          <span className="text-gray-400">Docu</span>
        </span>

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} BrimoDocu. Built for small businesses.
        </p>

        <nav className="flex gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
