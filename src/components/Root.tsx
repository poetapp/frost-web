import * as React from 'react'

import './Root.scss'
import './styles/reset.scss'

interface RootLayoutProps {
  readonly children?: JSX.Element
}

export const Layout = function render(props: RootLayoutProps) {
  return <div className="root-layout">{props.children}</div>
}
