import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const allowPrefixes = ["/admin", "/kurse", "/impressum"];
  const isAllowedPrefix = allowPrefixes.some((prefix) =>
    pathname.startsWith(prefix),
  );

  if (pathname === "/" || isAllowedPrefix) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
