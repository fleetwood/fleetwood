import { create } from 'zustand'

type HeroDrawerStore = {
  isOpen: boolean
  content: React.ReactNode | null
  setContent: (content: React.ReactNode | null) => void
  isActive: boolean
  setIsActive: (isActive: boolean) => void
}

export const useHeroDrawerStore = create<HeroDrawerStore>((set, get) => ({
  isOpen: false,
  content: null,
  setContent: (content) => {
    const { isActive } = get()
    if (isActive) {
      set({ content, isOpen: content !== null })
    }
  },
  isActive: true,
  setIsActive: (isActive) => set({ isActive })
}))