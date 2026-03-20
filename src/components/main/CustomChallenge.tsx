import ChallengeCarousel from "../challenge/ChallengeCarousel";

export default function CustomChallenge() {
  return (
    <>
      <div className="px-4 pb-20">
        <h2 className="pb-5 text-(--font-color) font-bold text-2xl">
          맞춤 챌린지
        </h2>
        <ChallengeCarousel />
      </div>
    </>
  );
}
