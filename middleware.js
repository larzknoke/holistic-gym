import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function middleware(request) {
  const hasSession = !!getSessionCookie(request);

  if (hasSession) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/signin";

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/admin/:path*"],
};
