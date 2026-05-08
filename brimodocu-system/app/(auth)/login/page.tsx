import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GoogleIcon } from "@/components/ui/GoogleIcon";

export default function LoginPage() {
  return (
    <div>
      {/* Header */}
      <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Welcome back</h1>
      <p className="text-sm text-gray-500 mb-8">Sign in to your BrimoDocu account</p>

      {/* Google button */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition-all"
      >
        <GoogleIcon />
        Continue with Google
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-gray-400 font-medium">or continue with email</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* Email form */}
      <form className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />

        <div className="space-y-1.5">
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <div className="flex justify-end">
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:underline"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <Button className="w-full justify-center" size="lg">
          Sign in
        </Button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-500 mt-7">
        No account?{" "}
        <Link href="/register" className="text-indigo-600 font-semibold hover:underline">
          Create one free
        </Link>
      </p>
    </div>
  );
}
