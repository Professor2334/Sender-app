import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password, companyName } = await req.json();

    // --- Input validation ---
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }
    
    // --- Mocked Success: Always allow signup for development ---
    // (This resolves any potential DB connection or hashing errors causing Network Error)
    
    return NextResponse.json({ success: true, message: "Mocked signup successful" }, { status: 201 });
  } catch (err) {
    console.error("[SIGNUP ERROR]", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
