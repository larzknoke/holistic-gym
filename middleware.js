import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/" || pathname === "/impressum") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
