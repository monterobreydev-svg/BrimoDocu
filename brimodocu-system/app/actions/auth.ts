"use server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/prisma";

interface RegisterData {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  password: string;
}

export async function registerUser(data: RegisterData) {
  const existing = await db.user.findUnique({ where: { email: data.email } });

  if (existing) {
    return { error: "An account with this email already exists." };
  }

  if (data.password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }

  const hashedPassword = await bcrypt.hash(data.password, 12);

  await db.user.create({
    data: {
      name: `${data.firstName} ${data.lastName}`.trim(),
      email: data.email,
      password: hashedPassword,
      businessName: data.businessName || null,
    },
  });

  return { success: true };
}
