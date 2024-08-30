"use client"
import { IconExpand, IconMonitorX } from "@fleetwood/components/icons/Icons";
import ParallaxBg from "@fleetwood/components/ParallaxBg";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [plx, setPlx] = useState(true);

  const handlePlx = (event: React.MouseEvent) => {
    event.stopPropagation()
    setPlx((p) => !p)
    console.log('(handlePlx)', plx)
  }

  return (
    <main className="flex flex-col items-center justify-between gap-12 relative overflow-hidden text-gunmetal">
      <ParallaxBg active={plx} />
      <div className="flex flex-col items-center justify-between gap-12 h-screen w-full max-w-5xl px-12 pb-12 z-10">
        <nav className="
          w-full rounded-b-xl
          flex items-center justify-evenly
          transition-all duration-200 ease-in-out 
          bg-gradient-to-b from-picton-400/20 to-picton-800/20 
          hover:py-3 hover:from-picton-400/100 hover:to-picton-800/50
          ">
          <div className="font-light uppercase cursor-pointer transition-colors duration-200 ease-in-out hover:text-white">home</div>
          <div className="font-light uppercase cursor-pointer transition-colors duration-200 ease-in-out hover:text-white">resume</div>
          <div className="font-light uppercase cursor-pointer transition-colors duration-200 ease-in-out hover:text-white">about</div>

          <label className="swap swap-rotate hover:text-white text-gunmetal" onClick={handlePlx}>
            <input type="checkbox" />
            <IconExpand className="swap-on h-4 w-4" />
            <IconMonitorX className="swap-off h-4 w-4" />
          </label>
        </nav>

        <div className="bg-primary/50 w-full p-2 rounded-xl text-white"> 
          <h1>
            Hi
          </h1>
          <h1>
            I'm Fleetwood
          </h1>
        </div>
        
        <div className="h-full flex-grow"></div>

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
