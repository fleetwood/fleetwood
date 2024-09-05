import React from 'react'

const Colors = () => {
  return (
    <div className="h-full flex-grow">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="p-2 bg-black text-black-content">black</div>
            <div className="p-2 bg-white text-white-content">white</div>
            <div className="p-2 bg-base-100 text-base-content">base</div>
            <div className="p-2 bg-primary text-primary-content">primary</div>
            <div className="p-2 bg-secondary text-secondary-content">secondary</div>
            <div className="p-2 bg-accent text-accent-content">accent</div>
            <div className="p-2 bg-error text-error-content">error</div>
            <div className="p-2 bg-success text-success-content">success</div>
          </div>
        </div>
      </div>
  )
}

export default Colors