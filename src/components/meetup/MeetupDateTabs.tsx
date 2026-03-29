type MeetupDateTab = {
  id: number;
  day: string;
  week: string;
};

type MeetupDateTabsProps = {
  tabs: MeetupDateTab[];
  activeDateId: number;
  onChange: (dateId: number) => void;
};

export default function MeetupDateTabs({
  tabs,
  activeDateId,
  onChange,
}: MeetupDateTabsProps) {
  return (
    <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-2.5 min-w-max">
        {tabs.map((tab) => {
          const isActive = tab.id === activeDateId;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={[
                "flex h-[58px] w-[42px] shrink-0 flex-col items-center justify-center rounded-lg border text-sm transition-colors",
                isActive
                  ? "border-(--primary) bg-(--primary) text-white"
                  : "border-(--btn-border-color) bg-white text-(--font-color)",
              ].join(" ")}
            >
              <span className="text-[16px] font-semibold leading-none">
                {tab.day}
              </span>
              <span className="mt-2 text-[14px] leading-none">{tab.week}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
