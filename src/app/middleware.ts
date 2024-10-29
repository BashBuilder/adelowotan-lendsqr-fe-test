import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define routes that should be protected
const protectedRoutes = ["/user", "/", "/user/*", "/user/:path*", "/:path*"];

export function middleware(request: NextRequest) {
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    const authToken = request.cookies.get("auth-token")?.value;

    if (!authToken) {
      const loginUrl = new URL("/auth", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}

// Specify paths where this middleware should run
export const config = {
  matcher: ["/user", "/", "/user/*", "/user/:path*", "/:path*"], // specify paths for the middleware to intercept
};
