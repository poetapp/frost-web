import * as React from 'react'
import { ReactNode } from 'react'

import './Root.scss'
import './styles/reset.scss'

interface RootLayoutProps {
  readonly children?: ReactNode
}

export const Layout = (props: RootLayoutProps): JSX.Element => <div className="root-layout">{props.children}</div>
