import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    const role = request.cookies.get("role");
    if (request.nextUrl.pathname.startsWith("/adminUser")){
        if (!role) return NextResponse.redirect(new URL("/", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/login")){
        if(role) return NextResponse.redirect(new URL("/", request.url));
    }   
}

export const config = {
    metcher: ["/adminUser/:path*", "/"],
};