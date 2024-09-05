import { IconLightbulb } from '@fleetwood/components/icons/Icons'
import { ClassName } from '@fleetwood/types/ClassName'
import { ChildContent, ReactNodeContent } from '@fleetwood/types/ReactChildren'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type MilestoneProps = ClassName & ChildContent & {
  title   : ReactNodeContent
  ltr    ?: boolean
  first?: boolean
  last?: boolean
}

const Milestone = (props:MilestoneProps) => {
  return (
    <li className="gap-x-4 group cursor-default text-base-content opacity-80 hover:opacity-100">
      {!props.first && <hr className="bg-primary group-hover:bg-white transition-colors duration-200 ease-in-out" />}
      <div className={twMerge("timeline-start", props.ltr && "timeline-box bg-base-100 p-4")}>
        {props.ltr ? props.children : <h3 className='bg-primary px-8 py-2 rounded-full'>{props.title}</h3>}
      </div>
      <div className={twMerge("timeline-middle")}>
        <div className="rounded-full p-2 bg-primary group-hover:bg-white transition-colors duration-200 ease-in-out">
          <IconLightbulb className="h-6 w-6" />
        </div>
      </div>
      <div className={twMerge("timeline-end", !props.ltr && "timeline-box bg-base-100 p-4")}>
        {props.ltr ? <h3 className='bg-primary px-8 py-2 rounded-full'>{props.title}</h3> : props.children}
      </div>
      {!props.last && <hr className="bg-primary group-hover:bg-white transition-colors duration-200 ease-in-out" />}
    </li>
  )
}

export default Milestone