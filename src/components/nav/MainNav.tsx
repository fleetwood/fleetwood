'use client'
import { ClassName } from "@fleetwood/types/ClassName"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { FleetwoodLogo } from "../icons/Icons"
import ParallaxSwap from "./ParallaxSwap"
import ThemeSwap from "./ThemeSwap"
import NavMenuItem from "./NavMenuItem"

const MainNav = ({className}:ClassName) => {
  return (
    <nav
      className={twMerge(
        "transition-all duration-200 ease-in-out",
        "relative flex items-center justify-evenly z-10 group",
        "font-white uppercase",
        "w-full max-w-5xl rounded-b-xl px-4 opacity-50 ",
        "bg-base-100 text-base-content",
        "hover:opacity-100",
        className)}
      >
      <Link href={'/'} className="btn border-none btn-circle btn-base-100 hover:btn-secondary mr-4 my-2 scale-75 group-hover:scale-100"><FleetwoodLogo height={20} /></Link>  
      <NavMenuItem href={'/resume'}>resume</NavMenuItem>
      <NavMenuItem href={'/about'}>about</NavMenuItem>
      <span className="flex align-middle gap-2">
        <ParallaxSwap />
        <ThemeSwap />
      </span>
    </nav>
  )
}

export default MainNav
