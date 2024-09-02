import { ClassName } from "@fleetwood/types/ClassName";
import { ChildContent } from "@fleetwood/types/ReactChildren";
import Image, { ImageProps } from "next/image"; // Import the Image component
import React from "react";
import { twMerge } from "tailwind-merge";

type HeroProps = ChildContent &
  ClassName & {
    title: string;
    img  : ImageProps
  };

const ImgHero = ({className, children, title, img}: HeroProps) => {
  return (
    <div
      className={twMerge(
        "w-full mt-10 mb-20 rounded-2xl bg-base-100/50 text-base-content",
        "border border-opacity-20 overflow-hidden",
        "border-b-neutral border-r-neutral ",
        "border-t-black border-l-black ",
        className
      )}
    >
      <div className="flex justify-evenly w-full">
        <div className="w-1/2">
          {title && <h1 className="text-center mt-0">{title}</h1>}
          {title && <div className="divider divider-info-content"></div>}
          {children}
        </div>
        <div className="w-1/2">
          <Image src={img.src} alt={img.alt} width={img.width} height={img.height} />
        </div>
      </div>
    </div>
  );
};

export default ImgHero;
