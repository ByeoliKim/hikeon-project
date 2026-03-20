import Image from "next/image";
import type { ChallengeItem } from "@/types/challenge";

type ChallengeCardProps = {
  item: ChallengeItem;
};

export default function ChallengeCard({ item }: ChallengeCardProps) {
  return (
    <>
      <article className="relative h-[300px] overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 420px) 80vw, 320px"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

        <div className="absolute left-3 top-3">
          <span className="inline-flex rounded-sm bg-(--btn-bg-color) px-1.5 py-1 text-[13px] font-medium text-white">
            {item.status}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 text-center">
          <h3 className="whitespace-pre-line text-white text-[26px] font-bold leading-[1.3]">
            {item.title}
          </h3>
          <p className="mt-2 text-[12px] font-normal text-white">
            {item.period}
          </p>
        </div>
      </article>
    </>
  );
}
