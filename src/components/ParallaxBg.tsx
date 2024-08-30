'use client'
import React, { useEffect, useState } from 'react'

const ParallaxBg = ({active = true}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: MouseEvent) => {
    if (!active) return
    setMousePos({ x: event.clientX, y: event.clientY })
  }

  useEffect(() => {

    if (active) {
      window.addEventListener("mousemove", handleMouseMove)
    } else {
      window.removeEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [active])

  return (
    <div className="absolute inset-0">
      <div
        className="bg-[url('/img/bg.png')] bg-cover bg-no-repeat -ml-[600px] -mt-[200px] h-[1536px] w-[3072px] transition-transform duration-75 ease-in-out"
        style={{transform: `translate(${mousePos.x * -0.1}px, ${mousePos.y * -0.1}px)`}}
      />
    </div>
  )
}

export default ParallaxBg