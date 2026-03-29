export type MeetupDifficulty = "초하" | "초중" | "중하" | "중";

export type MeetupCategory = "맛등산" | "뷰맛집" | "야등" | "초보환영";

export type MeetupDateTab = {
  id: number;
  day: string;
  week: string;
};

export type MeetupItem = {
  id: number;
  title: string;
  time: string;
  location: string;
  deadlineText: string;
  difficulty: MeetupDifficulty;
  category: MeetupCategory;
  image: string;
  dateId: number;
};
