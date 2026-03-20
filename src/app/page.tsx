"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// store
import { useOnboardingStore } from "@/store/useOnboardingStore";
// components
import Header from "@/components/layout/Header";
import MainVisual from "@/components/main/MainVisual";
import RecommendCourse from "@/components/main/RecommendCourse";
import RecommendBanner from "@/components/main/RecommendBanner";
import PopularPlace from "@/components/main/PopularPlace";
import CustomChallenge from "@/components/main/CustomChallenge";

export default function HomePage() {
  const router = useRouter();
  const hasCompleted = useOnboardingStore((s) => s.hasCompleted);
  const answers = useOnboardingStore((s) => s.answers);

  useEffect(() => {
    if (!hasCompleted) router.replace("/onboarding");
  }, [hasCompleted, router]);

  if (!hasCompleted) return null;

  return (
    <main className="min-h-dvh bg-neutral-100">
      <div className="mx-auto min-h-dvh w-full max-w-[420px] bg-white">
        <Header />
        <MainVisual />
        <RecommendCourse />
        <RecommendBanner />
        <PopularPlace />
        <CustomChallenge />
      </div>
    </main>
  );
}
