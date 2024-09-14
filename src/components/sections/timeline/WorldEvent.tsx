import { TimelineEvent } from "@/types/props/timeline/TimelineProps";

const WorldEvent = ({item}:{item:TimelineEvent}) => {
  return (
    <div className={`absolute top-32 -left-2 bg-primary/80 text-primary-content rounded-md p-2 text-xs`} style={{width: item.width-5}}>
      <span>{item.title}</span>
      <div className="w-[2px] h-6 bg-primary absolute -top-6 left-2 z-0"></div>
    </div>
  );
};

export default WorldEvent;
