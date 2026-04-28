import Image from "next/image";

export default function CourseBanner() {
  return (
    <div className="px-4 pb-8 mb-18">
      <div className="h-20 w-full  bg-(--course-bg-color) rounded-lg shadow-[0px_-2px_14px_0px_#00000033]">
        <div className="flex items-center justify-start gap-3 h-full px-5">
          <Image
            src="/images/main/course_icon.png"
            alt="Course Icon"
            width={40}
            height={40}
            className="object-cover"
            priority
          />
          <div>
            <h3 className="text-white text-[16px] font-bold">
              전국 등산 코스 보기
            </h3>
            <p className="text-(--course-font-color) text-[12px] font-normal">
              어디로 떠나고 싶으세요?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
