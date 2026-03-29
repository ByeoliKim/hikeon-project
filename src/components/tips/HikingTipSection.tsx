import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { hikingTips } from "@/data/hikingTips";
import HikingTipList from "./HikingTipList";

export default function HikingTipSection() {
  return (
    <section className="px-4 pt-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold text-(--font-color)">
          안전한 등산을 위한 팁
        </h2>

        <Link
          href="/tips"
          aria-label="안전한 등산 팁 더보기"
          className="flex h-8 w-8 items-center justify-center text-neutral-800"
        >
          <ChevronRight className="h-7 w-7" strokeWidth={2.2} />
        </Link>
      </div>

      {/* 카드 리스트 */}
      <div className="mt-4">
        <HikingTipList items={hikingTips} />
      </div>
    </section>
  );
}
