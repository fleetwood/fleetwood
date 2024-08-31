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
    <li className="gap-x-4">
      {!props.first && <hr className="bg-primary" />}
      <div className={twMerge("timeline-start", !props.ltr && "timeline-box")}>
        {props.ltr ? <h3 className='text-primary bg-info px-8 py-2 rounded-full'>{props.title}</h3> : props.children}
      </div>
      <div className={twMerge("timeline-middle")}>
        <div className="rounded-full p-2 text-sm bg-primary text-primary-content">
          <IconLightbulb className="h-6 w-6" />
        </div>
      </div>
      <div className={twMerge("timeline-end", props.ltr && "timeline-box")}>
        {props.ltr ? props.children : <h3 className='text-primary bg-info px-8 py-2 rounded-full'>{props.title}</h3>}
      </div>
      {!props.last && <hr className="bg-primary" />}
    </li>
  )
}

export default Milestone