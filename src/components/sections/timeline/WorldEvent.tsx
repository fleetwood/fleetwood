import { TimelineEvent } from "@/types/props/timeline/TimelineProps";

const WorldEvent = ({item}:{item:TimelineEvent}) => {
  return (
    <div className={`absolute top-44 -left-2 
      bg-primary text-primary-content cursor-default
      rounded-md p-2 text-xs opacity-80
      hover:opacity-100 hover:z-20
      `} style={{width: item.width!-5}}>
      <div className="relative">{item.title}</div>
    </div>
  );
};

export default WorldEvent;
