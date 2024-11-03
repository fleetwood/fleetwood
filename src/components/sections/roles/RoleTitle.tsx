import { TimelineEvent } from "@/types/props/timeline/TimelineProps"
import dayjs from "dayjs"

export const RoleTitle = ({ event }: { event: TimelineEvent }) => {
  return (
    <div className="flex flex-col py-2 px-4 min-w-0 overflow-hidden relative select-none">
      <div className="flex truncate group-hover:whitespace-nowrap select-none">
        {event.endDate && <span className="select-none">{dayjs(event.endDate).format("YYYY MMM - ")}</span>}
        <span className="select-none">{dayjs(event.startDate).format("YYYY MMM")}</span>
      </div>
      <div className="text-2xl truncate group-hover:whitespace-nowrap select-none">{event.subTitle}</div>
      <div className="font-semibold text-lg truncate group-hover:whitespace-nowrap select-none">{event.title}</div>
    </div>
  )
}