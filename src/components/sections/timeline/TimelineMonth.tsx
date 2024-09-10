import { format } from 'date-fns';
import { twMerge } from "tailwind-merge";
import { TimelineDate } from "./Timeline";
import Image from "next/image";

const TimelinePoint = ({month}:{month: TimelineDate}) => {
  return month.startDate.getMonth() === 0 ? (
    <div data-event="year-event" className="text-center">
      <div className="bg-secondary rounded-full px-2 py-1">
        {format(month.startDate, "yyyy")}
      </div>
    </div>
  ) : (
    <div data-event="month-event" className="text-center text-base-content px-2 py-1">|</div>
  )
}

const TimelineMonth = ({month}:{month: TimelineDate}) => {
  const {lifeEvent, worldEvent} = month
  return (
    <div data-event="timeline-point" className='relative'>
      {lifeEvent && (
        <div data-event="life-event"
          className={twMerge(
            "p-2 bg-primary text-primary-content absolute top-0 left-0",
            `col-span-${month.span}`
          )}
        >
          <div className="flex flex-nowrap gap-3 items-center min-w-fit">
            {lifeEvent.icon && <Image height={40} width={40} alt={lifeEvent.title} src={`/img/${lifeEvent.icon}`} />}
            <div>{lifeEvent.title}</div>
            <div>{lifeEvent.subTitle}</div>
          </div>
        </div>
      )}

      <TimelinePoint month={month} />

      {month.worldEvent && (
        <div data-event="world-event" className="p-2 w-fit bg-base-200 text-base-content absolute bottom-0 left-0">
          {month.worldEvent.title}
        </div>
      )}
    </div>
  );
};

export default TimelineMonth;
