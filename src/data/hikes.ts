import { Hike } from "@/types/hike";

export const hikes: Hike[] = [
  {
    id: 1,
    title: "곤룐산",
    description: "주차장 - 활공장 - 원점회귀",
    height: 352,
    duration: 60,
    level: "초급",
    region: "경상북도",
    image: "/images/main/hike_img1.png",
    tags: ["sea", "view"],
  },
  {
    id: 2,
    title: "강릉 괘방산",
    description: "안인해변삼거리 - 활공장",
    height: 352,
    duration: 150,
    level: "초급",
    region: "강원도",
    image: "/images/hikes/gangneung.jpg",
    tags: ["sea"],
  },
  {
    id: 3,
    title: "지리산",
    description: "성삼재 - 노고단",
    height: 1915,
    duration: 180,
    level: "중급",
    region: "전라남도",
    image: "/images/hikes/jiri.jpg",
    tags: ["snow"],
  },
];
