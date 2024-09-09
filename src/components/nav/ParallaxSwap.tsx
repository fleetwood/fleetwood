'use client'
import { usePlxStore } from "@/store/usePlxStore";
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
        <IconExpand className="swap-on h-6 w-6 scale-75 group-hover:scale-100" onClick={() => toggle} /> 
        <IconMonitorX className="swap-off h-6 w-6 scale-75 group-hover:scale-100" onClick={() => toggle} />
      </label>
    </div>
  );
};

export default ParallaxSwap;
