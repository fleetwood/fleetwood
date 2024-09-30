import { useHeroDrawerStore } from '@/store/useHeroDrawerStore';
import { useState, useRef, useCallback, useEffect } from 'react';

export const useTimelineScroll = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const [isInertiaActive, setIsInertiaActive] = useState(false);
  const [endTime, setEndTime] = useState(0);
  const [endPosition, setEndPosition] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const inertiaRef = useRef<number | null>(null);
  const {setIsActive:  setHeroActive} = useHeroDrawerStore()

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (timelineRef.current?.offsetLeft || 0));
    setScrollLeft(timelineRef.current?.scrollLeft || 0);
    setLastTime(Date.now());
    setVelocity(0);
    setHeroActive(false);
    if (inertiaRef.current) {
      cancelAnimationFrame(inertiaRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (Math.abs(velocity) > 0.1) {
      setIsInertiaActive(true);
      const currentTime = Date.now();
      setEndTime(currentTime + 1000);
      if (timelineRef.current) {
        setEndPosition(timelineRef.current.scrollLeft + velocity * 1000 * 0.5);
      }
      inertiaRef.current = requestAnimationFrame(handleInertia);
    } else {
      setIsInertiaActive(false);
      setHeroActive(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (timelineRef.current?.offsetLeft || 0);
    const dx = x - startX;
    const currentTime = Date.now();
    const dt = currentTime - lastTime;
    const newVelocity = dx / dt;

    if (timelineRef.current) {
      timelineRef.current.scrollLeft = scrollLeft - dx;
    }

    setVelocity(newVelocity);
    setLastTime(currentTime);
  };

  const handleInertia = useCallback(() => {
    if (!timelineRef.current) return;

    const currentTime = Date.now();
    const remainingTime = Math.max(0, endTime - currentTime);
    const progress = 1 - (remainingTime / 500); // 500ms total duration

    // Easing function (ease-out cubic)
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    if (remainingTime > 0) {
      const easedProgress = easeOut(progress);
      const targetPosition = scrollLeft + (endPosition - scrollLeft) * easedProgress;
      timelineRef.current.scrollLeft = targetPosition;

      inertiaRef.current = requestAnimationFrame(handleInertia);
    } else {
      setIsInertiaActive(false);
      setHeroActive(true);
    }
  }, [endTime, endPosition, scrollLeft]);

  const handleClick = (e: React.MouseEvent) => {
    if (isDragging || isInertiaActive) {
      setHeroActive(false);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  useEffect(() => {
    const timeline = timelineRef.current;
    if (timeline) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        timeline.scrollLeft += e.deltaY;
      };
      timeline.addEventListener('wheel', handleWheel, { passive: false });
      return () => timeline.removeEventListener('wheel', handleWheel);
    }
  }, []);

  return {
    timelineRef,
    isDragging,
    isInertiaActive,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
    handleClick,
  };
};
