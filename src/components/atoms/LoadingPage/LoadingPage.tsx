import * as classNames from 'classnames'
import * as React from 'react'
const ProgressBar = require('react-progress-bar-plus')
import { ClassNameProps } from 'interfaces/Props'
import 'react-progress-bar-plus/lib/progress-bar.css'
import './LoadingPage.scss'

interface LoadingPageProps extends ClassNameProps {
  readonly loading?: boolean
  readonly percentage?: number
  readonly children?: React.ReactNode
}

export const LoadingPage = (props: LoadingPageProps) => (
  <div className={classNames('LoadingPage', props.className)}>
    {props.loading ? <ProgressBar autoIncrement percent={props.percentage} /> : null}
    {props.children}
  </div>
)
