import * as React from 'react'
import { ClassNameProps } from '../../../interfaces/Props'
const { ToastContainer } = require('react-toastify')

interface ToastPageProps extends ClassNameProps {
  readonly children?: any
}

export const ToastPage = (props: ToastPageProps) => (
  <div>
    <ToastContainer />
    {props.children}
  </div>
)
