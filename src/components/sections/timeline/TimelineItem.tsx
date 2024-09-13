import dayjs from "dayjs";
import LifeEvent from "./LifeEvent";
import type { TimelineItemProps } from "./Timeline";
import WorldEvent from "./WorldEvent";

const TimelineItem = ({lifeEvent, worldEvent, date, width}:TimelineItemProps) => {
  const isYear = dayjs(date).month() === 0
  return (
    <div 
      key={date.toISOString()} 
      className="relative h-56 py-28 text-sm flex flex-col items-center justify-center"
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
