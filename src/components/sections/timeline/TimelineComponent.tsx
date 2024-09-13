'use client'

import React, { useRef, useEffect, useState } from 'react'
import TimelineItemProps from './TimelineItem'

type Role = {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  title: string
  startDate: Date
  endDate: Date | null
  icon: string | null
  summary: string
}

interface TimelineProps {
  roles: Role[]
}

export default function Timeline({ roles }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    const handleMouseOver = (e: MouseEvent) => {
      const { clientX } = e
      const timelineRect = timeline.getBoundingClientRect()
      const timelineWidth = timelineRect.width
      const mouseX = clientX - timelineRect.left

      if (mouseX < timelineWidth * 0.2) {
        // Left 20%
        const scrollSpeed = (timelineWidth * 0.2 - mouseX) / (timelineWidth * 0.2) * 10
        setScrollInterval(setInterval(() => {
          timeline.scrollLeft -= scrollSpeed
        }, 16))
      } else if (mouseX > timelineWidth * 0.8) {
        // Right 20%
        const scrollSpeed = (mouseX - timelineWidth * 0.8) / (timelineWidth * 0.2) * 10
        setScrollInterval(setInterval(() => {
          timeline.scrollLeft += scrollSpeed
        }, 16))
      }
    }

    const handleMouseOut = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval)
        setScrollInterval(null)
      }
    }

    timeline.addEventListener('mouseover', handleMouseOver)
    timeline.addEventListener('mouseout', handleMouseOut)

    return () => {
      timeline.removeEventListener('mouseover', handleMouseOver)
      timeline.removeEventListener('mouseout', handleMouseOut)
    }
  }, [scrollInterval])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - timelineRef.current!.offsetLeft)
    setScrollLeft(timelineRef.current!.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - timelineRef.current!.offsetLeft
    const walk = (x - startX) * 2
    timelineRef.current!.scrollLeft = scrollLeft - walk
  }

  return (
    <div
      ref={timelineRef}
      className="timeline timeline-snap-icon max-md:timeline-compact timeline-horizontal overflow-x-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {roles.map((role, index) => (
        <TimelineItem role={role} key={index} />
      ))}
    </div>
  )
}