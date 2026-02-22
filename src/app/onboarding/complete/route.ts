import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ ok: true });

  // 1년 유지(원하면 조절)
  res.cookies.set("has_onboarded", "1", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return res;
}
