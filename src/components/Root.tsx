import * as React from 'react'

import './Root.scss'

interface RootLayoutProps {
  readonly children?: any
}

export const Layout = function render(props: RootLayoutProps) {
  return <div className="root-layout">{props.children}</div>
}
