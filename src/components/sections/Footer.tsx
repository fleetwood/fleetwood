import { ClassName } from "@fleetwood/types/ClassName";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import NavButton from "../ui/buttons/NavButton";

const Footer = ({className}:ClassName) => {
  return (
    <div className={twMerge("flex gap-4 justify-end rounded-t-lg bg-base-100 text-base-content p-4 w-full max-w-5xl relative", className)}>
      <NavButton href="https://github.com/fleetwood" className='p-3 bg-base-200 hover:bg-secondary'><LuGithub className="h-6 w-6" /></NavButton>
      <NavButton href="https://www.linkedin.com/in/jfleetwood/" className='p-3 bg-base-200 hover:bg-secondary'><LuLinkedin className="h-6 w-6" /></NavButton>
    </div>
  );
};

export default Footer;
