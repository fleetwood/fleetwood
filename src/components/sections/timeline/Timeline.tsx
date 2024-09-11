import chalk from "chalk";
import { addMonths, format, getMonth, isAfter, isEqual, isSameMonth } from "date-fns";
import Image from "next/image";

export type TimelineEvent = {
  startDate: string;
  endDate?: string;
  title: string;
  subTitle?: string;
  summary?: string;
  icon?: string;
};

export type TimelineItem = TimelineEvent & {
  startPosition: number;
  endPosition?: number | undefined;
};

export type TimelineDate = {
  startDate: Date;
  endDate?: Date;
  lifeEvent?: TimelineItem;
  worldEvent?: TimelineItem;
};

function getTotalMonths(s: Date | string, e: Date | string): number;
function getTotalMonths(event: TimelineEvent): number;
function getTotalMonths(
  s: Date | string | TimelineEvent,
  e?: Date | string
): number {
  let start: Date;
  let end: Date;

  if (typeof s === "object" && "startDate" in s) {
    start = new Date(s.startDate);
    end = s.endDate ? new Date(s.endDate) : new Date();
  } else {
    start ??= new Date(s);
    end ??= new Date(e!);
  }

  return (
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    (end.getDate() >= start.getDate() ? 1 : 0)
  );
}

const timeline = {
  startDate: new Date(1972, 1, 1),
  endDate: new Date(),
  totalMonths: getTotalMonths(new Date(1972, 1, 1), new Date()),
};

type TimelineProps = {
  lifeEvents: TimelineEvent[];
  worldEvents: TimelineEvent[];
};

const Timeline = ({ lifeEvents, worldEvents }: TimelineProps) => {
  const generateTimelineData = (): TimelineDate[] => {
    const months: TimelineDate[] = [];
    let start = timeline.startDate;
    let current = timeline.endDate;

    const getTimelineItem = (evt?: TimelineEvent) => {
      if (!evt) return undefined;
      const dateStart = getTotalMonths(
        timeline.startDate,
        new Date(evt.endDate ?? evt.startDate)
      );
      const dateEnd = getTotalMonths(
        timeline.startDate,
        new Date(evt.startDate)
      );
      const startPosition = 100 - (dateStart / timeline.totalMonths) * 100;
      const endPosition = dateEnd !== dateStart ? 100 - (dateEnd / timeline.totalMonths) * 100 : undefined;
      // console.log("getTimelineItem()", {
      //   title: evt.title,
      //   dateStart: {
      //     dateStart,
      //     startPosition,
      //     totalMonths: timeline.totalMonths,
      //   },
      //   dateEnd: {
      //     dateEnd,
      //     endPosition,
      //     totalMonths: timeline.totalMonths,
      //   },
      // });
      return {
        ...evt,
        startPosition,
        endPosition,
      };
    };

    while (isAfter(current, addMonths(start, -1))) {
      const lifeEvent = lifeEvents.find((d) =>
        isSameMonth(new Date(d.startDate), current)
      );
      const worldEvent = worldEvents.find((d) =>
        isSameMonth(new Date(d.startDate), current)
      );

      months.push({
        startDate: current,
        lifeEvent: getTimelineItem(lifeEvent),
        worldEvent: getTimelineItem(worldEvent),
      });

      current = addMonths(current, -1);
    }
    return months;
  };

  const timelineData = generateTimelineData();

  return (
    <div className="timeline timeline-container overflow-x-auto border border-error">
      <div className="timeline relative flex flex-col gap-1 min-w-fit border border-primary"> 
        <div className="timeline life-timeline relative life-timeline h-16">
          {timelineData
            .filter((e) => e.lifeEvent !== undefined)
            .map(({ lifeEvent }) => (
              <div
                key={lifeEvent!.startDate}
                className="
                    absolute top-0 p-2 rounded-md min-w-fit
                    flex flex-nowrap gap-2 items-center
                    text-pretty line-clamp-1 
                    bg-secondary text-secondary-content 
                    shadow-md shadow-secondary-content
                  "
                style={{
                  left: `${lifeEvent!.startPosition}%`,
                  width: `${lifeEvent!.endPosition}%`,
                }}
              >
                {lifeEvent?.icon && (
                  <Image
                    height={40}
                    width={40}
                    alt={lifeEvent.title}
                    src={`/img/${lifeEvent.icon}`}
                  />
                )}
                <h4 className="">{lifeEvent!.title}</h4>
                <div className="flex gap-2 min-w-fit font-semibold">
                  {lifeEvent!.endDate &&
                    format(new Date(lifeEvent!.endDate), "MMM yyyy - ")}
                  {format(new Date(lifeEvent!.startDate), "MMM yyyy")}
                </div>
              </div>
            ))}
        </div>

        <div className="timeline calendar-timeline relative calendar-timeline flex items-center text-base-content/50">
          {timelineData.map((month) =>
            getMonth(month.startDate) === 0 ? (
              <div
                key={month.startDate.toDateString()}
                className="min-w-fit px-2 bg-accent text-accent-content rounded-md"
              >
                {format(month.startDate, "yyyy")}
              </div>
            ) : (
              <div
                key={month.startDate.toDateString()}
                className="min-w-fit px-1 text-xs"
              >
                {format(month.startDate, "MMM").substring(0, 1)}
              </div>
            )
          )}
        </div>

        <div className="timeline event-timeline relative event-timeline h-16">
          {timelineData
            .filter((e) => e.worldEvent !== undefined)
            .map(({ worldEvent }) => (
              <div
                key={worldEvent!.startDate}
                className="absolute top-0 p-2 text-sm rounded-md bg-base-200 text-base-content shadow shadow-base-content"
                style={{
                  left: `${worldEvent!.startPosition}%`,
                }}
              >
                <div>{worldEvent!.title}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
