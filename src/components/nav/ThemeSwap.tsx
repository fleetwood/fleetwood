'use client'
import { useThemeStore } from '@/store/useThemeStore';
import { IconMoon, IconSun } from '../icons/Icons';

const ThemeSwap = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <label className="swap swap-rotate
        btn btn-sm group-hover:btn-md btn-circle 
        btn-base-100 text-base-content border-none
        hover:btn-secondary hover:text-white 
        transition-all duration-200 ease-in-out
      ">
    <input 
      type="checkbox" 
      className="theme-controller"  
      checked={isDark}
      onChange={() => {}}
      />

    <IconSun className="swap-off h-4 w-4 group-hover:h-6 group-hover:w-6" onClick={toggleTheme} />

    <IconMoon className="swap-on h-4 w-4 group-hover:h-6 group-hover:w-6" onClick={toggleTheme} />
  </label>
  )
}

export default ThemeSwap