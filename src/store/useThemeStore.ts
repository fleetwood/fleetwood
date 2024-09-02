import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
  theme: 'light' | 'dark';
  isDark: boolean,
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      isDark: false,
      toggleTheme: () => {
        set((state) => ({ 
          theme: state.theme === 'light' ? 'dark' : 'light',
          isDark: state.theme === 'light' ? true : false,
        }))
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);