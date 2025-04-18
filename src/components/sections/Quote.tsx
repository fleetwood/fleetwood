import { ChildContent } from "@/types/ReactChildren";
import React from "react";
import { LuQuote } from "react-icons/lu";

const Quote = ({ children, author }: { author?: string } & ChildContent) => {
  return (
    <div className="bg-black/50 text-white 
      text-center flex gap-4 justify-around
      p-8 mx-auto my-4 rounded-lg 
      ">
      <LuQuote className="opacity-50 min-h-16 min-w-16 text-accent scale-x-[-1]" />
      <div>
        <div className="italic text-2xl font-thin font-serif">{children}</div>
        {author && <div className="font-sans">- {author}</div>}
      </div>
      <LuQuote className="opacity-50 min-h-16 min-w-16 text-accent" />
    </div>
  );
};

export default Quote;
