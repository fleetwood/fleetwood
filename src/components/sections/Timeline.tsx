import { ClassName } from "@fleetwood/types/ClassName";
import { ChildContentOptional } from "@fleetwood/types/ReactChildren";
import { twMerge } from "tailwind-merge";

type TimelineProps = ChildContentOptional &
  ClassName & {
    vertical?: boolean;
    title?: string;
  };

const Timeline = (props: TimelineProps) => {
  return (
    <div className="w-full">
      {props.title && <h2>{props.title}</h2>}

      <ul className={twMerge("timeline", props.vertical && 'timeline-vertical')}>
        {props.children}
      </ul>
    </div>
  );
};

export default Timeline;
