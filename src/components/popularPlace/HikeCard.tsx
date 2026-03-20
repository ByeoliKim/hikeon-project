import Image from "next/image";
import { Hike } from "@/types/hike";

export default function HikeCard({ hike }: { hike: Hike }) {
  return (
    <article className="flex gap-3">
      <div className="relative w-[115px] h-[115px] rounded-xl overflow-hidden">
        <Image
          src={hike.image}
          alt={hike.title}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="mb-2 text-(--font-color) text-[16px] font-semibold">
          {hike.title}
        </h3>
        <p className="mb-2 text-(--font-color2) text-[14px] font-normal">
          {hike.description}
        </p>
        <p className="mb-1.5 text-(--font-color3) text-[13px] font-normal">
          {hike.height}m · {hike.duration}분
        </p>

        <div className="flex gap-1.5">
          <span className="bg-(--button-sub-color) px-1.5 py-1 rounded-xs text-(--font-sub-color) text-[13px] font-medium">
            {hike.level}
          </span>

          <span className="bg-(--button-sub-color) px-1.5 py-1 rounded-xs text-(--font-sub-color) text-[13px] font-medium">
            {hike.region}
          </span>
        </div>
      </div>
    </article>
  );
}
