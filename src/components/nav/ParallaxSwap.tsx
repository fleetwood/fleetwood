'use client'
import { usePlxStore } from "@fleetwood/store/usePlxStore";
import { IconExpand, IconMonitorX } from "../icons/Icons";

const ParallaxSwap = () => {
  const { active, toggle } = usePlxStore();
  return (
    <div
      className="tooltip tooltip-bottom tooltip-secondary text-secondary-content pl-4"
      data-tip={`Toggle parallax ${active ? "off" : "on"}`}
    >
      <label className="swap swap-rotate 
        btn btn-circle btn-accent text-accent-content 
        hover:btn-secondary hover:bg-accent hover:text-white 
        ">
        <input type="checkbox" />
        <IconExpand className="swap-on h-6 w-6" onClick={toggle} />
        <IconMonitorX className="swap-off h-6 w-6" onClick={toggle} />
      </label>
    </div>
  );
};

export default ParallaxSwap;
