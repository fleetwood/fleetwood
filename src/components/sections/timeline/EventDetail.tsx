import { TimelineEvent } from "@/types/props/timeline/TimelineProps"

const EventDetail = ({event}:{event:TimelineEvent}) => {
  return (
    <div>
      <h1>{event.title}</h1>
    </div>
  )
}

export default EventDetail