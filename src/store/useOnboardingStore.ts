import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Experience = "first" | "few" | "some" | "pro";
export type Recent = "rare" | "sometimes" | "often";
export type Important =
  | "timeRequired"
  | "trekking"
  | "easy"
  | "hard"
  | "long_view"
  | "comfort";
export type Preference = "light" | "long" | "healing" | "comfort" | "challenge";
export type Sports = "none" | "sometimes" | "often";

export type OnboardingAnswers = {
  experience?: Experience;
  recent?: Recent;
  important?: Important[];
  preference: Preference[];
  sports?: Sports;
  pain: PainState;
};

export type PainArea = "none" | "ankle" | "knee" | "waist" | "shoulder";
export type PainLevel = 1 | 2 | 3 | 4 | 5;

export type PainState = {
  selected: Exclude<PainArea, "none">[]; // none 제외
  levels: Partial<Record<Exclude<PainArea, "none">, PainLevel>>;
};

type OnboardingState = {
  answers: OnboardingAnswers;
  hasCompleted: boolean;

  setExperience: (v: Experience) => void;
  setRecent: (v: Recent) => void;
  setImportant: (v: Important) => void;
  setSports: (v: Sports) => void;
  togglePreference: (v: Preference) => void;
  toggleImportant: (v: Important) => void;
  togglePainArea: (area: Exclude<PainArea, "none">) => void;
  setPainLevel: (area: Exclude<PainArea, "none">, level: PainLevel) => void;
  setPainNone: () => void;
  complete: () => void;
  reset: () => void;
};

const initialAnswers: OnboardingAnswers = {
  important: [],
  preference: [],
  pain: { selected: [], levels: {} },
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      answers: initialAnswers,
      hasCompleted: false,

      setExperience: (v) =>
        set((s) => ({ answers: { ...s.answers, experience: v } })),

      setRecent: (v) => set((s) => ({ answers: { ...s.answers, recent: v } })),

      setImportant: (v) =>
        set((s) => {
          const cur = new Set(s.answers.important);
          if (cur.has(v)) cur.delete(v);
          else cur.add(v);
          return { answers: { ...s.answers, important: Array.from(cur) } };
        }),

      setSports: (v) => set((s) => ({ answers: { ...s.answers, sports: v } })),

      togglePreference: (v) =>
        set((s) => {
          const cur = new Set(s.answers.preference);
          if (cur.has(v)) cur.delete(v);
          else cur.add(v);
          return { answers: { ...s.answers, preference: Array.from(cur) } };
        }),

      toggleImportant: (v) =>
        set((s) => {
          const cur = new Set(s.answers.important);
          if (cur.has(v)) cur.delete(v);
          else cur.add(v);

          return {
            answers: {
              ...s.answers,
              important: Array.from(cur),
            },
          };
        }),

      togglePainArea: (area) =>
        set((s) => {
          const cur = new Set(s.answers.pain.selected);
          if (cur.has(area)) cur.delete(area);
          else cur.add(area);

          const nextSelected = Array.from(cur);

          // 선택 해제된 부위 level도 같이 제거
          const nextLevels = { ...s.answers.pain.levels };
          if (!cur.has(area)) delete nextLevels[area];

          return {
            answers: {
              ...s.answers,
              pain: { selected: nextSelected, levels: nextLevels },
            },
          };
        }),

      setPainLevel: (area, level) =>
        set((s) => ({
          answers: {
            ...s.answers,
            pain: {
              ...s.answers.pain,
              levels: { ...s.answers.pain.levels, [area]: level },
            },
          },
        })),

      setPainNone: () =>
        set((s) => ({
          answers: {
            ...s.answers,
            pain: { selected: [], levels: {} },
          },
        })),

      complete: () => set({ hasCompleted: true }),
      reset: () => set({ answers: initialAnswers, hasCompleted: false }),
    }),
    {
      name: "hiking-onboarding",
      storage: createJSONStorage(() => localStorage),
      version: 2,
      migrate: (persisted: any, version) => {
        // persisted는 { answers, hasCompleted, ... } 형태
        const next = persisted ?? {};

        const answers = next.answers ?? {};
        return {
          ...next,
          answers: {
            ...initialAnswers,
            ...answers,
            pain: answers.pain ?? initialAnswers.pain,
            important: answers.important ?? [],
            preference: answers.preference ?? [],
          },
          hasCompleted: next.hasCompleted ?? false,
        };
      },
    },
  ),
);
