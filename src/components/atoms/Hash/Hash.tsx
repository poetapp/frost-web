import { CopyableText } from 'components/atoms/CopyableText/CopyableText'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'

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
