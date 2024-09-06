import { ChildContent } from "@fleetwood/types/ReactChildren"
import Link from "next/link"

const NavMenuItem = ({ children, href }: ChildContent & {href: string}) => {
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

export default NavMenuItem