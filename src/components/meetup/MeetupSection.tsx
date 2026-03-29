"use client";

import { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import { meetupDateTabs, meetupItems } from "@/data/meetups";
import MeetupDateTabs from "./MeetupDateTabs";
import MeetupList from "./MeetupList";

export default function MeetupSection() {
  const [activeDateId, setActiveDateId] = useState<number>(1);

  const filteredItems = useMemo(() => {
    return meetupItems.filter((item) => item.dateId === activeDateId);
  }, [activeDateId]);

  return (
    <section className="px-4">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold text-(--font-color)">
          같이 가요! 정모 둘러보기
        </h2>

        <button
          type="button"
          aria-label="정모 더보기"
          className="flex h-8 w-8 items-center justify-center text-neutral-700"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* 날짜 탭 */}
      <div className="mt-3.5">
        <MeetupDateTabs
          tabs={meetupDateTabs}
          activeDateId={activeDateId}
          onChange={setActiveDateId}
        />
      </div>

      {/* 정모 리스트 */}
      <MeetupList items={filteredItems} />
    </section>
  );
}
