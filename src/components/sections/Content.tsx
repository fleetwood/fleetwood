import { ChildContent } from '@fleetwood/types/ReactChildren'
import React from 'react'

const Content = ({children}:ChildContent) => {
  return (
    <main className="flex-grow max-h-full overflow-y-auto my-2">{children}</main>
  )
}

export default Content