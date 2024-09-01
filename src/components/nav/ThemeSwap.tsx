'use client'
import { useThemeStore } from '@fleetwood/store/useThemeStore';
import { IconMoon, IconSun } from '../icons/Icons';

const ThemeSwap = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <label className="swap swap-rotate
        btn btn-circle btn-accent text-accent-content 
        hover:btn-secondary hover:bg-accent hover:text-white 
        ">
    <input 
      type="checkbox" 
      className="theme-controller"  
      checked={isDark}
      onChange={() => {}}
      />

    <IconSun className="swap-off h-10 w-10 fill-current" onClick={toggleTheme} />

    <IconMoon className="swap-on h-10 w-10 fill-current" onClick={toggleTheme} />
  </label>
  )
}

export default ThemeSwap