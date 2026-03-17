"use server";

import prisma from "@/lib/prisma";
import { LeadStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function importLeads(userId: string, leads: any[]) {
  try {
    const results = await Promise.all(leads.map(async (lead) => {
      // Normalize phone number (simple mock of E.164)
      const phone = lead.phone.replace(/\D/g, "");
      const normalizedPhone = `+${phone}`;

      return await prisma.lead.upsert({
        where: {
          userId_phoneNumber: {
            userId,
            phoneNumber: normalizedPhone
          }
        },
        update: {
          firstName: lead.firstName || undefined,
          lastName: lead.lastName || undefined,
          email: lead.email || undefined,
          source: lead.source || undefined,
          status: LeadStatus.NEW,
        },
        create: {
          userId,
          phoneNumber: normalizedPhone,
          firstName: lead.firstName,
          lastName: lead.lastName,
          email: lead.email,
          source: lead.source,
          status: LeadStatus.NEW,
        }
      });
    }));

    revalidatePath("/dashboard/leads");
    return { success: true, count: results.length };
  } catch (error) {
    console.error("Failed to import leads:", error);
    return { success: false, error: "Failed to import leads" };
  }
}
