import type { HikingTipItem } from "@/types/hikingTip";
import HikingTipCard from "./HikingTipCard";

type HikingTipListProps = {
  items: HikingTipItem[];
};

export default function HikingTipList({ items }: HikingTipListProps) {
  return (
    <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex min-w-max gap-5">
        {items.map((item) => (
          <HikingTipCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
