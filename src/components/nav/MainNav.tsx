import { ChildContent } from "@fleetwood/types/ReactChildren"
import ParallaxSwap from "./ParallaxSwap"
import ThemeSwap from "./ThemeSwap"

const MainNav = () => {
  const NavButton = ({ children }: ChildContent & {}) => {
    return (
      <div
        className="
        transition-colors duration-200 ease-in-out 
        h-full w-full p-4
        cursor-pointer text-center text-black
        hover:text-white hover:bg-primary"
      >
        {children}
      </div>
    )
  }
  return (
    <nav
      className="
        transition-all duration-200 ease-in-out
        group relative flex items-center justify-evenly 
        font-light uppercase
        w-full max-w-5xl rounded-b-xl -my-4 px-4
        opacity-50 bg-base-100
        hover:my-0 hover:opacity-100
        "
      >
      <NavButton>home</NavButton>
      <NavButton>resume</NavButton>
      <NavButton>about</NavButton>
      <span className="flex gap-2">
        <ParallaxSwap />
        <ThemeSwap />
      </span>
    </nav>
  )
}

export default MainNav
