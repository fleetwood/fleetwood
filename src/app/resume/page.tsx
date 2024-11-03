import Hero from "@/components/sections/hero/Hero";
import ResumeTabs from "@/components/sections/resume/ResumeTabs";
import Quote from "@/components/sections/Quote";
import { db } from "@/db/index";
import { roles } from "@/db/schema/roles";
import { TimelineEvent } from "@/types/props/timeline/TimelineProps";
import { Role } from "@/types/Role";
import { desc } from "drizzle-orm";

export const metadata = {
  subject: "Fleetwood | Resume",
  description: "NextJS, Tailwind + Daisy, Drizzle and Bun",
};

export default async function ResumePage() {
  const history: Role[] = (await db
    .select()
    .from(roles)
    .orderBy(desc(roles.startDate))) as Role[];

  const lifeEvents: TimelineEvent[] = history.map((role) => {
    return {
      ...role,
      startDate: role.startDate.toString(),
      endDate: (role.endDate ?? new Date()).toString(),
      subTitle: role.name,
      icon: role.icon ?? undefined,
    };
  })

  const worldEvents = [
    { startDate: '1973-03-01', title: 'Dark Side of the Moon - Pink Floyd' },
    { startDate: '1975-04-01', title: 'Monty Python and the Holy Grail' },
    { startDate: '1977-05-27', title: 'Star Wars' },
    { startDate: '1984-01-01', title: '1984 - Van Halen, Heartbeat City - The Cars' },
    { startDate: '1984-06-01', title: 'Born in the USA - Bruce Springsteen. Purple Rain - Prince' },
    { startDate: '1984-11-01', title: 'Ride the Lightning - Metallica, Like a Virgin - Madonna' },
    { startDate: '1989-06-01', title: `The Shot. also, You've got mail!` },
    { startDate: '1985-09-01', title: 'Superbowl Shuffle' },
    { startDate: '1993-07-27', title: 'Siamese Dream - Smashing Pumpkins' },
    { startDate: '1992-04-06', title: 'Windows 3.1, Starbucks (f. 1971)' },
    { startDate: '1995-08-04', title: 'Windows 95, AltaVista, Amazon' },
    { startDate: '1998-09-04', title: 'Google happens' },
    { startDate: '2001-09-11', title: 'Shock and Awe' },
    { startDate: '2001-12-01', title: 'Lord of the Rings' },
    { startDate: '2003-02-01', title: 'Freedom Fries' },
    { startDate: '2007-02-04', title: 'Indy kicks to Hester' },
    { startDate: '2010-01-05', title: 'Citizens United passes' },
    { startDate: '2011-10-05', title: 'Stay hungry, stay foolish' },
    { startDate: '2019-03-01', endDate: '2020-08-01', title: 'covid-19' },
    { startDate: '2023-02-01', title: 'Tom Brady actually retires' },
    { startDate: '2022-04-08', title: 'Will Smith banned from Oscars until 2032' },

    { startDate: '1972-05-26', title: 'I am here!' },
    { startDate: '1975-10-01', title: 'Started reading' },
    { startDate: '1977-08-01', title: 'Started school' },
    { startDate: '1981-03-01', title: 'Discovered art' },
    { startDate: '1984-08-01', title: 'First guitar', subTitle: '1984 Kramer' },
    { startDate: '1985-06-01', title: 'First girlfriend' },
    { startDate: '1985-12-25', title: 'First computer', subTitle: 'Commodore 128' },
    { startDate: '1986-06-01', title: 'First job', subTitle: 'McDonalds' },
    { startDate: '1988-05-26', title: 'First car!', subTitle: 'Plymouth Duster' },
    { startDate: '1988-12-26', title: 'Second car', subTitle: 'Pontiac TransAm' },
    { startDate: '1989-12-01', title: 'Graduated High School' },
    { startDate: '1994-05-01', title: 'Met my wife' },
    { startDate: '1999-05-09', title: 'I am Dad' },
    { startDate: '2001-08-11', title: 'I am Husband' },
    { startDate: '2002-02-26', title: 'I am 2xDad' },
    { startDate: '2016-03-01', title: 'First Tattoo' },
    { startDate: '2021-08-11', title: 'First Jaguar' },
  ];

  console.log('lifeEvents',lifeEvents)

  return (
    <Hero title="History" h2>
      <Quote author="Dr. Suess (kinda)">Oh, the places I&apos;ve been!</Quote>
      <ResumeTabs lifeEvents={lifeEvents} worldEvents={worldEvents} />
    </Hero>
  );
}
