import Image from "next/image";
import { Heart } from "lucide-react";
import { useWishStore } from "@/store/useWishStore";

type Course = {
  id: number;
  title: string;
  description: string;
  height: string;
  duration: string;
  level: string;
  region: string;
  image: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "인왕산",
    description: "호랑이동상 - 정상(원점회귀)",
    height: "352m",
    duration: "1시간 52분",
    level: "초급",
    region: "서울",
    image: "/images/main/recomend_course_banner.png",
  },
  {
    id: 2,
    title: "북한산",
    description: "백운대 코스",
    height: "836m",
    duration: "3시간 10분",
    level: "중급",
    region: "서울",
    image: "/images/main/recomend_course_banner2.png",
  },
  {
    id: 3,
    title: "관악산",
    description: "연주대 코스",
    height: "632m",
    duration: "2시간 20분",
    level: "초급",
    region: "서울",
    image: "/images/main/recomend_course_banner.png",
  },
  {
    id: 4,
    title: "도봉산",
    description: "자운봉 코스",
    height: "740m",
    duration: "2시간 45분",
    level: "중급",
    region: "서울",
    image: "/images/main/recomend_course_banner2.png",
  },
];

export default function RecommendCourse() {
  const wishedIds = useWishStore((s) => s.wishedIds);
  const toggleWish = useWishStore((s) => s.toggleWish);
  return (
    <>
      <div className="px-4 mt-17 mb-11">
        <h2 className="pb-2.5 text-(--font-color) text-2xl font-bold">
          User님! 추천 코스
        </h2>
        <h3 className="text-(--font-sub-color2) text-[14px]">
          <strong className="text-(--primary)">
            #2~3시간 #뷰 좋고 힐링되는 여유로운 코스
          </strong>
          을(를) 중요하게
          <br />
          생각하는 User님에게 추천하는 코스입니다.
        </h3>
        <div className="mt-7.5">
          <div className="grid grid-cols-2 gap-4">
            {courses.map((course) => {
              const wished = wishedIds.includes(course.id);
              return (
                <article key={course.id}>
                  {/* 이미지 썸네일 */}
                  <div className="relative h-[240px] overflow-hidden rounded-xl">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 420px) 50vw, 210px"
                      priority={course.id === 1}
                    />
                    {/* 위시 버튼 */}
                    <button
                      type="button"
                      aria-label={wished ? "위시 해제" : "위시 추가"}
                      aria-pressed={wished}
                      onClick={() => toggleWish(course.id)}
                      className="absolute right-3 bottom-3 inline-flex items-center justify-center transition active:scale-95"
                    >
                      {wished ? (
                        <Heart
                          className="text-(--primary)"
                          size={24}
                          fill="currentColor"
                        />
                      ) : (
                        <Heart className="text-(--font-sub-color2)" size={24} />
                      )}
                    </button>
                  </div>

                  {/* 설명 영역 */}
                  <div className="py-4.5 space-y-1.5">
                    <h3 className="text-(--font-color) text-[16px] font-semibold">
                      {course.title}
                    </h3>

                    <p className="text-[14px] text-(--font-color2)">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-x-2 text-[13px] text-(--font-color3)">
                      <span className="after:content-['•'] after:ml-2 last:after:content-none">
                        {course.height}
                      </span>
                      <span>{course.duration}</span>
                    </div>

                    <ul className="flex flex-wrap gap-2 text-(--font-sub-color) text-[13px]">
                      <li className="rounded-xs bg-(--bg-color) px-2 py-1">
                        {course.level}
                      </li>
                      <li className="rounded-xs bg-(--bg-color) px-2 py-1">
                        {course.region}
                      </li>
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
