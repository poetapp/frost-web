import { Images } from 'images/Images'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'

interface LogoFrostProps extends ClassNameProps {}

export const LogoFrost = (props: LogoFrostProps) => (
  <img src={Images.LogoFrost} className={props.className} />
)
