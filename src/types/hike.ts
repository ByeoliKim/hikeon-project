export type HikeTag = "sea" | "snow" | "ridge" | "night" | "view";

export type Hike = {
  id: number;
  title: string;
  description: string;
  height: number;
  duration: number;
  level: "초급" | "중급" | "상급";
  region: string;
  image: string;
  tags: HikeTag[];
};
