/* eslint-disable @next/next/no-img-element */
import { TimelineEvent } from "@/types/props/timeline/TimelineProps";

export const RoleIcon = ({ event }: { event: TimelineEvent }) => {
  return event.icon ?
      <div className="min-h-20 min-w-20 max-h-20 max-w-20 py-2 mr-4 float-left select-none" >
        <img
          alt={event.title}
          src={`/img/${event.icon}`}
          className="w-full h-full object-contain pointer-events-none"
        />
    </div>
   : null
}