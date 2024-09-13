import dayjs from "dayjs";
import LifeEvent from "./LifeEvent";
import WorldEvent from "./WorldEvent";
import { timelineConfig, TimelineItemProps } from "@/types/props/timeline/TimelineProps";

const TimelineItem = ({lifeEvent, worldEvent, date}:TimelineItemProps) => {
  const isYear = dayjs(date).month() === 0
  const width = timelineConfig.width.month
  const duration = timelineConfig.totalMonths
  return (
    <div 
      key={date.toISOString()} 
      className="
        relative h-56 py-28 text-sm 
        flex flex-col items-center justify-center
        border-l border-base-content
        "
        data-width={width}
        data-duration={duration}
      style={{minWidth: `${width}px`, maxWidth: `${width}px`}}
    >
      {lifeEvent && <LifeEvent item={lifeEvent} />}
      {isYear 
        ? <span className="bg-base-200 text-base-content rounded-full px-2">{dayjs(date).year()}</span>
        : <span className="w-full text-center">{dayjs(date).format("MMM").substring(0,1)}</span>}
      {worldEvent && <WorldEvent item={worldEvent} />}
    </div>
  );
};

export default TimelineItem;
