import { timelineConfig, TimelineItemProps } from "@/types/props/timeline/TimelineProps";
import LifeEvent from "./LifeEvent";
import WorldEvent from "./WorldEvent";

const TimelineItem = ({lifeEvent, worldEvent, date}:TimelineItemProps) => {
  const isYear = date.month() === 0;
  const width = isYear ? timelineConfig.width.year : timelineConfig.width.month;

  return (
    <div 
      key={date.toISOString()} 
      className="
        relative h-72 py-28 text-sm
        flex flex-col items-center justify-center cursor-grab
      "
      data-width={width}
      style={{minWidth: `${width}px`, maxWidth: `${width}px`}}
    >
      {lifeEvent && <LifeEvent item={lifeEvent} />}
      {isYear 
        ? <span className="select-none bg-base-200 text-base-content rounded-full px-2">{date.year()}</span>
        : <span className="select-none w-full text-center">{date.format("MMM").substring(0,1)}</span>}
      {worldEvent && <WorldEvent item={worldEvent} />}
    </div>
  );
};

export default TimelineItem;
