import * as React from 'react'
const { ToastContainer } = require('react-toastify')

interface ToastPageProps {
  readonly className?: string
  readonly children?: any
}

export const ToastPage = (props: ToastPageProps) => (
  <div>
    <ToastContainer />
    {props.children}
  </div>
)
