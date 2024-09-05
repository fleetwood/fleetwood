import { create } from 'zustand';

type ArrayState = {
  array: any[];
  index: number;
  setArray: (array: ArrayState['array']) => void;
  increment: () => void;
  decrement: () => void;
}

const useArrayStore = create<ArrayState>((set) => ({
  array: [],
  index: 0,
  setArray: (newArray) => set({ array: newArray }),
  increment: () =>
    set((state) => ({ 
      index: (state.index + 1) % state.array.length
    })),
  decrement: () =>
    set((state) => ({
      index: (state.index - 1 + state.array.length) % state.array.length
    })),
}));

export default useArrayStore;
