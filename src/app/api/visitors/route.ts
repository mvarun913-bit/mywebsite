import { NextResponse } from "next/server";

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const KEY = "portfolio:visitors";

async function redis(command: string[]) {
  const res = await fetch(`${UPSTASH_URL}/${command.join("/")}`, {
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    cache: "no-store",
  });
  return res.json();
}

// GET — return current count
export async function GET() {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return NextResponse.json({ count: 0 });
  }
  const data = await redis(["GET", KEY]);
  return NextResponse.json({ count: parseInt(data.result ?? "0") });
}

// POST — increment and return new count
export async function POST() {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return NextResponse.json({ count: 0 });
  }
  const data = await redis(["INCR", KEY]);
  return NextResponse.json({ count: data.result ?? 0 });
}
