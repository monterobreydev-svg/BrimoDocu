"use server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type ClientData = {
  name:           string;
  email?:         string;
  phone?:         string;
  address?:       string;
  tin?:           string;
  contactPerson?: string;
  notes?:         string;
};

function sanitize(d: ClientData) {
  return {
    name:          d.name.trim(),
    email:         d.email?.trim()         || null,
    phone:         d.phone?.trim()         || null,
    address:       d.address?.trim()       || null,
    tin:           d.tin?.trim()           || null,
    contactPerson: d.contactPerson?.trim() || null,
    notes:         d.notes?.trim()         || null,
  };
}

export async function createClient(data: ClientData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (db as any).client.create({
    data: { userId: session.user.id, ...sanitize(data) },
  });
  revalidatePath("/dashboard/clients");
}

export async function updateClient(id: string, data: ClientData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (db as any).client.updateMany({
    where: { id, userId: session.user.id },
    data:  sanitize(data),
  });
  revalidatePath("/dashboard/clients");
}

export async function deleteClient(id: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (db as any).client.deleteMany({
    where: { id, userId: session.user.id },
  });
  revalidatePath("/dashboard/clients");
}
