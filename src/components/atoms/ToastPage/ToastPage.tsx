import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
const { ToastContainer } = require('react-toastify')

interface ToastPageProps extends ClassNameProps {
  readonly children?: JSX.Element
}

export const ToastPage = (props: ToastPageProps) => (
  <div>
    <ToastContainer />
    {props.children}
  </div>
)
