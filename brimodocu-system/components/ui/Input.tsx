interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Input({ label, error, hint, className = "", id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        {...props}
        className={`px-4 py-2.5 rounded-xl border text-sm bg-white transition-colors
          placeholder:text-gray-400
          focus:outline-none focus:ring-2
          ${error
            ? "border-red-300 focus:ring-red-100 focus:border-red-400"
            : "border-gray-200 focus:ring-indigo-100 focus:border-indigo-400"
          } ${className}`}
      />
      {hint && !error && <p className="text-xs text-gray-400">{hint}</p>}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
