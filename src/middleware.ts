import getOrCreateDB from "@/models/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    await getOrCreateDB();

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};