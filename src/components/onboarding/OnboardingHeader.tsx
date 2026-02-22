import Image from "next/image";
import ProgressBar from "@/components/onboarding/ProgressBar";

type Props = {
  progress: number;
  onBack: () => void;
  onSkip: () => void;
  disableBack?: boolean;
};

export default function OnboardingHeader({
  progress,
  onBack,
  onSkip,
  disableBack = true,
}: Props) {
  return (
    <header className="px-4 pt-4">
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={disableBack}
          aria-label="뒤로가기"
          className={[
            "inline-flex h-9 w-9 items-center justify-center rounded-full",
            disableBack ? "cursor-default" : "cursor-pointer",
          ].join(" ")}
        >
          <Image
            src={
              disableBack
                ? "/images/onboarding/onboarding_header_arrow_icon_disabled.png"
                : "/images/onboarding/onboarding_header_arrow_icon.png"
            }
            width={12}
            height={22}
            alt="back Icon"
          />
        </button>

        <button
          type="button"
          onClick={onSkip}
          className="text-sm font-regular text-(--onboarding-font-color)"
        >
          건너뛰기
        </button>
      </div>

      <ProgressBar value={progress} />
    </header>
  );
}
