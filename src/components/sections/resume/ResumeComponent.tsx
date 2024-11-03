'use client'

import { useHeroDrawerStore } from "@/store/useHeroDrawerStore";
import { TimelineEvent } from "@/types/props/timeline/TimelineProps";
import dayjs from 'dayjs';
import { ruid } from "../../../../@/lib/utils";
import EventDetail from "../timeline/EventDetail";
import { RoleIcon } from "../roles/RoleIcon";
import { RoleTitle } from "../roles/RoleTitle";
import EventHeader from "../timeline/EventHeader";

type ResumeComponentProps = {
  lifeEvents: TimelineEvent[];
}

const ResumeComponent = ({ lifeEvents }: ResumeComponentProps) => {
  const { setIsActive, setContent, setHeader } = useHeroDrawerStore()

  const handleClick = (event: TimelineEvent) => {
    setIsActive(true)
    setContent(<EventDetail event={event} />)
    setHeader(<EventHeader event={event} />)
  }

  return (
    <section>
      {lifeEvents.map((event: TimelineEvent) => (
        <div key={ruid()} className="
            box dark:box-dark
            bg-base-100/25 hover:bg-base-100 
            my-4 p-4 rounded-xl cursor-pointer
            "
          onClick={() => handleClick(event)}
        >
          <RoleIcon event={event} />
          <RoleTitle event={event} />
        </div>
      ))}
    </section>
  )
}

export default ResumeComponent
