import { TimelineEvent } from "./Timeline";

const WorldEvent = ({item}:{item:TimelineEvent}) => {
  return (
    <div className={`absolute top-36 left-0 bg-primary/80 text-primary-content rounded-md p-2 mt-2 text-xs`} style={{width: item.width-5}}>
      {item.title}
    </div>
  );
};

export default WorldEvent;
