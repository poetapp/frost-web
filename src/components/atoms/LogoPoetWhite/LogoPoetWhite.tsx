import { Images } from 'images/Images'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'

interface LogoPoetWhiteProps extends ClassNameProps {}

export const LogoPoetWhite = (props: LogoPoetWhiteProps) => <img src={Images.PoetWhite} className={props.className} />
