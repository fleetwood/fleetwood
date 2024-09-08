import { ClassName } from "@/types/ClassName";
import { twMerge } from "tailwind-merge";

type TimelineProps = ClassName & {
  children      : JSX.Element[]
  vertical     ?: boolean;
  title        ?: string;
  listClassName?: string;
};

const Timeline = ({ children, ...props }: TimelineProps) => {
  return (
    <div className={twMerge("w-full", props.className)}>
      {props.title && <h2>{props.title}</h2>}

      <ul
        className={twMerge(
          "w-full timeline",
          props.vertical && "timeline-vertical"
        )}
      >
        {children}
      </ul>
    </div>
  );
};
export default Timeline;
