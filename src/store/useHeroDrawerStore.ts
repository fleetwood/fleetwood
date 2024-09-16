import { create } from 'zustand'

type HeroDrawerStore = {
  isOpen: boolean
  content: React.ReactNode | null
  setContent: (content: React.ReactNode | null) => void
}

export const useHeroDrawerStore = create<HeroDrawerStore>((set) => ({
  isOpen: false,
  content: null,
  setContent: (content) => set({ content, isOpen: content !== null }),
}))