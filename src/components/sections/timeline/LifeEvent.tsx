import dayjs from "dayjs";
import { TimelineEvent } from "./Timeline";

const LifeEvent = ({item}:{item:TimelineEvent}) => {
  return (
    <div className={`absolute top-0 left-0 group`} style={{width: item.width-10}}>
      <div className="
        h-full min-w-full relative p-2
        rounded-md bg-secondary text-secondary-content 
        flex items-center whitespace-nowrap cursor-pointer
        group-hover:bg-accent hover:z-10 hover:shadow-md
        ">
        {item?.icon && 
          <div><img className="h-10 w-10" alt={item.title} src={`/img/${item.icon}`} /></div>
        }
        <div className="flex flex-col py-2 px-4">
          {/* <div className="text-lg whitespace-nowrap">{item!.subTitle}</div> */}
          <div className="flex text-xs whitespace-nowrap">
            {item.endDate && <span>{dayjs(item!.endDate).format("YYYY MMM - ")}</span>}
            <span>{dayjs(item!.startDate).format("YYYY MMM")}</span>
          </div>
          {/* <div className="font-semibold whitespace-nowrap">{item.title}</div> */}
        </div>
      </div>
    </div>
  )
}

export default LifeEvent
