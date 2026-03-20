"use client";

import useEmblaCarousel from "embla-carousel-react";
import { challenges } from "@/data/challenges";
import ChallengeCard from "./ChallengeCard";

export default function ChallengeCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });

  return (
    <section>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {challenges.map((item) => (
            <div key={item.id} className="min-w-0 flex-[0_0_82%] pl-0 pr-3">
              <ChallengeCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
