'use client'
import { useHeroDrawerStore } from "@/store/useHeroDrawerStore";
import { TimelineEvent } from "@/types/props/timeline/TimelineProps";
import dayjs from "dayjs";
import EventDetail from "./EventDetail";

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
        {item?.icon && 
          <div className="min-h-10 min-w-10 max-h-10 max-w-10 relative z-20 select-none" >
            <img 
              alt={item.title} 
              src={`/img/${item.icon}`} 
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        }
        <div className="flex flex-col py-2 px-4 min-w-0 overflow-hidden relative select-none">
          <div className="flex truncate group-hover:whitespace-nowrap select-none">
            {item.endDate && <span className="select-none">{dayjs(item.endDate).format("YYYY MMM - ")}</span>}
            <span className="select-none">{dayjs(item.startDate).format("YYYY MMM")}</span>
          </div>
          <div className="text-2xl truncate group-hover:whitespace-nowrap select-none">{item.subTitle}</div>
          <div className="font-semibold text-lg truncate group-hover:whitespace-nowrap select-none">{item.title}</div>
        </div>
      </div>
      {/* <div className="w-[2px] h-28 bg-secondary absolute top-2 left-0 z-0"></div>
      {item.endDate && <div className="w-[2px] h-28 bg-secondary absolute top-2 right-0 z-0"></div>} */}
    </div>
  )
}

export default LifeEvent
