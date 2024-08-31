import React from 'react'
import { IconExpand, IconMonitorX } from '../icons/Icons'
import { BindState } from '@fleetwood/types/BindState'

const ParallaxSwap = (props:{bindState: BindState<boolean>}) => {
  const [active, setActive] = props.bindState
  return (
    
    <div
    className="tooltip tooltip-bottom tooltip-secondary text-secondary-content pl-4"
    data-tip={`Toggle parallax ${active ? "off" : "on"}`}
  >
    <label className="swap swap-rotate hover:text-white text-accent-content btn btn-circle btn-accent hover:btn-secondary">
      <input type="checkbox" />
      <IconExpand
        className="swap-on h-6 w-6"
        onClick={() => setActive((prev:boolean) => !prev)}
      />
      <IconMonitorX
        className="swap-off h-6 w-6"
        onClick={() => setActive((prev:boolean) => !prev)}
      />
    </label>
  </div>
  )
}

export default ParallaxSwap