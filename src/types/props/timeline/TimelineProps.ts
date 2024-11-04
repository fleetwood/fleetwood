import dayjs, { Dayjs } from 'dayjs';

export type TimelineEvent = {
  startDate : string;
  endDate  ?: string;
  title     : string;
  subTitle ?: string;
  summary  ?: string;
  icon     ?: string;
  width     ?: number
  duration  ?: number
  highlight?: string|null;
};

export type TimelineItemProps = {
  date: Dayjs,
  lifeEvent?: TimelineEvent
  worldEvent?: TimelineEvent
};

const PIXELS_PER_MONTH = 20;
const PIXELS_PER_YEAR = 50; // Increased to make year labels more prominent
const START_DATE = dayjs("1972-01-01");
const END_DATE = dayjs();

export const timelineConfig = {
  width: {
    month: PIXELS_PER_MONTH,
    year: PIXELS_PER_YEAR
  },
  startDate: START_DATE,
  endDate: END_DATE,
  totalMonths: END_DATE.diff(START_DATE, "months")
} as const;