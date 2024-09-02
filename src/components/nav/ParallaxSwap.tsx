'use client'
import { usePlxStore } from "@fleetwood/store/usePlxStore";
import { IconExpand, IconMonitorX } from "../icons/Icons";

const ParallaxSwap = () => {
  const { active, toggle } = usePlxStore();
  return (
    <div
      className="tooltip tooltip-bottom tooltip-secondary pl-4"
      data-tip={`Toggle parallax ${active ? "off" : "on"}`}
    >
      <label className="swap swap-rotate 
        btn btn-sm group-hover:btn-md btn-circle 
        btn-base-100 text-base-content border-none
        hover:btn-secondary hover:text-white 
        transition-all duration-200 ease-in-out
        ">
        <input 
          type="checkbox" 
          className="theme-controller"  
          checked={active}
          onChange={() => {}}
          />
        <IconExpand className="swap-on h-4 w-4 group-hover:h-6 group-hover:w-6" onClick={toggle} />
        <IconMonitorX className="swap-off h-4 w-4 group-hover:h-6 group-hover:w-6" onClick={toggle} />
      </label>
    </div>
  );
};

export default ParallaxSwap;
