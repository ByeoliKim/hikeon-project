import { Search } from "lucide-react";
import BasicInput from "../ui/BasicInput";

export default function MainVisual() {
  return (
    <>
      <section className="relative flex flex-col justify-center w-full h-[418px] bg-[url('/images/main/main_visual.png')] bg-cover bg-center px-4">
        <h2 className="mt-10 mb-17.5 font-bold text-3xl text-white">
          User님
          <strong className="flex gap-2 pt-1 text-3xl">
            <span className="text-(--font-point-color)">경험치</span>
            <span className="mr-4">Lv. 4</span>
          </strong>
        </h2>
        <div className="mb-5 backdrop-blur-md border border-[#FFFFFF4D] rounded-lg">
          <ul className="flex justify-around p-4 text-white">
            <li>
              <p>총 운동 시간</p>
              <strong>00:00:00</strong>
            </li>
            <li>
              <p>평균 속도</p>
              <strong>00.00km</strong>
            </li>
            <li>
              <p>초고 고도</p>
              <strong>000.00m</strong>
            </li>
          </ul>
        </div>
        <BasicInput
          placeholder="산, 코스를 입력하세요"
          rightIcon={<Search size={18} />}
          onChange={(e) => console.log(e.target.value)}
        />
      </section>
    </>
  );
}
