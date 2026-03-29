import type { MeetupItem } from "@/types/meetup";
import MeetupCard from "./MeetupCard";

type MeetupListProps = {
  items: MeetupItem[];
};

export default function MeetupList({ items }: MeetupListProps) {
  return (
    <div className="mt-2 divide-y divide-(--line-color)">
      {items.map((item) => (
        <MeetupCard key={item.id} item={item} />
      ))}
    </div>
  );
}
