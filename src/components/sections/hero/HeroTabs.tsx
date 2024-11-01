'use client'

import { useState } from "react"
import ResumeComponent from "../resume/ResumeComponent"
import Timeline from "../timeline/Timeline"
import { TimelineEvent } from "@/types/props/timeline/TimelineProps"
import { IconResume, IconTimeline } from "@/components/icons/Icons"
import { twMerge } from "tailwind-merge"

const HeroTabs = ({ lifeEvents, worldEvents }: { lifeEvents: TimelineEvent[], worldEvents: TimelineEvent[] }) => {
  const [tab, setTab] = useState<"resume" | "timeline">("resume")
  return (
    <div>
      <div className="flex gap-2 justify-evenly justify-items-stretch  w-full mb-4">
        <TabSelect active={tab === "resume"} tab="resume" setTab={setTab}><IconResume />Resume</TabSelect>
        <TabSelect active={tab === "timeline"} tab="timeline" setTab={setTab}><IconTimeline />Timeline</TabSelect>
      </div>

      {tab === "resume" && <ResumeComponent />}
      {tab === "timeline" && <Timeline lifeEvents={lifeEvents} worldEvents={worldEvents} />}
    </div>
  )
}

type TabSelectProps = {
  active: boolean
  tab: "resume" | "timeline"
  setTab: (tab: "resume" | "timeline") => void
  children: React.ReactNode
}
const TabSelect = ({active, tab, setTab, children}: TabSelectProps) => {
  return (
    <div onClick={() => setTab(tab)} className={twMerge(
      "flex flex-1 justify-center items-center gap-2",
      "text-lg py-2 px-4 rounded-sm",
      "transition-all duration-200 ease-in-out",
      active ? "cursor-default bg-primary text-primary-content" 
             : "cursor-pointer bg-base-100 text-base-content hover:bg-primary hover:text-primary-content",
      )}>
      {children}
    </div>
  )
}

export default HeroTabs
