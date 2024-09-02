import { ClassName } from "@fleetwood/types/ClassName";
import React from "react";
import { twMerge } from "tailwind-merge";

const Footer = ({className}:ClassName) => {
  return (
    <div className={twMerge("rounded-t-lg bg-info text-info-content p-4 w-full max-w-5xl relative", className)}>
      <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        this is a link
      </div>
    </div>
  );
};

export default Footer;
