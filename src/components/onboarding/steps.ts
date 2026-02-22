import type {
  Experience,
  Recent,
  Preference,
  Important,
  Sports,
} from "@/store/useOnboardingStore";

export type StepId =
  | "intro"
  | "experience"
  | "recent"
  | "important"
  | "preference"
  | "sports"
  | "pain";

export type Choice<T extends string> = {
  label: string;
  label2?: string;
  value: T;
  iconSrc?: string;
};

export type SurveyStepDef<T extends string> = {
  id: Exclude<StepId, "intro">;
  title: string;
  title2: string;
  kind: "single" | "multi";
  minSelected?: number; // 멀티일 때만 사용
  choices: Choice<T>[];
};

export const SURVEY_STEPS = [
  {
    id: "experience",
    title: "현재 등산 경험은\n어느 정도인가요?",
    kind: "single",
    choices: [
      { label: "처음입니다.", value: "first" },
      { label: "5번 미만 다녀봤습니다.", value: "few" },
      { label: "둘레길/적당한 산 경험이 있습니다.", value: "some" },
      { label: "등산 동호회/완등 루틴이 있습니다.", value: "pro" },
    ] satisfies Choice<Experience>[],
  },
  {
    id: "recent",
    title: "최근에도\n등산 자주 하셨나요?",
    kind: "single",
    choices: [
      { label: "거의 못 갔어요 (6개월 이상)", value: "rare" },
      { label: "가끔 갔어요", value: "sometimes" },
      { label: "꾸준히 다녀요 (월 2회 이상)", value: "often" },
    ] satisfies Choice<Recent>[],
  },
  {
    id: "important",
    title: "코스 추천 기준 중 중요한\n요소는?",
    title2: "(최소 2개 이상 선택)",
    kind: "multi",
    minSelected: 2,
    choices: [
      {
        label: "소요 시간",
        label2: "(짧게 가고 싶어요)",
        value: "timeRequired",
        iconSrc: "/images/onboarding/onboarding_icon1.png",
      },
      {
        label: "트레킹 감성",
        label2: "(흙길, 능선길 좋아요)",
        value: "trekking",
        iconSrc: "/images/onboarding/onboarding_icon2.png",
      },
      {
        label: "난이도↓",
        label2: "(경사 완만하게)",
        value: "easy",
        iconSrc: "/images/onboarding/onboarding_icon3.png",
      },
      {
        label: "난이도↑",
        label2: "(성취감 있는 코스)",
        value: "hard",
        iconSrc: "/images/onboarding/onboarding_icon4.png",
      },
      {
        label: "풍경",
        label2: "(전망 좋은 곳 필요!)",
        value: "long_view",
        iconSrc: "/images/onboarding/onboarding_icon5.png",
      },
      {
        label: "접근성 좋은",
        label2: "(이동 편의 핵심!)",
        value: "comfort",
        iconSrc: "/images/onboarding/onboarding_icon6.png",
      },
    ] satisfies Choice<Important>[],
  },
  {
    id: "preference",
    title: "어떤 등산이 취향이신가요?",
    title2: "(최소 2개 이상 선택)",
    kind: "multi",
    minSelected: 2,
    choices: [
      { label: "가볍게 걷는 완만 코스", value: "light" },
      { label: "길게 걷는 전망 코스", value: "long" },
      { label: "힐링이 되는 전망 코스", value: "healing" },
      { label: "편의시설/계절감 코스", value: "comfort" },
      { label: "도전적인 트레킹", value: "challenge" },
    ] satisfies Choice<Preference>[],
  },
  {
    id: "sports",
    title: "평소 운동은\n어느 정도 하시나요?",
    kind: "single",
    choices: [
      { label: "거의 안 해요", value: "none" },
      { label: "주 1~2회 운동해요", value: "sometimes" },
      { label: "자주 운동해요 (주 3회 이상)", value: "often" },
    ] satisfies Choice<Sports>[],
  },
  {
    id: "pain",
    title: "몸 상태 중\n체크할 게 있다면? ",
    title2: "(중복 가능)",
    kind: "multi",
    minSelected: 0,
    choices: [] as any,
  },
];
