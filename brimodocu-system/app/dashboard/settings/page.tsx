import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function SettingsPage() {
  return (
    <>
      <DashboardHeader title="Settings" />
      <main className="flex-1 p-6">
        <div className="max-w-lg space-y-6">

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-sm font-bold text-gray-900 mb-5">Business Details</h2>
            <form className="space-y-4">
              <Input label="Business name" type="text" placeholder="Your Business Name" />
              <Input label="Email" type="email" placeholder="you@example.com" />
              <Input label="Phone" type="tel" placeholder="+63 912 345 6789" />
              <Input label="Address" type="text" placeholder="123 Main St, City" />
              <Button type="submit" size="sm">Save changes</Button>
            </form>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-sm font-bold text-gray-900 mb-5">Account</h2>
            <form className="space-y-4">
              <Input label="Your name" type="text" placeholder="Your Name" />
              <Input label="New password" type="password" placeholder="Leave blank to keep current" />
              <Button type="submit" size="sm">Update account</Button>
            </form>
          </div>

        </div>
      </main>
    </>
  );
}
