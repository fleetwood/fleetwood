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
      <div ref={containerRef} className="container relative h-full overflow-y-auto overscroll-none" style={{ scrollbarWidth: 'none', overscrollBehavior: 'none' }}>
        <div className={twMerge(topScroll ? "h-6" : "h-0", "transition-all duration-200 ease-in-out sticky top-0 inset-x-0 pointer-events-none z-10 overflow-hidden")}>
          <div className="w-fit mx-auto p-1 bg-primary text-primary-content rounded-b-md">
            <LuChevronUpSquare />
          </div>
        </div>
        {children}
        <div className={twMerge(bottomScroll ? "h-6" : "h-0", "transition-all duration-200 ease-in-out sticky bottom-0 inset-x-0 pointer-events-none z-10 overflow-hidden")}>
          <div className="w-fit mx-auto p-1 bg-primary text-primary-content rounded-t-md">
            <LuChevronDownSquare />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContentSection;