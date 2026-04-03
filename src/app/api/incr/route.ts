import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (!redis) {
    return new NextResponse("Redis not configured", { status: 500 });
  }
  const body = await req.json();
  const slug = body.slug;
  if (!slug) {
    return new NextResponse("Slug not found", { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for");
  if (ip) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip));
    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    
    // Prevent double counting from same IP in 24 hrs
    const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
      nx: true,
      ex: 24 * 60 * 60,
    });
    if (!isNew) {
      return new NextResponse(null, { status: 202 });
    }
  }

  await redis.incr(["pageviews", "projects", slug].join(":"));
  return new NextResponse(null, { status: 202 });
}
