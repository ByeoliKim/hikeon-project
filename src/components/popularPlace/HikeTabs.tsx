"use client";

import { useState } from "react";
import { hikes } from "@/data/hikes";
import HikeCard from "./HikeCard";
import { HikeTag } from "@/types/hike";

const tabs = [
  { label: "#바다가 있어요", value: "sea" },
  { label: "#눈꽃산행", value: "snow" },
  { label: "#완만한 능선", value: "ridge" },
  { label: "#야경이 멋져요", value: "night" },
  { label: "#이슬 암릉 조망", value: "view" },
];

export default function HikeTabs() {
  const [activeTab, setActiveTab] = useState<HikeTag>("sea");
  const filtered = hikes.filter((h) => h.tags.includes(activeTab));

  return (
    <div>
      {/* 탭 */}
      <div className="flex gap-2 overflow-x-auto mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value as HikeTag)}
            className={`px-3 py-2 rounded-full text-sm ${activeTab === tab.value ? "bg-blue-500 text-white" : "bg-gray-100"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* 리스트 */}
      <div className="space-y-4">
        {filtered.map((hike) => (
          <HikeCard key={hike.id} hike={hike} />
        ))}
      </div>
    </div>
  );
}
