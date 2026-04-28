import Image from "next/image";

export default function BottomFixMenu() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-[420px] -translate-x-1/2">
        <button
          onClick={handleScrollTop}
          className="absolute right-4 bottom-[72px] flex items-center justify-center p-2.5 rounded-full bg-(--primary) text-white focus:outline-none"
          aria-label="Scroll to top"
        >
          <Image
            width={8}
            height={16}
            src="/images/main/scroll_top.png"
            alt=""
            priority
          />
        </button>

        <div className="border-t border-(--line-color) bg-white">
          <div className="flex h-16 items-center justify-around">
            <button className="text-[12px] text-[var(--btn-text-color)]">
              코스탐색
            </button>
            <button className="text-[12px] text-(--btn-text-color)">
              나의성장
            </button>
            <button className="text-[12px] text-(--btn-text-color)">
              기록 시작
            </button>
            <button className="text-[12px] text-(--btn-text-color)">
              커뮤니티
            </button>
            <button className="text-[12px] text-(--btn-text-color)">
              챌린지
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
