import { ChildContent } from "@/types/ReactChildren"
import Link from "next/link"

const NavMenuItem = ({ children, href }: ChildContent & {href: string}) => {
  return (
    <Link
      className="
      transition-all duration-200 ease-in-out 
      h-full w-full py-6
      cursor-pointer text-center 
      bg-primary/0
      hover:text-white hover:bg-primary"
      href={href}
    >
      {children}
    </Link>
  )
}

export default NavMenuItem