import * as React from 'react';

import { CopyableText } from '../CopyableText/CopyableText';

import './Hash.scss';

interface HashProps  {
  readonly children?: any
  readonly textClickable?: boolean;
  readonly className?: string
}

export const Hash = (props: HashProps) => (
  <CopyableText text={props.children.toString()} textClickable={props.textClickable} className={props.className} >{props.children.toString().firstAndLastCharacters(20)}</CopyableText>
);
