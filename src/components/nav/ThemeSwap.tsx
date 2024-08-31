import React, { useEffect, useState } from 'react'
import { IconMoon, IconSun } from '../icons/Icons'
import { useThemeStore } from '@fleetwood/store/useThemeStore';

const ThemeSwap = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <label className="swap swap-rotate">
    {/* this hidden checkbox controls the state */}
    <input 
      type="checkbox" 
      className="theme-controller"  
      checked={isDark}
      />

    {/* sun icon */}
    <IconSun className="swap-off h-10 w-10 fill-current" onClick={toggleTheme} />

    {/* moon icon */}
    <IconMoon className="swap-on h-10 w-10 fill-current" onClick={toggleTheme} />
  </label>
  )
}

export default ThemeSwap