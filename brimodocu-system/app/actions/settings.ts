"use server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveBusinessProfile(data: {
  companyName: string;
  businessAddress: string;
  tin: string;
  email: string;
  contactNumber: string;
  logoData?: string;
  brandColor: string;
  taxType: string;
  customTaxRate?: number;
  defaultNote: string;
}) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const payload = {
    companyName:     data.companyName     || null,
    businessAddress: data.businessAddress || null,
    tin:             data.tin             || null,
    email:           data.email           || null,
    contactNumber:   data.contactNumber   || null,
    logoData:        data.logoData        ?? null,
    brandColor:      data.brandColor,
    taxType:         data.taxType,
    customTaxRate:   data.taxType === "CUSTOM" ? (data.customTaxRate ?? null) : null,
    defaultNote:     data.defaultNote     || null,
  };

  await db.businessProfile.upsert({
    where:  { userId: session.user.id },
    create: { userId: session.user.id, ...payload },
    update: payload,
  });

  revalidatePath("/dashboard/settings");
}
