import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { ClientsView } from "./ClientsView";

export default async function ClientsPage() {
  const session = await auth();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clients = session?.user?.id
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? await (db as any).client.findMany({
        where:   { userId: session.user.id },
        orderBy: { createdAt: "desc" },
        select: {
          id: true, name: true, email: true, phone: true,
          address: true, tin: true, contactPerson: true,
          notes: true, createdAt: true,
        },
      })
    : [];

  return <ClientsView initialClients={clients} />;
}
