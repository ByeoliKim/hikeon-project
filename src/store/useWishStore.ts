import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishState = {
  wishedIds: number[];
  toggleWish: (id: number) => void;
  clearWish: () => void;
};

export const useWishStore = create<WishState>()(
  persist(
    (set) => ({
      wishedIds: [],

      toggleWish: (id) =>
        set((state) => {
          const exists = state.wishedIds.includes(id);
          return {
            wishedIds: exists
              ? state.wishedIds.filter((x) => x !== id)
              : [...state.wishedIds, id],
          };
        }),

      clearWish: () => set({ wishedIds: [] }),
    }),
    {
      name: "wish-courses", // localStorage key
    },
  ),
);
