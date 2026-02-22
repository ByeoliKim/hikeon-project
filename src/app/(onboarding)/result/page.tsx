import ResultCardCarousel from "@/components/result/ResultCardCarousel";

export default function ResultPage() {
  return (
    <div className="min-h-dvh bg-gray-100 text-white">
      <div className="mx-auto flex max-w-[430px] min-h-dvh flex-col px-5 pt-15 bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold">내게 꼭 맞는 코스가 준비됐어요</h1>
          <button className="mt-2.5 text-md font-normal text-white underline">
            다시 검사 할래요
          </button>
        </div>

        <div className="mt-10 bg-black">
          <ResultCardCarousel />
        </div>

        <div className="mt-8 space-y-4 pb-5">
          <button className="w-full py-3.5 rounded-md bg-(--button-color) text-md font-semibold text-white">
            어플 둘러보고 운동하기
          </button>
          <button className="w-full py-3.5 rounded-md bg-white text-md font-semibold text-(--font-color)">
            선택한 코스 바로 보기
          </button>
        </div>
      </div>
    </div>
  );
}
