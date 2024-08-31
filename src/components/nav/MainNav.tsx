import { BindState } from "@fleetwood/types/BindState";
import { ChildContent } from "@fleetwood/types/ReactChildren";
import ParallaxSwap from "./ParallaxSwap";
import ThemeSwap from "./ThemeSwap";

const MainNav = ({bindState}:{bindState: BindState<boolean>}) => {
  const NavButton = ({ children }: ChildContent & {}) => {
    return (
      <div
        className="
        cursor-pointer w-full 
        text-center p-4 
        transition-colors duration-200 ease-in-out 
        text-base-content
        hover:text-white hover:bg-primary"
      >
        {children}
      </div>
    );
  };
  return (
    <nav
      className="
          flex items-center justify-evenly mx-4 px-4
          w-full rounded-b-xl
          font-light uppercase
          transition-all duration-200 ease-in-out 
          bg-gradient-to-b from-primary to-accent
          -my-4 opacity-50
          hover:my-0 hover:opacity-100
          "
    >
      <NavButton>home</NavButton>
      <NavButton>resume</NavButton>
      <NavButton>about</NavButton>

      <ParallaxSwap bindState={bindState} />
      <ThemeSwap />
    </nav>
  );
};

export default MainNav;
