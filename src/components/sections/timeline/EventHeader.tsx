import { TimelineEvent } from "@/types/props/timeline/TimelineProps"
import { RoleIcon } from "../roles/RoleIcon"
import { RoleTitle } from "../roles/RoleTitle"

const EventHeader = ({ event }: { event: TimelineEvent }) => {
  return (
    <div role="event-header">
      <RoleIcon event={event} />
      <RoleTitle event={event} />
    </div>
  )
}

export default EventHeader
