import React from 'react'

const Colors = () => {
  return (
    <div className="flex join">
      <div className="join-item p-2 bg-black text-base-100 dark:text-base-content">black</div>
      <div className="join-item p-2 bg-white text-base-content dark:text-base-100">white</div> 
      <div className="join-item p-2 bg-base-100 text-base-content">base</div>
      <div className="join-item p-2 bg-primary text-primary-content">primary</div>
      <div className="join-item p-2 bg-secondary text-secondary-content">secondary</div>
      <div className="join-item p-2 bg-accent text-accent-content">accent</div>
      <div className="join-item p-2 bg-error text-error-content">error</div>
      <div className="join-item p-2 bg-success text-success-content">success</div>
    </div>
  )
}

export default Colors