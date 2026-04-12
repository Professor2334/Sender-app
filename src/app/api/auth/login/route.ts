import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }
    
    // Read the mock cookies for testing simulated auth Flow
    const mockEmail = req.cookies.get("mock_user_email")?.value;
    const mockPassword = req.cookies.get("mock_user_password")?.value;

    // Check against mock cookies if they exist
    if (mockEmail && mockPassword) {
      if (email.toLowerCase() !== mockEmail) {
        return NextResponse.json(
          { error: "Account not found for this email." },
          { status: 404 }
        );
      }
      if (password !== mockPassword) {
        return NextResponse.json(
          { error: "Invalid Password" },
          { status: 401 }
        );
      }
    } else {
      // If the cookies got cleared, they truly have no account in our mock DB.
      return NextResponse.json(
        { error: "Account not found for this email. Please sign up." },
        { status: 404 }
      );
    }

    const response = NextResponse.json({ success: true, message: "Mocked login successful" }, { status: 200 });
    response.cookies.set("mock_is_logged_in", "true", { path: "/" });
    return response;
  } catch (err) {
    console.error("[LOGIN ERROR]", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
