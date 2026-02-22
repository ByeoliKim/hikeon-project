import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ ok: true });

  res.cookies.set("has_onboarded", "1", {
    path: "/",
    httpOnly: false, // 클라에서도 읽고 싶으면 false, 아니면 true로
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1년
  });

  return res;
}
