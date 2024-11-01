'use client'

import { TimelineEvent } from "@/types/props/timeline/TimelineProps";
import { ruid } from "../../../../@/lib/utils";
import dayjs from 'dayjs'

type ResumeComponentProps = {
  lifeEvents: TimelineEvent[];
}

const ResumeComponent = ({ lifeEvents }: ResumeComponentProps) => {
  return (
    <>
      <section>
        {lifeEvents.map((event:TimelineEvent) => (
          <div key={ruid()} className="my-4 bg-base-300/25 p-4 rounded-xl">
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
