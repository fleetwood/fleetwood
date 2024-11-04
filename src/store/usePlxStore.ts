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
      toggle: (b?: boolean) => set((state) => ({
        active: b !== undefined ? b : !state.active,
      })),
    }),
    {
      name: 'plx-storage',
    }
  )
);
