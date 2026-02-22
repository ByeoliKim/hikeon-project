"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { SURVEY_STEPS } from "@/components/onboarding/steps";

import { useOnboardingStore } from "@/store/useOnboardingStore";
import IntroPage from "./IntroPage";
import OnboardingHeader from "./OnboardingHeader";
import SurveyStep from "./SurveyStep";
import PainStep from "./PainStep";

type IntroStep = {
  id: "intro";
  title: string;
  title2?: string;
};
type Steps = IntroStep | (typeof SURVEY_STEPS)[number];

export default function OnboardingWizard() {
  const router = useRouter();

  // store
  const answers = useOnboardingStore((s) => s.answers);
  const complete = useOnboardingStore((s) => s.complete);

  // single setters
  const setExperience = useOnboardingStore((s) => s.setExperience);
  const setRecent = useOnboardingStore((s) => s.setRecent);
  const setSports = useOnboardingStore((s) => s.setSports);

  // multi toggles
  const toggleImportant = useOnboardingStore((s) => s.toggleImportant);
  const togglePreference = useOnboardingStore((s) => s.togglePreference);

  // intro + 설문 steps
  const steps = useMemo(
    () => [
      {
        id: "intro" as const,
        title: "",
        title2: "",
      },
      ...SURVEY_STEPS,
    ],
    [],
  );
  const [stepIndex, setStepIndex] = useState(0);

  const step = steps[stepIndex];
  const isIntro = step.id === "intro";
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === steps.length - 1;

  // progress 는 intro 제외하고 진행률을 표시함
  const progress = stepIndex <= 1 ? 0 : (stepIndex - 1) / (steps.length - 2);

  // 다음 버튼 활성화 조건
  const canGoNext = useMemo(() => {
    if (isIntro) return true;

    switch (step.id) {
      case "experience":
        return Boolean(answers.experience);

      case "recent":
        return Boolean(answers.recent);

      case "important": {
        const min = step.minSelected ?? 0;
        return (answers.important?.length ?? 0) >= min;
      }

      case "preference": {
        const min = step.minSelected ?? 0;
        return (answers.preference?.length ?? 0) >= min;
      }

      case "sports":
        return Boolean(answers.sports);

      case "pain":
        return true;

      default:
        return false;
    }
  }, [answers, isIntro, step]);

  const goNext = async () => {
    if (!canGoNext) return;

    if (isLast) {
      complete();

      // 쿠키 찍기
      await fetch("/api/onboarding/complete", {
        method: "POST",
      });

      router.replace("/result");
      return;
    }

    setStepIndex((v) => Math.min(v + 1, steps.length - 1));
  };

  const goPrev = () => setStepIndex((v) => Math.max(v - 1, 0));
  const skip = () => router.replace("/result");

  // 0) Intro
  if (isIntro) return <IntroPage onStart={goNext} />;

  const isFirstSurveyStep = stepIndex === 1;

  // 1) Survey
  return (
    <div className="flex min-h-dvh flex-col">
      <OnboardingHeader
        progress={progress}
        onBack={goPrev}
        onSkip={skip}
        disableBack={isFirstSurveyStep}
      />
      <main className="flex-1 pt-12 px-5">
        {!isIntro && (
          <>
            <h1 className=" whitespace-pre-line text-2xl font-bold leading-snug text-(--font-color)">
              {step.title}
            </h1>
            <p className="mb-12 text-lg text-(--font-point-color)">
              {step.title2}
            </p>
          </>
        )}
        <div className="mt-6">
          {/* single */}
          {step.id === "experience" ? (
            <SurveyStep
              kind="single"
              value={answers.experience}
              choices={step.choices}
              onSelect={setExperience}
            />
          ) : null}

          {step.id === "recent" ? (
            <SurveyStep
              kind="single"
              value={answers.recent}
              choices={step.choices}
              onSelect={setRecent}
            />
          ) : null}

          {step.id === "sports" ? (
            <SurveyStep
              kind="single"
              value={answers.sports}
              choices={step.choices}
              onSelect={setSports}
            />
          ) : null}

          {/* multi */}
          {step.id === "important" ? (
            <SurveyStep
              kind="multi"
              variant="grid"
              value={answers.important ?? []}
              minSelected={step.minSelected}
              choices={step.choices}
              onToggle={toggleImportant}
            />
          ) : null}

          {step.id === "preference" ? (
            <SurveyStep
              kind="multi"
              value={answers.preference ?? []}
              minSelected={step.minSelected}
              choices={step.choices}
              onToggle={togglePreference}
            />
          ) : null}

          {step.id === "pain" ? <PainStep /> : null}
        </div>
      </main>
      <footer className="sticky bottom-0 bg-white px-5 py-4">
        <button
          type="button"
          onClick={goNext}
          disabled={!canGoNext}
          className="w-full h-13 rounded-lg bg-(--button-color) text-[16px] font-semibold text-white disabled:bg-neutral-200 disabled:text-neutral-500"
        >
          {isLast ? "완료" : "다음"}
        </button>
      </footer>
    </div>
  );
}
