import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isAdminAuthRoute =
    pathname === "/admin/signin" || pathname === "/admin/signup";

  if (isAdminAuthRoute) {
    return NextResponse.next();
  }

  const hasSession = !!getSessionCookie(request);

  if (hasSession) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/admin/signin";

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/admin/:path*"],
};
