import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const tokenCookie = req.cookies.get("token");
  const token = tokenCookie?.value as string;

  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else {
      try {
        const { payload } = await jwtVerify(
          token,
          new TextEncoder().encode("kinguta")
        );
        if (payload.role !== "Admin") {
          return NextResponse.redirect(new URL("/login", req.url));
        }
      } catch (error) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }
  }

  if (req.nextUrl.pathname.startsWith("/customer")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else {
      try {
        const { payload } = await jwtVerify(
          token,
          new TextEncoder().encode("kinguta")
        );
        console.log("Decoded Token:", payload);
        if (payload.role !== "Customer") {
          return NextResponse.redirect(new URL("/login", req.url));
        }
      } catch (error) {
        console.log(error);
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }
  }

  if (req.nextUrl.pathname.startsWith("/provideruser")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else {
      try {
        const { payload } = await jwtVerify(
          token,
          new TextEncoder().encode("kinguta")
        );
        if (payload.role !== "Provider") {
          return NextResponse.redirect(new URL("/login", req.url));
        }
      } catch (error) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
  }

  if (
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/auth") ||
    req.nextUrl.pathname === "/"
  ) {
    if (token) {
      try {
        const { payload } = await jwtVerify(
          token,
          new TextEncoder().encode("kinguta")
        );
        if (payload.role === "Admin") {
          return NextResponse.redirect(new URL("/admin", req.url));
        }
        if (payload.role === "Provider") {
          return NextResponse.redirect(new URL("/provideruser", req.url));
        }
        if (payload.role === "Customer") {
          return NextResponse.redirect(new URL("/customer", req.url));
        }
      } catch (error) {
        console.log(error);
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/customer/:path*",
    "/provideruser/:path*",
    "/login/:path*",
    "/auth/:path*",
    "/:path*",
  ],
};
