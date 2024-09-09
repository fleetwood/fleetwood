import { ClassName } from "@/types/ClassName";
import { ChildContent } from "@/types/ReactChildren";
import React from "react";
import { twMerge } from "tailwind-merge";

type HeroProps = ChildContent &
  ClassName & {
    title: string;
    h2?: boolean
    h3?: boolean
  };

const Hero = (props: HeroProps) => {
  return (
    <div
      className={twMerge(
        "w-full p-10 pb-14 mt-10 mb-20 rounded-2xl bg-glass text-base-content",
        "border border-opacity-20",
        "border-b-base-100 border-r-base-100 ",
        "border-t-black border-l-black ",
        props.className
      )}
    >
      {props.h2 ? <h2 className="text-center mt-0">{props.title}</h2>
      :props.h3 ? <h3 className="text-center mt-0">{props.title}</h3>
      : <h1 className="text-center mt-0">{props.title}</h1>
      }
      <div className="divider divider-primary-content"></div>
      {props.children}
    </div>
  );
};

export default Hero;
