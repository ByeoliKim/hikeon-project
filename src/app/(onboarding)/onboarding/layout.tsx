import type { ReactNode } from "react";

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-neutral-100">
      <div className="mx-auto min-h-dvh w-full max-w-[420px] bg-white">
        {children}
      </div>
    </div>
  );
}
