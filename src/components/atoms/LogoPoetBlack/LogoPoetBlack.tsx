import { Images } from 'images/Images'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'

interface LogoPoetBlackProps extends ClassNameProps {}

export const LogoPoetBlack = (props: LogoPoetBlackProps) => <img src={Images.PoetBlack} className={props.className} />
