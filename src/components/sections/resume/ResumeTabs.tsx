'use client'

import { useState } from "react"
import ResumeComponent from "./ResumeComponent"
import Timeline from "../timeline/Timeline"
import { TimelineEvent } from "@/types/props/timeline/TimelineProps"
import { IconDownload, IconResume, IconTimeline } from "@/components/icons/Icons"
import { twMerge } from "tailwind-merge"

const ResumeTabs = ({ lifeEvents, worldEvents }: { lifeEvents: TimelineEvent[], worldEvents: TimelineEvent[] }) => {
  const [tab, setTab] = useState<"resume" | "timeline">("resume")
  return (
    <div>
      <div className="flex gap-2 justify-evenly justify-items-stretch mb-4">
        <div className={twMerge(
          "flex justify-center items-center gap-2",
          "text-lg py-2 px-4 rounded-sm",
          "transition-all duration-200 ease-in-out",
          "cursor-pointer hover:bg-primary hover:text-primary-content",
        )}>
          <IconDownload /> Download
        </div>
        <div className="flex-grow"></div>
        <TabSelect active={tab === "resume"} tab="resume" setTab={setTab}><IconResume />List</TabSelect>
        <TabSelect active={tab === "timeline"} tab="timeline" setTab={setTab}><IconTimeline />Timeline</TabSelect>
      </div>

      {tab === "resume" && <ResumeComponent lifeEvents={lifeEvents} />}
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
      "flex justify-center items-center gap-2",
      "text-lg py-2 px-4 rounded-sm",
      "transition-all duration-200 ease-in-out",
      active ? "cursor-default bg-primary text-primary-content" 
             : "cursor-pointer bg-base-100 text-base-content hover:bg-primary hover:text-primary-content",
      )}>
      {children}
    </div>
  )
}

export default ResumeTabs
