import Hero from "@/components/sections/hero/Hero";
import HeroDrawer from "@/components/sections/hero/HeroDrawer";
import Quote from "@/components/sections/Quote";
import Timeline from "@/components/sections/timeline/Timeline";
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

  const albums = [
    {
      title: "Bruce Springsteen",
      subject: "Born in the U.S.A.",
      content:
        "Born in the U.S.A. is the seventh studio album by the American singer-songwriter Bruce Springsteen, released on June 4, 1984, by Columbia Records.",
    },
    {
      title: "Van Halen",
      subject: "1984",
      content:
        "1984 is the sixth studio album by American rock band Van Halen, released on January 9, 1984. It was the last Van Halen studio album until A Different Kind of Truth to feature lead singer David Lee Roth, who left the band in 1985 following creative differences.",
    },
    {
      title: "Metallica",
      subject: "Ride the Lightning",
      content:
        "Ride the Lightning is the second studio album by the American heavy metal band Metallica, released on July 27, 1984, by the independent record label Megaforce Records. The album was recorded in three weeks with producer Flemming Rasmussen.",
    },
    {
      title: "Prince",
      subject: "Purple Rain",
      content:
        "Purple Rain is the sixth studio album by the American singer, songwriter, producer, and multi-instrumentalist Prince. It was released on June 25, 1984, by Warner Bros. Records as the soundtrack album to the 1984 film of the same name.",
    },
    {
      title: "Madonna",
      subject: "Like A Virgin",
      content:
        "Like a Virgin is the second studio album by American singer Madonna, released on November 12, 1984, by Sire Records. Following the success of her 1983 self-subjectd debut album, Madonna was eager to start working on its follow-up.",
    },
    {
      title: "The Cars",
      subject: "Heartbeat City",
      content:
        'Heartbeat City is the fifth studio album by American new wave band the Cars, released on March 13, 1984, by Elektra Records. This marks the band\'s first album not produced by long-time producer Roy Thomas Baker, instead opting to produce with Robert John "Mutt" Lange.',
    },
    {
      title: "U2",
      subject: "The Unforgettable Fire",
      content:
        "The Unforgettable Fire is the fourth studio album by Irish rock band U2. It was produced by Brian Eno and Daniel Lanois, and released on 1 October 1984 by Island Records. The band wanted to pursue a new musical direction following the harder-hitting rock of their previous album, War.",
    },
    {
      title: "Bryan Adams",
      subject: "Reckless",
      content:
        "Reckless is the fourth studio album by Canadian singer-songwriter Bryan Adams, released by A&M Records on November 5, 1984 to coincide with Adams' 25th birthday. Like its predecessor Cuts Like a Knife, the album was entirely produced by Adams and Bob Clearmountain.",
    },
    {
      title: "Footloose",
      subject: "Musical Soundtrack",
      content:
        "Footloose is the original soundtrack of the Paramount motion picture Footloose. The original nine-track album was released in 1984 and reached number one on the US Billboard 200 chart on April 21, 1984, where it stayed until June 30, 1984.",
    },
    {
      title: "The Smiths",
      subject: "Hatful of Hollow",
      content:
        "Hatful of Hollow is a compilation album by English rock band the Smiths, released on 12 November 1984 by Rough Trade Records. The album features BBC Radio 1 studio recordings and two contemporary singles, including their epitomic track How Soon Is Now?.",
    },
  ];

const lifeEvents:TimelineEvent[] = [
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
  ...history.map((role) => {
    return {
      startDate: role.startDate.toString(),
      endDate: (role.endDate??new Date()).toString(),
      title: role.title,
      subTitle: role.name,
      summary: role.summary,
      icon: role.icon ?? undefined,
    };
  })

];

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
];

  return (
    <Hero title="History" h2>
      <Quote author="Dr. Suess (kinda)">Oh, the places I&apos;ve been!</Quote>
      <Timeline lifeEvents={lifeEvents} worldEvents={worldEvents} />
      <HeroDrawer />
    </Hero>
  );
}
