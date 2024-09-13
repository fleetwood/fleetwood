import dayjs, { Dayjs } from "dayjs";
import TimelineItem from "./TimelineItem";

export type TimelineEvent = {
  startDate : string;
  endDate  ?: string;
  title     : string;
  subTitle ?: string;
  summary  ?: string;
  icon     ?: string;
  width     : number
};

export type TimelineItemProps = {
  date       : Dayjs,
  lifeEvent ?: TimelineEvent
  worldEvent?: TimelineEvent
  width      : number
};

const PIXELS_PER_MONTH = 50;
const START_DATE = dayjs("1972-01-01");
const END_DATE = dayjs();

const timeline = {
  startDate: START_DATE,
  endDate: END_DATE,
  totalMonths: END_DATE.diff(START_DATE, "months")
}

const matchYearMonth = (date: Dayjs, match: Dayjs) => {
  return date.year() === match.year() && date.month() === match.month() 
}

type TimelineProps = {
  lifeEvents: TimelineEvent[];
  worldEvents: TimelineEvent[];
};

const Timeline = ({ lifeEvents, worldEvents }: TimelineProps) => {const totalMonths = timeline.totalMonths;
  const timelineWidth = totalMonths * PIXELS_PER_MONTH;

  const calculateWidthInPixels = (startDate: string, endDate?: string) => {
    const start = dayjs(startDate);
    const end = endDate ? dayjs(endDate) : start.add(1, 'month');
    const durationInMonths = end.diff(start, 'month');
    return Math.max(durationInMonths * PIXELS_PER_MONTH, PIXELS_PER_MONTH); // Ensure minimum width of one month
  };

  const lifeItems:TimelineEvent[] = lifeEvents.map((e) => {
    const startDate = dayjs(e.startDate)
    const endDate   = e.endDate ? dayjs(e.endDate) : startDate.add(6, "month")
    return {
      ...e,
      width: calculateWidthInPixels(e.startDate, e.endDate),
    } as TimelineEvent
  });
  
  const worldItems = worldEvents.map((e) => {
    return {
      ...e,
      width: PIXELS_PER_MONTH * 6,
  }})

  const getTimelineItems = (): TimelineItemProps[] => {
    const timelineItems: TimelineItemProps[] = [];
    let date = timeline.startDate;
    while (date.isBefore(timeline.endDate)) {
      timelineItems.push({
        date,
        width: PIXELS_PER_MONTH,
        lifeEvent: lifeItems.find((e) => matchYearMonth(dayjs(e.endDate ?? e.startDate), date)),
        worldEvent: worldItems.find((e) => matchYearMonth(dayjs(e.startDate), date))
      })
      date = date.add(1, "month");
    }
    return timelineItems.reverse()
  }

  const timelineData: TimelineItemProps[] = getTimelineItems();
  
  return (
    <div className="w-full overflow-y-clip overflow-x-auto">
      <div className="flex flex-col gap-1"> 
        <div className={`calendar-item flex items-center text-base-content/50 w-[${timelineWidth}px]`}>
          {timelineData.map((item) => <TimelineItem key={item.date.toISOString()} {...item} />)}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
