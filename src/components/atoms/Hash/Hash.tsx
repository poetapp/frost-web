import * as React from 'react'

import { CopyableText } from 'components/atoms/CopyableText/CopyableText'
import { ClassNameProps } from 'interfaces/Props'

import './Hash.scss'

interface HashProps extends ClassNameProps {
  readonly children?: string
  readonly textClickable?: boolean
}

export const Hash = (props: HashProps) => (
  <CopyableText
    text={props.children && props.children.toString()}
    className={props.className}
  >
    {props.children && props.children.toString().firstAndLastCharacters(20)}
  </CopyableText>
)
