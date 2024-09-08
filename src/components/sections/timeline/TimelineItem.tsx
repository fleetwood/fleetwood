import React from "react";
import { format } from 'date-fns'
import { Role } from "@/types/Role";

const TimelineItem = ({role}:{role:Role}) => {
  return (
    <div key={role.id} className="timeline-item">
      <div className="timeline-middle">
        {role.icon ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path fillRule="evenodd" d={role.icon} clipRule="evenodd" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <div className={`md:text-end mb-10 timeline-box`}>
        <time className="font-mono italic">
          {format(role.startDate, "MMM yyyy")} -{" "}
          {role.endDate ? format(role.endDate, "MMM yyyy") : "Present"}
        </time>
        <div className="text-lg font-black">{role.title}</div>
        {role.name}
      </div>
      <hr />
    </div>
  );
};

export default TimelineItem;
