'use client'
import { addArticle } from "@fleetwood/lib/linguistics";
import { ClassName } from "@fleetwood/types/ClassName";
import { RoleProp } from "@fleetwood/types/RoleProp";
import Image from "next/image"; // Import the Image component
import { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import { Transition } from '@headlessui/react'

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
        "relative group w-full mt-10 mb-20 rounded-2xl",
        "text-base-content bg-glass",
        "border border-opacity-20 overflow-hidden",
        "border-b-neutral border-r-neutral ",
        "border-t-black border-l-black ",
        className
      )}
    >
      {role &&
      <div className="flex sticky top-0 justify-evenly w-full h-full">
        <div className="flex-grow min-w-1/2 px-10">
          <h2 className="text-center mt-4">I&apos;m <span className="font-bold">Fleetwood</span></h2>
          <div className="divider divider-info-content"></div>
          <div className="flex flex-grow h-full w-full justify-stretch">
            <div className="flex flex-col overflow-hidden">
              <div className="w-full h-8">
                <h4 className={twMerge("overflow-hidden whitespace-nowrap relative")}>
                  I am&nbsp;
                  <Transition show={show} appear={true}
                    enter    = 'absolute transition-all ease-out duration-500'
                    enterFrom= 'absolute opacity-0 ml-10 spacing-wide'
                    leave    = 'absolute transition-all ease-out duration-500'
                    leaveTo  = 'absolute opacity-0 spacing-wide'
                    >
                    <span className="text-accent">{addArticle(role.role)}</span>
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
        <div className="flex-shrink-0 h-[360px] w-[360px] relative">
          <Transition show={show} appear={true}
            enterFrom= {twMerge('absolute -right-48 transition-all ease-out opacity-0')}
            enter    = {twMerge('transition-all ease-out duration-500')}
            leave    = {twMerge('transition-all ease-out duration-500')}
            leaveTo  = {twMerge('absolute -right-48 transition-all ease-out opacity-0')} 
            >
            <Image className="absolute right-0" src={role.img.src} alt={role.img.alt} width={role.img.width} height={role.img.height} />
          </Transition>
        </div>
      </div>
      }
      <div className="join absolute w-full h-full top-0 left-1/2 -translate-x-1/2"> 
        <div className="bg-base-100/20 transition-all duration-100 ease-linear pl-8 cursor-pointer -ml-8 hover:ml-0 hover:p-4 join-item opacity-50 hover:opacity-100 flex items-center" onClick={decrement}>
          <LuChevronLeft className="w-8 h-8" />
        </div>

        <div className="flex-grow"></div>
        <div className="bg-base-100/20 transition-all duration-100 ease-linear pr-8 cursor-pointer -mr-8 hover:mr-0 hover:p-4 join-item opacity-50 hover:opacity-100 flex items-center" onClick={increment}>
          <LuChevronRight className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default RoleHero;
