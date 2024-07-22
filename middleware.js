// middleware.js
import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");
  const url = new URL(request.url);

  if (token && (url.pathname === "/signup" || url.pathname === "/register")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/register", "/login"], // Apply middleware to these paths
};
