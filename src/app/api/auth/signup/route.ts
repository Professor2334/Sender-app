import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { email, password, companyName } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }
    
    // --- Mocked Success: Set a cookie so the login API knows what was created ---
    const response = NextResponse.json({ success: true, message: "Mocked signup successful" }, { status: 201 });
    response.cookies.set("mock_user_email", email.toLowerCase(), { path: '/' });
    response.cookies.set("mock_user_password", password, { path: '/' });
    
    return response;
  } catch (err) {
    console.error("[SIGNUP ERROR]", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

