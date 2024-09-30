import { TimelineEvent } from "@/types/props/timeline/TimelineProps";

const WorldEvent = ({item}:{item:TimelineEvent}) => {
  return (
    <div 
      className={`
        absolute top-44 -left-2 group z-20
        transition-all duration-200 ease-in-out
        shadow-sm shadow-black
        rounded-md p-2 text-xs
        border-2 border-base-100
        bg-base-100 text-base-content cursor-default
        hover:bg-primary hover:text-primary-content hover:z-30
        hover:shadow-md hover:shadow-black
      `} 
      style={{width: item.width!-5}}
    >
      <div className="pointer-events-none select-none">{item.title}</div>
    </div>
  );
};

export default WorldEvent;
