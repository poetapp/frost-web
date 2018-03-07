import * as React from 'react'
import { Images } from '../../../images/Images'
import { ClassNameProps } from '../../../interfaces/Props'

interface LogoFrostOnlyProps extends ClassNameProps {}

export const LogoFrostOnly = (props: LogoFrostOnlyProps) => (
  <img src={Images.FrostLogoOnly} className={props.className} />
)
