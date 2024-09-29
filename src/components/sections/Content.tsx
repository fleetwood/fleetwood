'use client';
import { ChildContent } from '@/types/ReactChildren';
import { useEffect, useRef, useState } from 'react';
import { LuChevronDownSquare, LuChevronUpSquare } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';

const ContentSection = ({ children }: ChildContent) => {
  const [topScroll, setTopScroll] = useState(false);
  const [bottomScroll, setBottomScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!containerRef.current) return
    const scrollY = containerRef.current.scrollTop;
    const { scrollHeight, clientHeight } = containerRef.current;      
    const isAtBottom = scrollY + clientHeight >= scrollHeight;

    setTopScroll(() => scrollY > 1);
    setBottomScroll(() => scrollHeight > clientHeight && !isAtBottom);
  };

  const checkScrollStates = () => {
    if (!containerRef.current) return;
    const { scrollHeight, clientHeight } = containerRef.current;      
    const scrollY = containerRef.current.scrollTop;

    setBottomScroll(scrollHeight > clientHeight && scrollY + clientHeight < scrollHeight);
  };

  const pageUp = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: -containerRef.current.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  const pageDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: containerRef.current.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      checkScrollStates()
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <main className="flex-grow overflow-y-auto my-8 overscroll-none" style={{ scrollbarWidth: 'none', overscrollBehavior: 'none' }}>
      <div ref={containerRef} className="relative h-full overflow-y-auto overscroll-none flex flex-col items-center" style={{ scrollbarWidth: 'none', overscrollBehavior: 'none' }}>
        <div 
          className={twMerge(topScroll ? "h-6" : "h-0", "transition-all duration-200 ease-in-out sticky top-0 inset-x-0 z-10 overflow-hidden w-full")}
          onClick={pageUp}
        >
          <div className="w-fit mx-auto p-1 bg-primary text-primary-content opacity-50 hover:opacity-100 rounded-b-md cursor-pointer">
            <LuChevronUpSquare />
          </div>
        </div>
        <div className="w-full">
          {children}
        </div>
        <div 
          className={twMerge(bottomScroll ? "h-6" : "h-0", "transition-all duration-200 ease-in-out sticky bottom-0 inset-x-0 z-10 overflow-hidden w-full")}
          onClick={pageDown}
        >
          <div className="w-fit mx-auto p-1 bg-primary text-primary-content opacity-50 hover:opacity-100 rounded-t-md cursor-pointer">
            <LuChevronDownSquare />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContentSection;