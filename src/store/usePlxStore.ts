import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PlxState = {
  active: boolean;
  toggle: (b?: boolean) => void;
};

export const usePlxStore = create<PlxState>()(
  persist(
    (set) => ({
      active: false,
      toggle: () => set((state) => ({
          active: state.active = !state.active,
        })),
    }),
    {
      name: 'plx-storage',
    }
  )
);
