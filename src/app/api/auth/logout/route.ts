import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true, message: "Logged out efficiently" }, { status: 200 });
  // Set a logged_in cookie to false, but DO NOT delete the stored mock_user credentials 
  // so the user can log back in with the same password!
  response.cookies.set("mock_is_logged_in", "false", { path: "/" });
  return response;
}
