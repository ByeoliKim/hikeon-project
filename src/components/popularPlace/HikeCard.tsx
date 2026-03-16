import Image from "next/image";
import { Hike } from "@/types/hike";

export default function HikeCard({ hike }: { hike: Hike }) {
  return (
    <article className="flex gap-3">
      <div className="relative w-[96px] h-[96px] rounded-xl overflow-hidden">
        <Image
          src={hike.image}
          alt={hike.title}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="font-semibold">{hike.title}</h3>
        <p className="text-sm text-gray-400">{hike.description}</p>
        <p className="text-sm text-gray-400">
          {hike.height}m · {hike.duration}분
        </p>

        <div className="flex gap-2 mt-1 text-xs">
          <span className="bg-gray-100 px-2 py-1 rounded">{hike.level}</span>

          <span className="bg-gray-100 px-2 py-1 rounded">{hike.region}</span>
        </div>
      </div>
    </article>
  );
}
