import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true, message: "Logged out efficiently" }, { status: 200 });
  response.cookies.delete("mock_user_email");
  response.cookies.delete("mock_user_password");
  return response;
}
