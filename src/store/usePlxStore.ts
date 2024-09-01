import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PlxState = {
  active: boolean,
  toggle: () => void;
};

export const usePlxStore = create<PlxState>()(
  persist(
    (set) => ({
      active: false,
      toggle: (b?: boolean) => set((state) => ({ 
        ...state, active: b ?? !state.active
      })),
    }),
    {
      name: 'plx-storage',
    }
  )
);