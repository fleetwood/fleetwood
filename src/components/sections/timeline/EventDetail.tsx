import { TimelineEvent } from "@/types/props/timeline/TimelineProps"
import dayjs from "dayjs"
import Quote from "../Quote"
import { RoleIcon } from "../roles/RoleIcon"
import { RoleTitle } from "../roles/RoleTitle"

const EventDetail = ({event}:{event:TimelineEvent}) => {
  console.log('EventDetail',event)
  return (
    <div>
      <RoleIcon event={event} />
      <RoleTitle event={event} />
      {event.highlight && <Quote>{event.highlight}</Quote>}
      {event.summary && 
        <div 
          className="py-4 text-sm md:text-lg"
          dangerouslySetInnerHTML={{ __html: event.summary }}
        />
      }
    </div>
  )
}

export default EventDetail