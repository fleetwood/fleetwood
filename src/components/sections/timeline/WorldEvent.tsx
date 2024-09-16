import { TimelineEvent } from "@/types/props/timeline/TimelineProps";

const WorldEvent = ({item}:{item:TimelineEvent}) => {
  return (
    <div className={`absolute top-32 -left-2 
      bg-primary text-primary-content cursor-default
      rounded-md p-2 text-xs opacity-80
      hover:opacity-100 hover:z-20
      `} style={{width: item.width-5}}>
      <div className="relative">{item.title}</div>
      <div className="w-[2px] h-6 bg-primary absolute -top-6 left-2 z-0"></div>
    </div>
  );
};

export default WorldEvent;
