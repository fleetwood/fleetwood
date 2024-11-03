'use client'
import { useHeroDrawerStore } from "@/store/useHeroDrawerStore";
import { TimelineEvent } from "@/types/props/timeline/TimelineProps";
import dayjs from "dayjs";
import EventDetail from "./EventDetail";
import { RoleIcon } from "../roles/RoleIcon";
import { RoleTitle } from "../roles/RoleTitle";

const LifeEvent = ({item}:{item:TimelineEvent}) => {
  const { setContent } = useHeroDrawerStore();
  return (
    <div className="absolute top-0 left-0 group select-none" 
      style={{width: item.width!-2}}
      onMouseDown={(e) => e.preventDefault()}
      >
      <div className="timeline-container
        min-w-full relative p-2 select-none
        transition-all duration-300 ease-in-out
        flex items-center cursor-pointer
        rounded-md bg-secondary text-secondary-content 
        border-2 border-secondary
        shadow-md shadow-black
        overflow-hidden
        group-hover:bg-primary group-hover:text-primary-content
        group-hover:z-20 group-hover:min-w-fit group-hover:border-base-100
        group-hover:shadow-lg group-hover:shadow-black 
        "
        onClick={() => setContent(<EventDetail event={item} />)}
        >
        <div className="absolute inset-0 z-10"></div>
        <RoleIcon event={item} />
        <RoleTitle event={item} />
      </div>
      {/* <div className="w-[2px] h-28 bg-secondary absolute top-2 left-0 z-0"></div>
      {item.endDate && <div className="w-[2px] h-28 bg-secondary absolute top-2 right-0 z-0"></div>} */}
    </div>
  )
}

export default LifeEvent
