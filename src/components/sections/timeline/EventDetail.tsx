import { TimelineEvent } from "@/types/props/timeline/TimelineProps"
import dayjs from "dayjs"

const EventDetail = ({event}:{event:TimelineEvent}) => {
  return (
    <div className="ml-6">
      {event.subTitle && <h2 className="text-4xl">{event.subTitle}</h2>}
      <h4 className="text-lg md:text-2xl">{event.title}</h4>
      <div className="text-sm md:text-2xl">{event.startDate && dayjs(event.startDate).format('MMM YYYY - ')}{event.endDate && dayjs(event.endDate).format('MMM YYYY')}</div>
    </div>
  )
}

export default EventDetail