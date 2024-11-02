'use client'
import { useHeroDrawerStore } from '@/store/useHeroDrawerStore';
import { ClassName } from '@/types/ClassName';
import React, { useEffect, useRef } from 'react';
import { LuX } from 'react-icons/lu';

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
          bg-primary dark:bg-secondary rounded-lg p-4 
          overflow-y-auto overflow-x-hidden
          transition-all duration-300 ease-in-out
          shadow-lg shadow-black
        ${isOpen ? 'scale-100' : 'scale-95'}
      `}>
        <div className='flex justify-end w-full' onClick={() => setContent(null)}>
          <div className="p-2 rounded-full cursor-pointer
            bg-accent text-accent-content 
            border-2 border-accent-content
            hover:bg-base-100 hover:text-base-content
            transition-all duration-200 ease-in-out
            ">
            <LuX className='w-full h-full' />
          </div>
        </div>
        {content}
      </div>
    </div>
  );
};

export default HeroDrawer;