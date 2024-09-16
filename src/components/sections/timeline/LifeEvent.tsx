'use client'
import dayjs from "dayjs";
import { TimelineEvent } from "@/types/props/timeline/TimelineProps";
import { useHeroDrawerStore } from "@/store/useHeroDrawerStore";
import EventDetail from "./EventDetail";

const LifeEvent = ({item}:{item:TimelineEvent}) => {
  const { setContent } = useHeroDrawerStore();
  return (
    <div className="absolute top-0 left-0 group" style={{width: item.width!-2}}>
      <div className="timeline-container
        min-w-full relative p-2
        transition-all duration-300 ease-in-out
        flex items-center cursor-pointer
        rounded-md bg-secondary text-secondary-content 
        shadow-md shadow-black
        overflow-hidden
        group-hover:bg-base-200 group-hover:text-base-content
        group-hover:z-20 group-hover:min-w-fit
        group-hover:shadow-lg group-hover:shadow-black 
        "
        onClick={() => setContent(<EventDetail event={item} />)}
        >
        <div className="absolute inset-0 z-10"></div>
        {item?.icon && 
          <div className="min-h-10 min-w-10 max-h-10 max-w-10 relative z-20" ><img alt={item.title} src={`/img/${item.icon}`} /></div>
        }
        <div className="flex flex-col py-2 px-4 min-w-0 overflow-hidden relative">
          <div className="flex truncate group-hover:whitespace-nowrap">
            {item.endDate && <span>{dayjs(item.endDate).format("YYYY MMM - ")}</span>}
            <span>{dayjs(item.startDate).format("YYYY MMM")}</span>
          </div>
          <div className="text-2xl truncate group-hover:whitespace-nowrap">{item.subTitle}</div>
          <div className="font-semibold text-lg truncate group-hover:whitespace-nowrap">{item.title}</div>
        </div>
      </div>
      {/* <div className="w-[2px] h-28 bg-secondary absolute top-2 left-0 z-0"></div>
      {item.endDate && <div className="w-[2px] h-28 bg-secondary absolute top-2 right-0 z-0"></div>} */}
    </div>
  )
}

export default LifeEvent
