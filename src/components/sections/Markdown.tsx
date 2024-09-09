import { ChildContent } from '@/types/ReactChildren';
import React from 'react';
import { remark } from 'remark';
import html from 'remark-html';

const Markdown = async ({ children }: ChildContent) => {
  const processedContent = await remark()
    .use(html)
    .process(children as string);
  
  const htmlContent = processedContent.toString();

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default Markdown;