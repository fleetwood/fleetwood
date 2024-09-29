'use client'
import { usePlxStore } from '@/store/usePlxStore'
import { useThemeStore } from '@/store/useThemeStore'
import { ClassName } from '@/types/ClassName'
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
    <div className={twMerge("w-screen h-screen overflow-hidden", className)}>
      <div
        className={twMerge(
          isDark 
            ? "bg-[url('/img/dark-lg-bg.png')] xl:bg-[url('/img/dark-xl-bg.png')] 2xl:bg-[url('/img/dark-2xl-bg.png')]" 
            : "bg-[url('/img/light-lg-bg.png')] xl:bg-[url('/img/light-xl-bg.png')] 2xl:bg-[url('/img/light-2xl-bg.png')]",
            
          "bg-center bg-no-repeat",
          "transition-transform duration-200 ease-out",
          
          "w-[105vw] h-[105vh]",
          "object-cover",
          "-ml-[2.5vw] -mt-[2.5vh]",
        )}
        style={{
          transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px)`,
          backgroundSize: 'cover',
        }}
      />
    </div>
  )
}

export default ParallaxBg