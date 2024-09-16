import dayjs, { Dayjs } from "dayjs";
import TimelineItem from "./TimelineItem";
import { timelineConfig, TimelineEvent, TimelineItemProps } from "@/types/props/timeline/TimelineProps";

const matchYearMonth = (date: Dayjs, match: Dayjs) => {
  return date.year() === match.year() && date.month() === match.month() 
}

type TimelineProps = {
  lifeEvents: TimelineEvent[];
  worldEvents: TimelineEvent[];
};

const Timeline = ({ lifeEvents, worldEvents }: TimelineProps) => {
  const monthWidth = timelineConfig.width.month;
  const yearWidth = timelineConfig.width.year;

  const getDuration = (startDate: Dayjs, endDate?: Dayjs) => {
    if (!endDate) return { months: 1, yearsPassed: 0 };
    const start = dayjs(startDate).startOf('month');
    const end = dayjs(endDate).endOf('month');
    const yearsPassed = end.year() - start.year();
    const months = end.diff(start, 'month')-yearsPassed;
    return { months, yearsPassed };
  }
  
  const getWidth = (duration: { months: number, yearsPassed: number }) => {
    return (duration.months * monthWidth) + (duration.yearsPassed * yearWidth);
  };

  const lifeItems: TimelineEvent[] = lifeEvents.map((e) => {
    const startDate = dayjs(e.startDate);
    const endDate = e.endDate ? dayjs(e.endDate) : startDate.add(6, "month");
    const duration = getDuration(startDate, endDate);
    const width = getWidth(duration);

    return {
      ...e,
      width,
      duration: duration.months
    } as TimelineEvent;
  });
  
  const worldItems = worldEvents.map((e) => { return {...e,width: monthWidth * 6,}})

  const getTimelineItems = (): TimelineItemProps[] => {
    const timelineItems: TimelineItemProps[] = [];
    let date = timelineConfig.startDate;
    while (date.isBefore(timelineConfig.endDate)) {
      timelineItems.push({
        date,
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
        <div className={`calendar-item flex items-center text-base-content/50 w-[${monthWidth}px]`}>
          {timelineData.map((item) => <TimelineItem key={item.date.toISOString()} {...item} />)}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
