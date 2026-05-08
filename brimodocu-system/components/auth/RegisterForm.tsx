"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { GoogleIcon } from "@/components/ui/GoogleIcon";
import { registerUser } from "@/app/actions/auth";

export function RegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function field(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await registerUser(form);

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    // Auto sign-in after successful registration
    await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    router.push("/dashboard");
  }

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Start for free</h1>
      <p className="text-sm text-gray-500 mb-8">
        Create your BrimoDocu account. No credit card needed.
      </p>

      {/* Google */}
      <button
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
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
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <Input
            label="First name"
            type="text"
            value={form.firstName}
            onChange={field("firstName")}
            placeholder="Juan"
            autoComplete="given-name"
            required
          />
          <Input
            label="Last name"
            type="text"
            value={form.lastName}
            onChange={field("lastName")}
            placeholder="Dela Cruz"
            autoComplete="family-name"
            required
          />
        </div>

        <Input
          label="Business name"
          type="text"
          value={form.businessName}
          onChange={field("businessName")}
          placeholder="Dela Cruz Repairs"
          hint="Appears on your documents."
          autoComplete="organization"
          required
        />

        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={field("email")}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />

        <Input
          label="Password"
          type="password"
          value={form.password}
          onChange={field("password")}
          placeholder="••••••••"
          hint="At least 8 characters."
          autoComplete="new-password"
          required
          minLength={8}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Creating account…" : "Create account"}
        </button>
      </form>

      <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
        By creating an account, you agree to our{" "}
        <a href="#" className="text-gray-500 hover:underline">Terms</a>{" "}
        and{" "}
        <a href="#" className="text-gray-500 hover:underline">Privacy Policy</a>.
      </p>

      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-indigo-600 font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
