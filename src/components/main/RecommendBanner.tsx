import Image from "next/image";

export default function RecommendBanner() {
  return (
    <>
      <div className="flex flex-row justify-center gap-7 px-6 py-5 bg-(--primary)">
        <div className="pt-1">
          <h3 className="flex items-center gap-1 font-bold text-[22px] text-white">
            안전 팁
            <Image
              src="/images/main/recommend_banner_icon.png"
              width={14}
              height={14}
              alt="icon"
            />
            등린이 준비물
          </h3>
          <p className="font-normal text-[14px] text-white">
            첫 등산 뭐부터 해야 할지 모르겠다면
          </p>
        </div>
        <Image
          src="/images/main/recommend_banner_icon2.png"
          width={60}
          height={70}
          alt="icon"
        />
      </div>
    </>
  );
}
