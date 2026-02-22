"use client";

import Image from "next/image";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import type { PainLevel, PainArea } from "@/store/useOnboardingStore";

type Area = Exclude<PainArea, "none">;

const AREAS: { key: Area; label: string }[] = [
  { key: "ankle", label: "발목" },
  { key: "knee", label: "무릎" },
  { key: "waist", label: "허리" },
  { key: "shoulder", label: "어깨" },
];

const DEFAULT_LEVEL: PainLevel = 1;

export default function PainStep() {
  const pain = useOnboardingStore((s) => s.answers.pain);
  const togglePainArea = useOnboardingStore((s) => s.togglePainArea);
  const setPainLevel = useOnboardingStore((s) => s.setPainLevel);
  const setPainNone = useOnboardingStore((s) => s.setPainNone);

  const isNone = pain.selected.length === 0;

  const getLevelColor = (level: PainLevel) => {
    switch (level) {
      case 1:
        return "#2f6bff"; // 파랑
      case 2:
        return "#56c2ff"; // 하늘
      case 3:
        return "#ffd54a"; // 노랑
      case 4:
        return "#ff9a4a"; // 주황
      case 5:
        return "#ff4a4a"; // 빨강
      default:
        return "#2f6bff";
    }
  };

  return (
    <div className="space-y-3">
      {/* 없음 */}
      <button
        type="button"
        onClick={setPainNone}
        className={[
          "w-full rounded-2xl border px-4 py-4 text-left text-[16px] font-medium",
          isNone
            ? "border-blue-500 bg-white"
            : "border-transparent bg-(--button-sub-color)",
        ].join(" ")}
      >
        <div className="flex items-center justify-between">
          <span>없음</span>
          <Image
            src={
              isNone
                ? "/images/onboarding/onboarding_arrow_icon_on.png"
                : "/images/onboarding/onboarding_arrow_icon_off.png"
            }
            alt="arrow"
            unoptimized
            width={18}
            height={18}
          />
        </div>
      </button>

      {/* 부위들 */}
      {AREAS.map((a) => {
        const selected = pain.selected.includes(a.key);
        const level = pain.levels[a.key] ?? DEFAULT_LEVEL;

        return (
          <div
            key={a.key}
            className={[
              "rounded-2xl border p-4 transition",
              selected
                ? "border-blue-500 bg-white"
                : "border-transparent bg-(--button-sub-color)",
            ].join(" ")}
          >
            <button
              type="button"
              onClick={() => togglePainArea(a.key)}
              className="flex w-full items-center justify-between text-left text-[16px] font-medium text-(--font-color)"
            >
              <span>{a.label}</span>
              <Image
                src={
                  selected
                    ? "/images/onboarding/onboarding_arrow_icon_on.png"
                    : "/images/onboarding/onboarding_arrow_icon_off.png"
                }
                alt="arrow"
                width={18}
                height={18}
                unoptimized
              />
            </button>

            {/* 선택된 경우만 강도 슬라이더 */}
            {selected ? (
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span>경미함</span>
                  <span
                    className="font-bold transition-colors duration-200"
                    style={{ color: getLevelColor(level) }}
                  >
                    {level}
                  </span>
                  <span>매우심함</span>
                </div>

                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={level}
                  onChange={(e) =>
                    setPainLevel(a.key, Number(e.target.value) as PainLevel)
                  }
                  className="w-full pain-range"
                  style={
                    {
                      "--thumb-color": getLevelColor(level),
                    } as React.CSSProperties
                  }
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
