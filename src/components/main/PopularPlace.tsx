import HikeTabs from "@/components/popularPlace/HikeTabs";

export default function PopularPlace() {
  return (
    <>
      <div className="px-4 pb-12.5 mt-8.5">
        <h2 className="pb-5 text-(--font-color) font-bold text-2xl">
          떠오르는 인기 산행지
        </h2>
        <HikeTabs />
      </div>
    </>
  );
}
