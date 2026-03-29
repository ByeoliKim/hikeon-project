import Image from "next/image";
import Link from "next/link";
import type { HikingTipItem } from "@/types/hikingTip";

type HikingTipCardProps = {
  item: HikingTipItem;
};

export default function HikingTipCard({ item }: HikingTipCardProps) {
  return (
    <Link href={item.href ?? "#"} className="block shrink-0">
      <article className="w-[198px]">
        {/* 썸네일 */}
        <div className="relative h-[198px] w-[198px] overflow-hidden rounded-[20px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="198px"
          />

          {/* 유튜브 아이콘 */}
          <div className="absolute bottom-4 left-4 flex h-[24px] w-[30px] items-center justify-center rounded-[7px] bg-red-500">
            <div className="ml-[1px] h-0 w-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-white" />
          </div>
        </div>

        {/* 제목 */}
        <h3 className="mt-4 whitespace-pre-line text-[20px] font-semibold leading-[1.35] tracking-[-0.03em] text-neutral-900">
          {item.title}
        </h3>
      </article>
    </Link>
  );
}
