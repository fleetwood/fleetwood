'use client'
import { addArticle } from "@/lib/linguistics";
import { ClassName } from "@/types/ClassName";
import { RoleProp } from "@/types/RoleProp";
import Image from "next/image"; // Import the Image component
import { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import { Transition } from '@headlessui/react'
import { ChildContent } from "@/types/ReactChildren";

type HeroProps = ClassName & {
    items: RoleProp[]
  };

const RoleHero = ({className, items}: HeroProps) => {
  const [roles] = useState<RoleProp[]>(items)
  const [index, setIndex] = useState(0);
  const [role, setRole] = useState<RoleProp>(roles[index])
  const [show, setShow] = useState(true);

  const increment = () => {
    setShow(false);
    setIndex((i) => (i + 1) % roles.length)
  }

  const decrement = () => {
    setShow(false);
    setIndex((i) => (i - 1 + roles.length) % roles.length)
  }
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRole(roles[index])
      setShow(true)
    }, 600);
  
    return () => clearTimeout(timeoutId);
  }, [index, roles]);

  return (
    <div
      className={twMerge(
        "relative group w-full md:my-10 rounded-2xl",
        "text-base-content bg-glass",
        "border border-opacity-20 overflow-hidden",
        "border-b-base-100 border-r-base-100 ",
        "border-t-black border-l-black ",
        className
      )}
    >
      {role &&
      <div className="flex flex-col md:flex-row sticky top-0 justify-evenly w-full h-full">
        <div className="flex-shrink-0 h-[360px] w-full md:w-[360px] relative">
          <Transition show={show} appear={true}
            enterFrom= {twMerge('absolute left-1/2 -translate-x-1/2 md:left-auto md:-right-48 transition-all ease-out opacity-0')}
            enter    = {twMerge('transition-all ease-out duration-500')}
            leave    = {twMerge('transition-all ease-out duration-500')}
            leaveTo  = {twMerge('absolute left-1/2 -translate-x-1/2 md:left-auto md:-right-48 transition-all ease-out opacity-0')} 
            >
            <Image 
              className="absolute left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0" 
              src={role.img.src} 
              alt={role.img.alt} 
              width={role.img.width} 
              height={role.img.height} 
            />
          </Transition>
        </div>
        <div className="flex-grow min-w-1/2 px-10">
          <div className="hidden md:visible divider divider-primary-content"></div>
          <div className="flex flex-grow h-full w-full justify-stretch py-2 md:py-0">
            <div className="flex flex-col overflow-hidden">
              <div className="w-full h-8">
                <h4 className={twMerge("overflow-hidden whitespace-nowrap relative")}>
                  I&apos;m&nbsp;
                  <Transition show={show} appear={true}
                    enter    = 'absolute transition-all ease-out duration-500'
                    enterFrom= 'absolute opacity-0 ml-10 spacing-wide'
                    leave    = 'absolute transition-all ease-out duration-500'
                    leaveTo  = 'absolute opacity-0 spacing-wide'
                    >
                    <span className="text-primary">{addArticle(role.role)}</span>
                  </Transition>
                </h4>
              </div>
              <div className="flex-grow w-full my-2 text-justify relative">
                <Transition show={show} appear={true}
                  enter    = 'transition-all ease-out duration-500 text-justify'
                  enterFrom= 'opacity-0 text-justify'
                  leave    = 'transition-all ease-out duration-500 text-justify'
                  leaveTo  = 'opacity-0 text-justify'
                  >
                    <span>
                      {role.description}
                    </span>
                </Transition>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      }
      <div className="join absolute w-full h-full top-0 left-1/2 -translate-x-1/2"> 
        <HeroNav onClick={decrement} />
        <div className="flex-grow"></div>
        <HeroNav onClick={increment} right />
      </div>
    </div>
  );
};

const HeroNav = ({onClick, right = false}: {onClick: () => void, right?: boolean}) => {
  return (
    <div className={twMerge(
      "transition-all duration-100 ease-linear cursor-pointer",
      "join-item flex items-center",
      "bg-base-100/0 opacity-20",
      "hover:ml-0 hover:p-4 hover:bg-base-100 hover:opacity-100",
      right ? "-ml-4" : "-mr-4"
      )} 
      onClick={onClick}
      >
        {right ? 
          <LuChevronRight className="w-8 h-8" />
          :
          <LuChevronLeft className="w-8 h-8" />
        }
    </div>
)}


export default RoleHero;



