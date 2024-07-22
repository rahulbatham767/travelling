// middleware.js
import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");
  const url = new URL(request.url);

  const fullUrl = new URL(request.headers.get("host"));

  // Log the full URL
  console.log("Full URL:", fullUrl.href);

  console.log(url);

  if (token && (url.pathname === "/login" || url.pathname === "/register")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/register", "/login"], // Apply middleware to these paths
};
