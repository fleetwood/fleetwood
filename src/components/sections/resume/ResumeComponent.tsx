'use client'

import { TimelineEvent } from "@/types/props/timeline/TimelineProps";
import { ruid } from "../../../../@/lib/utils";
import dayjs from 'dayjs'
import { useHeroDrawerStore } from "@/store/useHeroDrawerStore";
import EventDetail from "../timeline/EventDetail";

type ResumeComponentProps = {
  lifeEvents: TimelineEvent[];
}

const ResumeComponent = ({ lifeEvents }: ResumeComponentProps) => {
  const {setIsActive, setContent} = useHeroDrawerStore()

  const handleClick = (event: TimelineEvent) => {
    setIsActive(true)
    setContent(<EventDetail event={event} />)
  }

  return (
    <>
      <section>
        {lifeEvents.map((event:TimelineEvent) => (
          <div key={ruid()} className="
            box dark:box-dark
            bg-base-100/25 hover:bg-base-100 
            my-4 p-4 rounded-xl cursor-pointer
            "
            onClick={() => handleClick(event)}
          >
            {event?.icon && 
              <div className="min-h-20 min-w-20 max-h-20 max-w-20 py-2 mr-4 float-left select-none" >
                <img 
                  alt={event.title} 
                  src={`/img/${event.icon}`} 
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            }
            <p className="">{dayjs(event.startDate).format("YYYY MMM")} - {event.endDate ? dayjs(event.endDate).format("YYYY MMM") : "Present"}</p>
            <h3>{event.subTitle}</h3>
            <h4>{event.title}</h4>
          </div>
        ))}
      </section>
    </>
  )
}

export default ResumeComponent
