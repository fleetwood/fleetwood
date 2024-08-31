"use client"
import MainNav from "@fleetwood/components/nav/MainNav";
import ParallaxBg from "@fleetwood/components/ParallaxBg";
import Hero from "@fleetwood/components/sections/Hero";
import Timeline from "@fleetwood/components/sections/Timeline";
import Milestone from "@fleetwood/components/sections/timeline/Milestone";
import { } from 'next/font/local';
import { useState } from "react";

export default function Home() {
  const [plx, setPlx] = useState(true);

  const albums = [
    {
      artist: "Bruce Springsteen",
      title: "Born in the U.S.A.",
      content: "Born in the U.S.A. is the seventh studio album by the American singer-songwriter Bruce Springsteen, released on June 4, 1984, by Columbia Records." 
    },
    {
      artist: "Van Halen",
      title: "1984",
      content: "1984 is the sixth studio album by American rock band Van Halen, released on January 9, 1984. It was the last Van Halen studio album until A Different Kind of Truth to feature lead singer David Lee Roth, who left the band in 1985 following creative differences." 
    },
    {
      artist: "Metallica",
      title: "Ride the Lightning",
      content: "Ride the Lightning is the second studio album by the American heavy metal band Metallica, released on July 27, 1984, by the independent record label Megaforce Records. The album was recorded in three weeks with producer Flemming Rasmussen." 
    },
    {
      artist: "Prince",
      title: "Purple Rain",
      content: "Purple Rain is the sixth studio album by the American singer, songwriter, producer, and multi-instrumentalist Prince. It was released on June 25, 1984, by Warner Bros. Records as the soundtrack album to the 1984 film of the same name." 
    },
    {
      artist: "Madonna",
      title: "Like A Virgin",
      content: "Like a Virgin is the second studio album by American singer Madonna, released on November 12, 1984, by Sire Records. Following the success of her 1983 self-titled debut album, Madonna was eager to start working on its follow-up." 
    },
    {
      artist: "The Cars",
      title: "Heartbeat City",
      content: "Heartbeat City is the fifth studio album by American new wave band the Cars, released on March 13, 1984, by Elektra Records. This marks the band's first album not produced by long-time producer Roy Thomas Baker, instead opting to produce with Robert John \"Mutt\" Lange." 
    },
    {
      artist: "U2",
      title: "The Unforgettable Fire",
      content: "The Unforgettable Fire is the fourth studio album by Irish rock band U2. It was produced by Brian Eno and Daniel Lanois, and released on 1 October 1984 by Island Records. The band wanted to pursue a new musical direction following the harder-hitting rock of their previous album, War." 
    },
    {
      artist: "Bryan Adams",
      title: "Reckless",
      content: "Reckless is the fourth studio album by Canadian singer-songwriter Bryan Adams, released by A&M Records on November 5, 1984 to coincide with Adams' 25th birthday. Like its predecessor Cuts Like a Knife, the album was entirely produced by Adams and Bob Clearmountain." 
    },
    {
      artist: "Footloose",
      title: "Musical Soundtrack",
      content: "Footloose is the original soundtrack of the Paramount motion picture Footloose. The original nine-track album was released in 1984 and reached number one on the US Billboard 200 chart on April 21, 1984, where it stayed until June 30, 1984." 
    },
    {
      artist: "The Smiths",
      title: "Hatful of Hollow",
      content: "Hatful of Hollow is a compilation album by English rock band the Smiths, released on 12 November 1984 by Rough Trade Records. The album features BBC Radio 1 studio recordings and two contemporary singles, including their epitomic track How Soon Is Now?." 
    },
  ]

  return (
    <main className="flex flex-col items-center justify-between gap-12 relative overflow-hidden text-gunmetal">
      <ParallaxBg active={plx} />
      <div className="flex flex-col items-center justify-between gap-12 h-screen w-full max-w-5xl px-12 pb-12 z-10">
        
        <MainNav bindState={[plx, setPlx]} />

        <Hero title="Hi">
          <h3>I&apos;m Fleetwood</h3>
        </Hero>

        <Timeline title="History" vertical>
          {albums.map((album, index) => (
            <Milestone 
              key={index} 
              title={album.artist} 
              ltr={index % 2 === 0}
              first={index === 0}
              last={index === albums.length - 1}
              >
              <div>
                <div className="font-bold">{album.title}</div>
                <div>{album.content}</div>
              </div>
            </Milestone>
          ))}
        </Timeline>
        
        <div className="h-full flex-grow">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="p-2 bg-black text-black-content">black</div>
              <div className="p-2 bg-neutral text-neutral-content">neutral</div>
              <div className="p-2 bg-white text-white-content">white</div>
              <div className="p-2 bg-primary text-primary-content">primary</div>
              <div className="p-2 bg-secondary text-secondary-content">secondary</div>
              <div className="p-2 bg-accent text-accent-content">accent</div>
              <div className="p-2 bg-error text-error-content">error</div>
              <div className="p-2 bg-success text-success-content">success</div>
              <div className="p-2 bg-info text-info-content">info</div>
            </div>
            <div className="flex gap-3">
              <div className="p-2 bg-black text-black-content">black</div>
              <div className="p-2 bg-neutral text-neutral-content">neutral</div>
              <div className="p-2 bg-white text-white-content">white</div>
              <div className="p-2 bg-primary text-primary-content">primary</div>
              <div className="p-2 bg-secondary text-secondary-content">secondary</div>
              <div className="p-2 bg-accent text-accent-content">accent</div>
              <div className="p-2 bg-error text-error-content">error</div>
              <div className="p-2 bg-success text-success-content">success</div>
              <div className="p-2 bg-info text-info-content">info</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white/50 p-4 w-full max-w-5xl relative">
          <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            this is a link
          </div>
        </div>
      </div>
    </main>
  );
}
