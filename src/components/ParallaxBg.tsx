'use client'
import { usePlxStore } from '@fleetwood/store/usePlxStore'
import { useThemeStore } from '@fleetwood/store/useThemeStore'
import { ClassName } from '@fleetwood/types/ClassName'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const ParallaxBg = ({className}:ClassName) => {
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
    <div className={twMerge("", className)}>
      <div
        className={twMerge(
          isDark 
            ? "bg-[url('/img/dark-lg-bg.png')] xl:bg-[url('/img/dark-xl-bg.png')] 2xl:bg-[url('/img/dark-2xl-bg.png')]" 
            : "bg-[url('/img/light-lg-bg.png')] xl:bg-[url('/img/light-xl-bg.png')] 2xl:bg-[url('/img/light-2xl-bg.png')]",
            
          "bg-center bg-cover bg-no-repeat",
          "transition-transform duration-200 ease-out",

          "lg:-ml-[10px] lg:-mt-[10px]",
          "xl:-ml-[20px] xl:-mt-[20px]",
          "2xl:-ml-[40px] 2xl:-mt-[40px]",
          
          "h-[1024px] w-[2446]", 
          "lg:h-[1024px] lg:w-[2446px]", 
          "xl:h-[1280px] xl:w-[3057px]", 
          "2xl:h-[1536px] 2xl:w-[3668px]", 
          "5xl:h-[1715px] 5xl:w-[4096px]", 
          
        )}
        style={{transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px)`}}
      />
    </div>
  )
}

export default ParallaxBg