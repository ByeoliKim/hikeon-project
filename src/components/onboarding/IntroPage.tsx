"use client";

import Image from "next/image";
type Props = {
  onStart: () => void;
  bannerSrc?: string;
};

export default function IntroPage({
  onStart,
  bannerSrc = "/images/onboarding/onboarding_main_img.png",
}: Props) {
  return (
    <>
      <div className="flex justify-center min-h-dvh flex-col px-7.5 bg-white">
        <div className="text-center">
          <h1 className="mb-1 text-(--font-point-color) text-3xl font-bold">
            안녕하세요
          </h1>
          <h2 className="mb-1 text-(--font-color) text-3xl font-bold">
            건강한 등산 습관을
            <br />
            만들 준비 되셨나요?
          </h2>
          <p className="text-(--font-point-color) text-[16px] font-medium">
            몇 가지 질문을 통해 나에게 맞는
            <br />
            등산 코스를 추천드려요
          </p>
        </div>

        <div className="relative w-26.25 h-41 mx-auto mt-8 mb-3">
          <Image
            src={bannerSrc}
            alt="Intro Banner"
            fill
            priority
            unoptimized
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
          />
        </div>

        <div className="">
          <button
            type="button"
            onClick={onStart}
            className="h-13 w-full rounded-lg bg-(--button-color) text-[16px] font-semibold text-white"
          >
            시작하기
          </button>
        </div>
      </div>
    </>
  );
}
