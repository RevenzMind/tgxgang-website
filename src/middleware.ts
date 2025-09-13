import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const rateLimitMap: Map<string, { count: number; timestamp: number }> = new Map();
const RATE_LIMIT = 5; 
const TIME_FRAME = 30 * 1000; 

export async function middleware(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "Desconocida";
  const currentTime = Date.now();

  const userData = rateLimitMap.get(ip);

  if (!userData) {
    rateLimitMap.set(ip, { count: 1, timestamp: currentTime });
    return NextResponse.next();
  }

  if (currentTime - userData.timestamp > TIME_FRAME) {
    rateLimitMap.set(ip, { count: 1, timestamp: currentTime });
    return NextResponse.next();
  }

  if (userData.count >= RATE_LIMIT) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  rateLimitMap.set(ip, { count: userData.count + 1, timestamp: userData.timestamp });

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
