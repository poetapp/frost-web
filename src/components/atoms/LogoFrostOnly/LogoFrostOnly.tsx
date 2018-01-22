import * as React from 'react'
import { Images } from '../../../images/Images'

interface LogoFrostOnlyProps {
  readonly className?: string
}

export const LogoFrostOnly = (props: LogoFrostOnlyProps) => (
  <img src={Images.FrostLogoOnly} className={props.className} />
)
