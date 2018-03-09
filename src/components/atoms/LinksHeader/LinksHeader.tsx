import 'components/atoms/LinksHeader/LinksHeader.scss'
import * as React from 'react'

interface LinksHeaderProps {}

export const LinksHeader = (props: LinksHeaderProps) => (
  <ul className={'LinksHeader'}>
    <li className={'LinksHeader__item'}>
      <a href={'https://docs.frost.po.et/docs'}>Documentation</a>
    </li>
    <li className={'LinksHeader__item'}>
      <a href={'https://docs.frost.po.et/v0.1/reference'}>API</a>
    </li>
    <li className={'LinksHeader__item'}>
      <a href={'https://gitter.im/poetapp'}>Forum</a>
    </li>
  </ul>
)
