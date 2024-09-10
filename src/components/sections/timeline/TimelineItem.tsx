import React from "react";
import { format } from 'date-fns'
import { Role } from "@/types/Role";
import Image from "next/image";
import { LuBuilding } from "react-icons/lu";

const TimelineItem = ({role}:{role:Role}) => {
  return (
    <div key={role.id} className="timeline-item">
      <div className="timeline-middle">
        {role.icon ? (
          <Image
            src={`/img/${role.icon}`}
            alt={role.name}
            width={40}
            height={40}
            className="rounded-full" />
        ) : (
          <LuBuilding />
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
