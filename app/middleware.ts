import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { tokenPayload } from "./shared/functions/authentication/jwt";
import { isJwtPayload } from "./shared/types/jwt-payload";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);
  if (
    request.nextUrl.pathname.startsWith("/client") ||
    request.nextUrl.pathname.startsWith("/staff")
  ) {
    const token = cookies().get("auth");
    if (!token) return NextResponse.redirect("/");
    const payload = tokenPayload(token.value);
    if (!isJwtPayload(payload)) return NextResponse.redirect("/");
    if (
      request.nextUrl.pathname.startsWith(
        `/${payload.role.toLocaleLowerCase()}`
      )
    )
      return NextResponse.redirect("/");
  }
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
