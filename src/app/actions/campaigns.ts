"use server";

import prisma from "@/lib/prisma";
import { $Enums } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createCampaign(data: {
  userId: string;
  whatsappAccountId: string;
  templateId: string;
  name: string;
  description?: string;
  scheduledAt?: Date;
  batchSize?: number;
  delayInSeconds?: number;
  leadIds: string[];
}) {
  try {
    const campaign = await prisma.campaign.create({
      data: {
        userId: data.userId,
        whatsappAccountId: data.whatsappAccountId,
        templateId: data.templateId,
        name: data.name,
        description: data.description,
        scheduledAt: data.scheduledAt,
        status: data.scheduledAt ? $Enums.CampaignStatus.SCHEDULED : $Enums.CampaignStatus.DRAFT,
        batchSize: data.batchSize ?? 20,
        delayInSeconds: data.delayInSeconds ?? 1,
        totalRecipients: data.leadIds.length,
        campaignLeads: {
          create: data.leadIds.map(leadId => ({
            leadId,
          }))
        }
      }
    });

    revalidatePath("/dashboard/campaigns");
    return { success: true, campaignId: campaign.id };
  } catch (error) {
    console.error("Failed to create campaign:", error);
    return { success: false, error: "Failed to create campaign" };
  }
}

export async function launchCampaign(campaignId: string) {
  try {
    const campaign = await prisma.campaign.update({
      where: { id: campaignId },
      data: { status: $Enums.CampaignStatus.RUNNING, startedAt: new Date() }
    });

    // In a real app, this would trigger a background worker or edge function
    // For this implementation, we will simulate the queueing of messages
    const leads = await prisma.campaignLead.findMany({
      where: { campaignId },
      include: { lead: true }
    });

    for (const leadItem of leads) {
      // Create outbound message record (idempotency: campaignId + leadId + direction)
      await prisma.message.upsert({
        where: {
          campaignId_leadId_direction: {
            campaignId,
            leadId: leadItem.leadId,
            direction: $Enums.MessageDirection.OUTBOUND
          }
        },
        update: {}, // Don't overwrite if exists
        create: {
          userId: campaign.userId,
          whatsappAccountId: campaign.whatsappAccountId,
          campaignId,
          leadId: leadItem.leadId,
          campaignLeadId: leadItem.id,
          direction: $Enums.MessageDirection.OUTBOUND,
          status: $Enums.MessageStatus.QUEUED,
          queuedAt: new Date(),
        }
      });
    }

    revalidatePath("/dashboard/campaigns");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Failed to launch campaign:", error);
    return { success: false, error: "Failed to launch campaign" };
  }
}
