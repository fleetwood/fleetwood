'use client'
import { useHeroDrawerStore } from '@/store/useHeroDrawerStore';
import { ClassName } from '@/types/ClassName';
import React, { useEffect, useRef } from 'react';
import { LuX } from 'react-icons/lu';

type HeroDrawerProps = ClassName & {

};

const HeroDrawer = ({ className }: HeroDrawerProps) => {
  const { isOpen, content, setContent, header, setHeader } = useHeroDrawerStore();
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
      fixed inset-0 shadow-lg z-50 backdrop-blur-md
      transition-all duration-300 ease-in-out
      ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      flex items-center justify-center
      ${className}
    `}>
      <div 
        ref={drawerRef}
        className={`
          w-full max-w-6xl max-h-[90vh]
          bg-primary dark:bg-secondary rounded-lg
          overflow-y-auto overflow-x-hidden
          transition-all duration-300 ease-in-out
          shadow-lg shadow-black relative
        ${isOpen ? 'scale-100' : 'scale-95'}
      `}>
        <div className='sticky top-0 flex justify-end w-full p-4 bg-primary dark:bg-secondary z-10'>
        {header && (
          <div className="flex-grow">
            {header}
          </div>
        )}
          <div className="
            rounded-full cursor-pointer
            bg-accent text-accent-content
            border-2 border-accent-content
            hover:bg-base-100 hover:text-base-content
            transition-all duration-200 ease-in-out
            w-8 h-8
            flex items-center justify-center
          ">
            <LuX className="w-6 h-6" />
          </div>
        </div>
        <div className="p-4 pt-0">
          {content}
        </div>
      </div>
    </div>
  );
};

export default HeroDrawer;