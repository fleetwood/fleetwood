import { IconLightbulb } from '@fleetwood/components/icons/Icons'
import { ClassName } from '@fleetwood/types/ClassName'
import { ChildContent, ReactNodeContent } from '@fleetwood/types/ReactChildren'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export type MilestoneProps = ClassName & ChildContent & {
  title : ReactNodeContent
  icon ?: string
  ltr  ?: boolean
  first?: boolean
  last ?: boolean
}

const MilestoneTitle = (props:MilestoneProps) => {
  return (
    <div className="bg-primary opacity-80 group-hover:opacity-100 p-2 py-2 rounded-full flex items-center w-full gap-4">
      {props.icon && <Image height={60} width={60} alt={props.title as string} src={`/img/${props.icon}`} />} 
      <h4 className='font-extralight px-6'>{props.title}</h4> 
    </div>
  )
}

const Milestone = (props:MilestoneProps) => {
  return (
    <li className={twMerge("gap-x-4 group cursor-default text-base-content opacity-80 hover:opacity-100", props.className)}>
      {!props.first && <hr className="bg-primary group-hover:bg-white transition-colors duration-200 ease-in-out" />}
      <div className={twMerge("timeline-start", props.ltr && "timeline-box bg-base-100 p-4")}>
        {props.ltr ? props.children : <MilestoneTitle {...props} />}
      </div>
      <div className={twMerge("timeline-middle")}>
        <div className="rounded-full p-2 bg-primary group-hover:bg-white transition-colors duration-200 ease-in-out">
          <IconLightbulb className="h-6 w-6" />
        </div>
      </div>
      <div className={twMerge("timeline-end", !props.ltr && "timeline-box bg-base-100 p-4")}>
        {props.ltr ? <MilestoneTitle {...props} /> : props.children}
      </div>
      {!props.last && <hr className="bg-primary group-hover:bg-white transition-colors duration-200 ease-in-out" />}
    </li>
  )
}

export default Milestone