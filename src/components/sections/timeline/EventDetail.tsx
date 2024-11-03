import { TimelineEvent } from "@/types/props/timeline/TimelineProps"
import Quote from "../Quote"

const EventDetail = ({event}:{event:TimelineEvent}) => {
  return (
    <div>
      {event.highlight && <Quote>{event.highlight}</Quote>}
      {event.summary && 
        <div 
          className="py-4 text-sm md:text-lg role-detail"
          dangerouslySetInnerHTML={{ __html: event.summary }}
        />
      }
    </div>
  )
}

export default EventDetail