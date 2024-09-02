'use client'
import { ChildContent } from "@fleetwood/types/ReactChildren"
import ParallaxSwap from "./ParallaxSwap"
import ThemeSwap from "./ThemeSwap"
import { ClassName } from "@fleetwood/types/ClassName"
import { twMerge } from "tailwind-merge"
import Link from "next/link"

const NavButton = ({ children, href }: ChildContent & {href: string}) => {
  return (
    <Link
      className="
      transition-colors duration-200 ease-in-out 
      h-full w-full p-4
      cursor-pointer text-center 
      bg-primary/0 hover:text-white hover:bg-primary"
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
        "relative flex items-center justify-evenly z-10",
        "font-light uppercase",
        "w-full max-w-5xl rounded-b-xl px-4 opacity-50 ",
        "bg-info text-neutral-content",
        "hover:opacity-100",
        className)}
      >
      <NavButton href={'/'}>home</NavButton>
      <NavButton href={'/resume'}>resume</NavButton>
      <NavButton href={'/about'}>about</NavButton>
      <span className="flex gap-2">
        <ParallaxSwap />
        <ThemeSwap />
      </span>
    </nav>
  )
}

export default MainNav
