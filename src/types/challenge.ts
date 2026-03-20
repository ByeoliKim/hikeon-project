export type ChallengeStatus = "진행중" | "예정" | "종료";

export type ChallengeItem = {
  id: number;
  title: string;
  period: string;
  image: string;
  status: ChallengeStatus;
};
