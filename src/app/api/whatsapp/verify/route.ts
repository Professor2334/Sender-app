import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionUserId } from "@/lib/session";

export async function POST(req: NextRequest) {
  try {
    // --- Authenticate request ---
    const userId = await getSessionUserId();
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized. Please log in and try again." },
        { status: 401 }
      );
    }

    const { phoneNumberId, accessToken } = await req.json();

    if (!phoneNumberId || !accessToken) {
      return NextResponse.json(
        { error: "Phone Number ID and Access Token are required." },
        { status: 400 }
      );
    }

    // --- Bypass strict verification against Meta Graph API for development ---
    /* 
    const graphUrl = `https://graph.facebook.com/v21.0/${phoneNumberId}?fields=display_phone_number,verified_name,quality_rating,status&access_token=${accessToken}`;

    let graphData: Record<string, unknown>;
    try {
      const graphRes = await fetch(graphUrl, { method: "GET" });
      graphData = await graphRes.json() as Record<string, unknown>;

      if (!graphRes.ok || (graphData as { error?: unknown }).error) {
        ...
      }
    } catch {
      ...
    }
    */

    // Simulated successful Meta response
    const displayPhoneNumber = "Development Phone Line";
    const accountName = "Mocked WhatsApp Account";

    // --- Upsert WhatsApp Account in DB ---
    await prisma.whatsAppAccount.upsert({
      where: { phoneNumberId },
      create: {
        userId,
        phoneNumberId,
        businessAccountId: "MOCK_BIZ_ID", 
        accessTokenEncrypted: accessToken,
        webhookVerifyTokenEncrypted: "MOCK_VERIFY_TOKEN",
        displayPhoneNumber,
        accountName,
        isActive: true,
      },
      update: {
        accessTokenEncrypted: accessToken,
        displayPhoneNumber,
        accountName,
        isActive: true,
      },
    });

    return NextResponse.json(
      { success: true, displayPhoneNumber, accountName },
      { status: 200 }
    );
  } catch (err) {
    console.error("[WHATSAPP VERIFY ERROR]", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
