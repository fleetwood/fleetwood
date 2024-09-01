import { ChildContent } from "@fleetwood/types/ReactChildren";
import ParallaxSwap from "./ParallaxSwap";
import ThemeSwap from "./ThemeSwap";

const MainNav = () => {
  const NavButton = ({ children }: ChildContent & {}) => {
    return (
      <div
        className="
        transition-colors duration-200 ease-in-out 
        w-full p-4 z-[1]
        cursor-pointer text-center text-base-content
        hover:text-white hover:bg-primary"
      >
        {children}
      </div>
    );
  };
  return (
    <nav
      className="
        transition-all duration-200 ease-in-out
        flex items-center justify-evenly 
        mx-4 px-4 w-full 
        rounded-b-xl
        font-light uppercase
        bg-neutral text-neutral-content
        "
      >
      <NavButton>home</NavButton>
      <NavButton>resume</NavButton>
      <NavButton>about</NavButton>

      <ParallaxSwap />
      <ThemeSwap />
    </nav>
  );
};

export default MainNav;
