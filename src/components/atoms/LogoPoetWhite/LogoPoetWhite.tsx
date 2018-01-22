import * as React from 'react'
import { Images } from '../../../images/Images'

interface LogoPoetWhiteProps {
  readonly className?: string
}

export const LogoPoetWhite = (props: LogoPoetWhiteProps) => (
  <img src={Images.PoetWhite} className={props.className} />
)
