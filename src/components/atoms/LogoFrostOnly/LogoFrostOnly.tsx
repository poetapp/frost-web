import { Images } from 'images/Images'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'

interface LogoFrostOnlyProps extends ClassNameProps {}

export const LogoFrostOnly = (props: LogoFrostOnlyProps) => (
  <img src={Images.FrostLogoOnly} className={props.className} />
)
