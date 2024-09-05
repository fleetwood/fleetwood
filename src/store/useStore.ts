import {create} from 'zustand';

interface GlobalState {
  count: number;
  increment: () => void;
}

const useGlobalStore = create<GlobalState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useGlobalStore;