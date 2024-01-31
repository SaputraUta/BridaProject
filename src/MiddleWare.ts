import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    const role = request.cookies.get("role");
    const token = request.cookies.get("token");
    if (request.nextUrl.pathname.startsWith("/admin")){
        if (!token){
            if (!role) return NextResponse.redirect(new URL("/", request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith("/login")){
        if (token){
            if(role) return NextResponse.redirect(new URL("/", request.url));
        }
    }   
}
export const config = {
    metcher: ["/admin/:path*", "/"],
};