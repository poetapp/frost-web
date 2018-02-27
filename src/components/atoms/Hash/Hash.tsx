import * as React from 'react'
import { ClassNameProps } from '../../../interfaces/Props'
import { CopyableText } from '../CopyableText/CopyableText'

import './Hash.scss'

interface HashProps extends ClassNameProps {
  readonly children?: JSX.Element
  readonly textClickable?: boolean
}

export const Hash = (props: HashProps) => (
  <CopyableText
    text={props.children && props.children.toString()}
    textClickable={props.textClickable}
    className={props.className}
  >
    {props.children && props.children.toString().firstAndLastCharacters(20)}
  </CopyableText>
)
