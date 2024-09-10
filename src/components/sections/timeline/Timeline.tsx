import chalk from "chalk";
import { time } from "console";
import { addMonths, format, getMonth, isAfter, isSameMonth } from "date-fns";

export type TimelineEvent = {
  startDate : string;
  endDate  ?: string;
  title     : string;
  subTitle ?: string;
  summary  ?: string;
  icon     ?: string;
};

export type TimelineItem = TimelineEvent & {
  startPosition : number,
  endPosition  ?: number | undefined
}

export type TimelineDate = {
  startDate  : Date;
  endDate   ?: Date;
  lifeEvent ?: TimelineItem;
  worldEvent?: TimelineItem;
};


function getTotalMonths(s: Date | string, e: Date | string): number;
function getTotalMonths(event: TimelineEvent): number;
function getTotalMonths(s: Date | string | TimelineEvent, e?: Date | string): number {
  let start: Date;
  let end: Date;

  if (typeof s === 'object' && 'startDate' in s) {
    start = new Date(s.startDate);
    end = s.endDate ? new Date(s.endDate) : new Date();
  } else {
    start ??= new Date(s); 
    end ??= new Date(e!);
  }

  return (end.getFullYear() - start.getFullYear()) * 12 + 
    (end.getMonth() - start.getMonth()) + 
    (end.getDate() >= start.getDate() ? 1 : 0); 
}

const timeline = {
  startDate: new Date(1972, 5, 26),
  endDate: new Date(),
  totalMonths: getTotalMonths(new Date(1972, 5, 26), new Date())
}

const generateTimelineData = (
  lifeEvents: TimelineEvent[],
  worldEvents: TimelineEvent[]
): TimelineDate[] => {
  const months: TimelineDate[] = [];
  let start = timeline.startDate
  let current = timeline.endDate

  const getTimelineItem = (evt?: TimelineEvent) => {
    if (!evt) return undefined;
    const dateStart = getTotalMonths(timeline.startDate, new Date(evt.startDate))
    const dateEnd = getTotalMonths(timeline.startDate, new Date(evt.endDate ?? evt.startDate))
    const startPosition = (dateStart/timeline.totalMonths)*100;
    const endPosition = (dateEnd/timeline.totalMonths)*100;
    
    return {
      ...evt,
      startPosition,
      endPosition
    }
  };

  while (isAfter(current, start)) {
    const lifeEvent = lifeEvents.find((d) => isSameMonth(new Date(d.startDate), current));
    const worldEvent = worldEvents.find((d) => isSameMonth(new Date(d.startDate), current));

    months.push({
      startDate: current,
      lifeEvent: getTimelineItem(lifeEvent),
      worldEvent: getTimelineItem(worldEvent),
    });

    current = addMonths(current, -1);
  }
  return months;
};

console.log(chalk.green(timeline))

type TimelineProps = {
  lifeEvents : TimelineEvent[];
  worldEvents: TimelineEvent[];
};

const Timeline = ({ lifeEvents, worldEvents }: TimelineProps) => {
  const timelineData = generateTimelineData(lifeEvents, worldEvents);

  return (
    <div className="">
      
      <div className="flex flex-col gap-1 overflow-x-auto min-h-fit">

          <div className="relative h-48">
            {timelineData.filter((e) => e.lifeEvent !== undefined).map(({lifeEvent}) => (
              <div key={lifeEvent!.startDate}
                className="absolute top-0 rounded-md bg-secondary"  
                style={{ 
                  left: `${lifeEvent!.startPosition}%` ,
                  width: `${lifeEvent!.endPosition}%` 
                }}
              >
                <div>{lifeEvent!.title} {lifeEvent!.startDate}</div>
              </div>
            ))}
          </div>

          <div className="flex">
            {timelineData.map((month) => getMonth(month.startDate) === 0
              ? <div key={month.startDate.toDateString()} className="min-w-fit px-1 bg-accent rounded-md">{format(month.startDate, "yyyy")}</div>
              : <div key={month.startDate.toDateString()} className="min-w-[1rem]">|</div>
            )}
          </div>
        
          <div className="relative h-48">
            {timelineData.filter((e) => e.worldEvent !== undefined).map(({worldEvent}) => (
              <div key={worldEvent!.startDate}
                className="absolute top-0 rounded-md bg-base-200 -translate-x-1/2"  
                style={{ 
                  left: `${worldEvent!.startPosition}%` ,
                }}
              >
                <div>{worldEvent!.title}</div>
              </div>
            ))}
          </div>
      
      </div>

      <div className="font-mono p-4 bg-black text-accent">
        {JSON.stringify(timelineData, null, 2)}
      </div>
    </div>
  );
};

export default Timeline;
