import Image from "next/image";
import type { MeetupItem } from "@/types/meetup";

type MeetupCardProps = {
  item: MeetupItem;
};

export default function MeetupCard({ item }: MeetupCardProps) {
  return (
    <article className="flex gap-4.5 py-4">
      {/* 왼쪽 썸네일 + 카테고리 */}
      <div className="flex w-[84px] shrink-0 flex-col items-center">
        <div className="relative h-[84px] w-[84px] overflow-hidden rounded-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="84px"
            priority
          />
        </div>

        <span className="relative -mt-4 inline-flex rounded-lg bg-(--bg-color) px-4 py-1.5 text-[14px] font-medium text-(--btn-text-color)">
          {item.category}
        </span>
      </div>

      {/* 오른쪽 텍스트 */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[16px] font-semibold text-(--font-color)">
          {item.title}
        </h3>

        <div className="mt-3 space-y-1 text-[14px] text-(--font-color4)">
          <p>일시 {item.time}</p>
          <p>위치 {item.location}</p>
        </div>

        <div className="mt-2 flex items-center gap-2 text-[14px]">
          <span className="font-semibold text-(--primary)">
            {item.deadlineText}
          </span>
          <span className="text-(--font-color4)">
            난이도 : {item.difficulty}
          </span>
        </div>
      </div>
    </article>
  );
}
