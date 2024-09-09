import { ClassName } from '@/types/ClassName'
import { ChildContent } from '@/types/ReactChildren'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type NavButtonProps = ClassName & ChildContent & {
  href   ?: string
  onClick?: (param:unknown) => void
}

const NavButton = (props: NavButtonProps) => {
  return props.onClick ?
    <div className={twMerge('p-3 bg-primary text-primary-content btn-circle border-none scale-90 hover:scale-100 transition-all duration-200 ease-in-out', props.className)} onClick={props.onClick}>{props.children}</div>
    :
    <Link className={twMerge('p-3 bg-primary text-primary-content btn-circle border-none scale-90 hover:scale-100 transition-all duration-200 ease-in-out', props.className)} href={props.href!}>{props.children}</Link> 
}

export default NavButton