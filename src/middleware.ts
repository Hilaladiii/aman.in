import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  if (!token) {
    const url = new URL("/auth/login", req.url);
    return NextResponse.redirect(url);
  }
  NextResponse.next();
}

export const config = {
  matcher: ["/user/document/:path*", "/user/history"],
};
