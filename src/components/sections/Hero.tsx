import { ClassName } from "@fleetwood/types/ClassName";
import { ChildContent } from "@fleetwood/types/ReactChildren";
import React from "react";
import { twMerge } from "tailwind-merge";

type HeroProps = ChildContent &
  ClassName & {
    title: string;
  };

const Hero = (props: HeroProps) => {
  return (
    <div
      className={twMerge(
        "w-full p-20 my-20 rounded-2xl",
        "border border-opacity-20",
        "border-b-neutral border-r-neutral ",
        "border-t-black border-l-black ",
        props.className
      )}
    >
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Hero;
