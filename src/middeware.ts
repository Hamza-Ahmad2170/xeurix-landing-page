import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host");
  const protocol = req.headers.get("x-forwarded-proto") || req.nextUrl.protocol;

  // Redirect HTTP to HTTPS
  if (protocol === "http") {
    return NextResponse.redirect(`https://${host}${req.nextUrl.pathname}`, 301);
  }

  // Proceed if protocol is HTTPS
  return NextResponse.next();
}
