import type { MeetupDateTab, MeetupItem } from "@/types/meetup";

export const meetupDateTabs: MeetupDateTab[] = [
  { id: 1, day: "16", week: "월" },
  { id: 2, day: "17", week: "월" },
  { id: 3, day: "18", week: "화" },
  { id: 4, day: "16", week: "일" },
  { id: 5, day: "16", week: "일" },
  { id: 6, day: "16", week: "일" },
  { id: 7, day: "17", week: "일" },
];

export const meetupItems: MeetupItem[] = [
  {
    id: 1,
    title: "숨은 명산 영등 백화산 같이가요...",
    time: "오전 5:50 - 오후 8:30",
    location: "남부터미널역 4-2번출구",
    deadlineText: "6인 마감",
    difficulty: "중하",
    category: "맛등산",
    image: "/images/main/meetup_thumbnail1.png",
    dateId: 1,
  },
  {
    id: 2,
    title: "숨은 명산 영등 백화산 같이가요...",
    time: "오전 5:50 - 오후 8:30",
    location: "남부터미널역 4-2번출구",
    deadlineText: "6인 마감",
    difficulty: "중하",
    category: "맛등산",
    image: "/images/main/meetup_thumbnail2.png",
    dateId: 1,
  },
  {
    id: 3,
    title: "숨은 명산 영등 백화산 같이가요...",
    time: "오전 5:50 - 오후 8:30",
    location: "남부터미널역 4-2번출구",
    deadlineText: "6인 마감",
    difficulty: "중하",
    category: "맛등산",
    image: "/images/main/meetup_thumbnail2.png",
    dateId: 2,
  },
  {
    id: 4,
    title: "북한산 일출 같이 보실 분",
    time: "오전 6:30 - 오전 11:00",
    location: "북한산우이역 1번출구",
    deadlineText: "3인 남음",
    difficulty: "초중",
    category: "뷰맛집",
    image: "/images/main/meetup_thumbnail1.png",
    dateId: 3,
  },
];
