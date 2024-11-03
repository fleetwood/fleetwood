'use client';
import { ChildContent } from '@/types/ReactChildren';

const ContentSection = ({ children }: ChildContent) => {

  return (
    <main role='content-main' className="flex-grow overflow-y-auto overscroll-none">
      <div className="w-full">
        {children}
      </div>
    </main>
  );
}

export default ContentSection;