import * as React from 'react'
import { Images } from '../../../images/Images'
import { ClassNameProps } from '../../../interfaces/Props'

interface LogoPoetWhiteProps extends ClassNameProps {}

export const LogoPoetWhite = (props: LogoPoetWhiteProps) => (
  <img src={Images.PoetWhite} className={props.className} />
)
