"use client";

import Image from "next/image";
import { useRef, useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { ResultCard } from "@/types/result";
import { ArrowUpRight } from "lucide-react";

// type Thumb = { id: string; src: string; alt?: string };

// const DATA = {
//   title: "인왕산",
//   subtitle: "호랑이등산 - 정상(원점회귀)",
//   address: "서울 종로구 옥인동 산 3-39",
//   distance: "5.2km",
//   elevation: "352m",
//   time: "1시간25분",
//   tags: ["초급", "서울"],
// };

export default function ResultCardCarousel() {
  // 임시!! 결과는 무조건 인왕산으로
  const cards = useMemo<ResultCard[]>(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: `inywang-${i}`,
        title: "인왕산",
        subtitle: `호랑이등산 - 정상(원점회귀)`,
        address: "서울 종로구 옥인동 산 3-39",
        distance: "5.2km",
        elevation: "352m",
        time: "1시간25분",
        tags: ["초급", "서울"],
        image: "/images/result/result_thumbs1.png",
        thumb: `/images/result/result_thumbs${i + 1}.png`,
      })),
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
    duration: 28, // 20~40 사이로 조절 (높을수록 부드럽고 조금 느려짐)
  });

  const [thumbRef, thumbApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const idx = emblaApi.selectedScrollSnap();
    setSelectedIndex(idx);
    if (thumbApi) thumbApi.scrollTo(idx);
  }, [emblaApi, thumbApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const slideNodesRef = useRef<HTMLDivElement[]>([]);
  const setSlideNode = (index: number) => (node: HTMLDivElement | null) => {
    if (node) slideNodesRef.current[index] = node;
  };

  useEffect(() => {
    if (!emblaApi) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const scrollProgress = emblaApi.scrollProgress();
      const snaps = emblaApi.scrollSnapList();

      snaps.forEach((snap, i) => {
        const node = slideNodesRef.current[i];
        if (!node) return;

        let diff = snap - scrollProgress;
        diff = Math.max(-1, Math.min(1, diff));
        const abs = Math.abs(diff);

        const scale = 1 - abs * 0.08;
        const rotate = diff * 6; // deg
        const y = abs * 14; // px
        const opacity = 1 - abs * 0.25;

        node.style.transform = `translateY(${y}px) rotate(${rotate}deg) scale(${scale})`;
        node.style.opacity = String(opacity);
        node.style.transformOrigin = "center bottom";
      });
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update); // ✅ 프레임당 1번만 업데이트
    };

    update();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", update);
    emblaApi.on("select", update);

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", update);
      emblaApi.off("select", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [emblaApi]);

  return (
    <div className="w-full ">
      {/* 카드 캐러셀 */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {cards.map((c, i) => {
            return (
              <div key={i} className="min-w-0 flex-[0_0_86%] px-1.5">
                <div
                  ref={setSlideNode(i)}
                  className="rounded-xl bg-white shadow-[0_18px_60px_rgba(0,0,0,0.25)] transform-gpu will-change-transform"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-3xl font-bold text-neutral-900">
                          {c.title}
                        </h2>
                        <p className="mt-1 text-md font-semibold text-(--onboarding-font-color)">
                          {c.subtitle}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white"
                        aria-label="open"
                      >
                        <Image
                          src="/images/result/result_detail_arrow_icon.png"
                          alt=""
                          width="10"
                          height="10"
                          unoptimized
                        />
                      </button>
                    </div>

                    <div className="mt-4 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-normal text-(--onboarding-font-sub-color)">
                          {c.address}📍
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-normal text-(--onboarding-font-sub-color)">
                          {c.distance} • {c.elevation} • {c.time}
                        </span>
                      </div>
                      <div className="flex gap-2 pt-1">
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-xs bg-(--bg-color) px-2 py-1 text-[13px] text-(--font-sub-color)"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 overflow-hidden rounded-2xl">
                      <div className="relative aspect-4/3 w-full bg-neutral-200">
                        <Image
                          src="/images/result/result_thumbs1.png"
                          alt="인왕산"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 썸네일 = 페이지네이션 */}
      <div className="mt-5">
        <div ref={thumbRef} className="overflow-hidden">
          <div className="flex gap-3 px-3">
            {cards.map((card, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                className={[
                  "relative h-14 w-14 overflow-hidden rounded-xl border",
                  i === selectedIndex
                    ? "border-white border-2"
                    : "border-transparent opacity-70",
                ].join(" ")}
              >
                <Image
                  src={card.thumb}
                  alt={`thumbnail-${i}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
