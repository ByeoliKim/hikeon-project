"use client";

import Image from "next/image";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import type { PainArea, PainSeverity } from "@/store/useOnboardingStore";

type Area = Exclude<PainArea, never>;

const OPTIONS: { key: PainArea; label: string }[] = [
  { key: "none", label: "없음" },
  { key: "ankle", label: "발목" },
  { key: "knee", label: "무릎" },
  { key: "waist", label: "허리" },
  { key: "shoulder", label: "어깨" },
];

const SEVERITIES: { value: PainSeverity; label: string }[] = [
  { value: 1, label: "경미함" },
  { value: 2, label: "보통" },
  { value: 3, label: "심함" },
];

export default function PainStep() {
  const pain = useOnboardingStore((s) => s.answers.pain);
  const setPainChoice = useOnboardingStore((s) => s.setPainChoice);
  const setPainSeverity = useOnboardingStore((s) => s.setPainSeverity);

  const selectedChoice = pain.choice;
  const selectedSeverity = pain.severity;

  return (
    <div className="space-y-3">
      {OPTIONS.map((opt) => {
        const selected = selectedChoice === opt.key;

        return (
          <div
            key={opt.key}
            className={[
              "rounded-lg border-2 px-3 py-3 transition ",
              selected
                ? "border-(--primary) bg-white"
                : "border-transparent bg-(--button-sub-color)",
            ].join(" ")}
          >
            <button
              type="button"
              onClick={() => setPainChoice(opt.key)}
              className="flex w-full items-center justify-between text-left text-[16px] font-medium text-(--font-color)"
            >
              <span>{opt.label}</span>

              <Image
                src={
                  selected
                    ? "/images/onboarding/onboarding_arrow_icon_on.png"
                    : "/images/onboarding/onboarding_arrow_icon_off.png"
                }
                alt="select"
                width={18}
                height={18}
                unoptimized
              />
            </button>

            {selected && opt.key !== "none" ? (
              <div className="mt-4 border-t border-(--progress-bg) bg-white mx-4 py-4">
                <div className="relative">
                  <div className="absolute left-0 right-0 top-[18px] h-[1px] bg-(--pain-icon-color)" />

                  <div className="relative flex items-start justify-between">
                    {SEVERITIES.map((s) => {
                      const active = selectedSeverity === s.value;
                      return (
                        <button
                          key={s.value}
                          type="button"
                          onClick={() => setPainSeverity(s.value)}
                          className="flex flex-col items-start gap-2"
                        >
                          <span
                            className={[
                              "grid h-9 w-9 place-items-center rounded-full border-2 bg-white transition",
                              active
                                ? "border-(--primary)"
                                : "border-(--pain-icon-color)",
                            ].join(" ")}
                          >
                            <span
                              className={[
                                "h-6 w-6 rounded-full transition",
                                active
                                  ? "bg-(--primary)"
                                  : "bg-(--pain-icon-color)",
                              ].join(" ")}
                            />
                          </span>

                          <span className="mx-auto font-normal text-(--onboarding-font-color) text-[14px] ">
                            {s.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
