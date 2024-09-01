'use client'
import { usePlxStore } from '@fleetwood/store/usePlxStore'
import { useThemeStore } from '@fleetwood/store/useThemeStore'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const ParallaxBg = () => {
  const {active} = usePlxStore()
  const {isDark} = useThemeStore()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!active) return
    
    const handleMouseMove = (event: MouseEvent) => {
      if (!active) return
      setMousePos({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [active])

  return (
    <div className="absolute inset-0">
      <div
        className={twMerge(
          isDark 
            ? "bg-[url('/img/dark-high-bg.png')]" 
            : "bg-[url('/img/light-high-bg.png')]",
          "bg-center bg-cover bg-no-repeat",
          "-ml-[50px] -mt-[50px]",
          "h-[1715px] w-[4096px]",
          "transition-transform duration-200 ease-out z-0"
        )}
        style={{transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px)`}}
      />
    </div>
  )
}

export default ParallaxBg