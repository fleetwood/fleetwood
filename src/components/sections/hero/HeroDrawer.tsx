'use client'
import { useHeroDrawerStore } from '@/store/useHeroDrawerStore';
import { ClassName } from '@/types/ClassName';
import React, { useEffect, useRef } from 'react';

type HeroDrawerProps = ClassName;

const HeroDrawer = ({ className }: HeroDrawerProps) => {
  const { isOpen, content, setContent } = useHeroDrawerStore();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setContent(null);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setContent]);

  return (
    <div className={`
      fixed inset-0 shadow-lg z-50
      transition-all duration-300 ease-in-out
      ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      flex items-center justify-center
      ${className}
    `}>
      <div 
        ref={drawerRef}
        className={`
          w-[calc(100%-4rem)] h-[calc(100%-4rem)]
          bg-base-100 rounded p-4 
          overflow-y-auto overflow-x-hidden
        transition-all duration-300 ease-in-out
        ${isOpen ? 'scale-100' : 'scale-95'}
      `}>
        {content}
      </div>
    </div>
  );
};

export default HeroDrawer;