import Image from "next/image";

type Choice<T extends string> = {
  label: string;
  label2: string;
  value: T;
  iconSrc?: string;
};

type Common = { variant?: "list" | "grid" };

type SingleProps<T extends string> = Common & {
  kind: "single";
  value?: T;
  choices: Choice<T>[];
  onSelect: (v: T) => void;
};

type MultiProps<T extends string> = Common & {
  kind: "multi";
  value: T[];
  choices: Choice<T>[];
  minSelected?: number;
  onToggle: (v: T) => void;
};

type Props<T extends string> = SingleProps<T> | MultiProps<T>;

export default function SurveyStep<T extends string>({
  variant = "list",
  ...props
}: Props<T>) {
  const isSelected = (v: T) =>
    props.kind === "single" ? props.value === v : props.value.includes(v);

  const handleClick = (v: T) => {
    if (props.kind === "single") props.onSelect(v);
    else props.onToggle(v);
  };

  // ✅ variant 반영: list vs grid
  const wrapperClass =
    variant === "grid" ? "grid grid-cols-2 gap-3" : "space-y-3";

  return (
    <div className={wrapperClass}>
      {props.choices.map((choice) => {
        const selected = isSelected(choice.value);

        const buttonClass =
          variant === "grid"
            ? [
                "w-full h-40 rounded-2xl p-4 text-center transition",
                "bg-(--button-sub-color)",
                selected
                  ? "border-2 border-blue-500 bg-white"
                  : "border-2 border-transparent",
              ].join(" ")
            : [
                "w-full h-13 px-2 rounded-lg text-(--font-color) text-left text-[16px] font-medium transition",
                selected
                  ? "border-2 border-blue-500 bg-white"
                  : "border-2 border-transparent bg-(--button-sub-color)",
              ].join(" ");

        return (
          <button
            key={choice.value}
            type="button"
            onClick={() => handleClick(choice.value)}
            className={buttonClass}
          >
            {variant === "grid" ? (
              <div className="flex flex-col">
                <h4 className="whitespace-pre-line text-(--font-color) text-[16px] font-semibold leading-snug">
                  {choice.label}
                </h4>
                <p className="mb-3 text-[12px] text-(--font-sub-color)">
                  {choice.label2}
                </p>

                {choice.iconSrc ? (
                  <div className="relative mx-auto w-[62px] h-[62px]">
                    <Image
                      src={choice.iconSrc}
                      alt="icon"
                      fill
                      priority
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="flex items-center justify-between gap-3">
                <span className="whitespace-pre-line">{choice.label}</span>
                <Image
                  src={
                    selected
                      ? "/images/onboarding/onboarding_arrow_icon_on.png"
                      : "/images/onboarding/onboarding_arrow_icon_off.png"
                  }
                  alt="arrow"
                  unoptimized
                  width={18}
                  height={18}
                />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
