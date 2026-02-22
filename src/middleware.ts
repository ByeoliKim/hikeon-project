// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   // 테스트 모드 세팅
//   const testMode = process.env.NEXT_PUBLIC_ONBOARDING_TEST_MODE === "1";
//   if (testMode) return NextResponse.next();

//   const { pathname } = req.nextUrl;

//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/images") ||
//     pathname.startsWith("/favicon") ||
//     pathname === "/robots.txt" ||
//     pathname === "/sitemap.xml"
//   ) {
//     return NextResponse.next();
//   }

//   const hasOnboarded = req.cookies.get("has_onboarded")?.value === "1";
//   const isOnboarding = pathname.startsWith("/onboarding");
//   const isResult = pathname.startsWith("/result");

//   // 온보딩 안 했으면 onboarding만 허용
//   if (!hasOnboarded) {
//     if (!isOnboarding) {
//       const url = req.nextUrl.clone();
//       url.pathname = "/onboarding";
//       return NextResponse.redirect(url);
//     }
//     return NextResponse.next();
//   }

//   // 온보딩 완료했으면 onboarding 접근 막기
//   if (hasOnboarded && isOnboarding) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/";
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
//   matcher: [], // 페이지 확인용
// };

import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
