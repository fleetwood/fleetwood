import { addMonths, isAfter, isSameMonth } from 'date-fns';
import TimelineMonth from './TimelineMonth';

export type TimelineEvent = {
  startDate : string;
  endDate  ?: string;
  title     : string;
  subTitle ?: string;
  summary  ?: string;
  icon     ?: string;
};

export type TimelineDate = {
  startDate  : Date;
  endDate   ?: Date;
  span       : number
  lifeEvent ?: TimelineEvent
  worldEvent?: TimelineEvent
};

type TimelineProps = {
  lifeEvents : TimelineEvent[];
  worldEvents: TimelineEvent[];
};

const startDate = new Date(2020, 0, 1); // Jan 1972
const endDate = new Date(); // Current date

const getLifeSpan = (event?: TimelineEvent) => {
  if (!event) return 1;

  const start = new Date(event.startDate);
  const end = new Date(event.endDate ?? event.startDate)

  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();

  return months + 1; 
};

const generateMonths = (start: Date, end: Date, lifeEvents: TimelineEvent[], worldEvents: TimelineEvent[]): TimelineDate[] => {
  const months: TimelineDate[] = [];
  let current = end;
  while (isAfter(current, start)) {
    const lifeEvent = lifeEvents.filter((event: TimelineEvent) => {
      const d = new Date(event.endDate ?? event.startDate);
      return isSameMonth(d, current)
    })[0]??undefined;

    const worldEvent = worldEvents.filter((event: TimelineEvent) => {
      const d = new Date(event.endDate ?? event.startDate);
      return isSameMonth(d, current)
    })[0] ?? undefined;

    months.push({ 
      startDate: current, 
      endDate: lifeEvent && lifeEvent.endDate ? new Date(lifeEvent.endDate) : addMonths(current, 1), 
      span: getLifeSpan(lifeEvent),
      lifeEvent, 
      worldEvent
    });
    
    current = addMonths(current, -1);
  }
  return months;
}

const Timeline = ({ lifeEvents, worldEvents }: TimelineProps) => {
  const months = generateMonths(startDate, endDate, lifeEvents, worldEvents);
  return (
    <div>
      <div className="w-full overflow-x-auto">
        <div className="grid grid-flow-col items-center w-full">
          {months.map(( month, index) => (
            <TimelineMonth month={month} key={index} />
          ))}
        </div>
      </div>

      <div className="font-mono p-4 bg-black text-accent">
        {JSON.stringify(months)}
      </div>
    </div>
  );
};

export default Timeline;