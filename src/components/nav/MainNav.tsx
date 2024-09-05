'use client'
import { ChildContent } from "@fleetwood/types/ReactChildren"
import ParallaxSwap from "./ParallaxSwap"
import ThemeSwap from "./ThemeSwap"
import { ClassName } from "@fleetwood/types/ClassName"
import { twMerge } from "tailwind-merge"
import Link from "next/link"
import { FleetwoodLogo } from "../icons/Icons"

const NavButton = ({ children, href }: ChildContent & {href: string}) => {
  return (
    <Link
      className="
      transition-all duration-200 ease-in-out 
      h-full w-full py-1
      cursor-pointer text-center 
      bg-primary/0
      hover:text-white hover:bg-primary group-hover:py-4"
      href={href}
    >
      {children}
    </Link>
  )
}

const MainNav = ({className}:ClassName) => {
  return (
    <nav
      className={twMerge(
        "transition-all duration-200 ease-in-out",
        "relative flex items-center justify-evenly z-10 group",
        "font-light uppercase",
        "w-full max-w-5xl rounded-b-xl px-4 opacity-50 ",
        "bg-info text-info-content",
        "hover:opacity-100",
        className)}
      >
      <Link href={'/'} className="btn border-none btn-circle btn-base-100 hover:btn-secondary mr-4 my-2 scale-75 group-hover:scale-100"><FleetwoodLogo height={20} /></Link>  
      <NavButton href={'/resume'}>resume</NavButton>
      <NavButton href={'/about'}>about</NavButton>
      <span className="flex align-middle gap-2">
        <ParallaxSwap />
        <ThemeSwap />
      </span>
    </nav>
  )
}

export default MainNav
