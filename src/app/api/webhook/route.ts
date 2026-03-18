import { NextRequest, NextResponse } from "next/server"; 
import prisma from "@/lib/prisma";
import { $Enums } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate WhatsApp signature / verify token (mocked)
    
    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0];
    const value = changes?.value;
    
    // Handle Status Updates (Sent, Delivered, Read, Failed)
    if (value?.statuses?.[0]) {
      const statusUpdate = value.statuses[0];
      const messageId = statusUpdate.id;
      const status = statusUpdate.status; // delivered, read, failed...
      
      const mappedStatus: $Enums.MessageStatus = 
        status === "delivered" ? $Enums.MessageStatus.DELIVERED :
        status === "read" ? $Enums.MessageStatus.READ :
        status === "failed" ? $Enums.MessageStatus.FAILED : $Enums.MessageStatus.SENT;

      const message = await prisma.message.update({
        where: { whatsappMessageId: messageId },
        data: { 
          status: mappedStatus,
          deliveredAt: status === "delivered" ? new Date() : undefined,
          readAt: status === "read" ? new Date() : undefined,
          failureReason: status === "failed" ? statusUpdate.errors?.[0]?.message : undefined
        }
      });

      // Log event
      await prisma.messageEvent.create({
        data: {
          messageId: message.id,
          eventType: mappedStatus === $Enums.MessageStatus.READ ? $Enums.EventType.MESSAGE_READ : $Enums.EventType.MESSAGE_DELIVERED,
          occurredAt: new Date(),
          eventPayloadJson: statusUpdate
        }
      });
    }

    // Handle Incoming Messages (Replies / Unsubscribe)
    if (value?.messages?.[0]) {
      const incoming = value.messages[0];
      const from = incoming.from;
      const text = incoming.text?.body;
      
      // Look up lead
      const lead = await prisma.lead.findFirst({
        where: { phoneNumber: `+${from}` }
      });

      if (lead) {
        // Create conversation message
        await prisma.conversationMessage.create({
          data: {
            conversationId: "placeholder", // In reality, find or create conversation
            leadId: lead.id,
            direction: $Enums.MessageDirection.INBOUND,
            body: text || "",
            whatsappMessageId: incoming.id,
            receivedAt: new Date()
          }
        });

        // Unsubscribe Detection
        const unsubscribeKeywords = ["STOP", "UNSUBSCRIBE", "CANCEL", "END", "QUIT"];
        if (text && unsubscribeKeywords.includes(text.toUpperCase().trim())) {
          await prisma.lead.update({
            where: { id: lead.id },
            data: { 
              unsubscribed: true, 
              unsubscribedAt: new Date(),
              status: $Enums.LeadStatus.UNSUBSCRIBED
            }
          });
          
          await prisma.activityLog.create({
            data: {
              userId: lead.userId,
              leadId: lead.id,
              eventType: $Enums.EventType.LEAD_UNSUBSCRIBED,
              description: "Lead unsubscribed via keyword"
            }
          });
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // Hub Verification for WhatsApp
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }
  
  return new NextResponse("Forbidden", { status: 403 });
}
