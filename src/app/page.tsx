"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/store/useOnboardingStore";

export default function HomePage() {
  const router = useRouter();
  const hasCompleted = useOnboardingStore((s) => s.hasCompleted);
  const answers = useOnboardingStore((s) => s.answers);

  useEffect(() => {
    if (!hasCompleted) router.replace("/onboarding");
  }, [hasCompleted, router]);

  if (!hasCompleted) return null;

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">메인</h1>

      {/* <p className="mt-2 text-sm text-neutral-600">
        (임시) 설문 결과가 저장되어 있어요.
      </p>

      <pre className="mt-4 rounded-xl bg-neutral-100 p-4 text-xs">
        {JSON.stringify(answers, null, 2)}
      </pre> */}
    </main>
  );
}
