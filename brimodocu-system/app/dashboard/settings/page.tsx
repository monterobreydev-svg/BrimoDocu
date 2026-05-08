import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { SettingsForm } from "./SettingsForm";

export default async function SettingsPage() {
  const session = await auth();

  let profile = null;
  let businessName: string | null = null;

  if (session?.user?.id) {
    const [dbUser, bp] = await Promise.all([
      db.user.findUnique({
        where:  { id: session.user.id },
        select: { businessName: true },
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (db as any).businessProfile.findUnique({ where: { userId: session.user.id } }),
    ]);
    profile      = bp ?? null;
    businessName = dbUser?.businessName ?? null;
  }

  return (
    <>
      <DashboardHeader title="Settings" />
      <main className="flex-1 overflow-y-auto" style={{ padding: 22, background: "#F4F6F9" }}>
        <SettingsForm profile={profile} businessName={businessName} />
      </main>
    </>
  );
}
