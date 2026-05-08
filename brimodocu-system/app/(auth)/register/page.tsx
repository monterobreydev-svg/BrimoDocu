import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GoogleIcon } from "@/components/ui/GoogleIcon";

export default function RegisterPage() {
  return (
    <div>
      {/* Header */}
      <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Start for free</h1>
      <p className="text-sm text-gray-500 mb-8">
        Create your BrimoDocu account. No credit card needed.
      </p>

      {/* Google button */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition-all"
      >
        <GoogleIcon />
        Sign up with Google
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-gray-400 font-medium">or continue with email</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* Form */}
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="First name"
            type="text"
            placeholder="Juan"
            autoComplete="given-name"
          />
          <Input
            label="Last name"
            type="text"
            placeholder="Dela Cruz"
            autoComplete="family-name"
          />
        </div>

        <Input
          label="Business name"
          type="text"
          placeholder="Dela Cruz Repairs"
          hint="Appears on your documents."
          autoComplete="organization"
        />

        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          hint="At least 8 characters."
          autoComplete="new-password"
        />

        <Button className="w-full justify-center" size="lg">
          Create account
        </Button>
      </form>

      {/* Terms */}
      <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
        By creating an account, you agree to our{" "}
        <a href="#" className="text-gray-500 hover:underline">Terms</a>{" "}
        and{" "}
        <a href="#" className="text-gray-500 hover:underline">Privacy Policy</a>.
      </p>

      {/* Footer */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-indigo-600 font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
