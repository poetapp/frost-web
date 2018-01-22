import * as React from 'react'
import './LinksHeader.scss'

interface LinksHeaderProps {}

export const LinksHeader = (props: LinksHeaderProps) => (
  <ul className={'LinksHeader'}>
    <li className={'LinksHeader__item'}>
      <a href={'https://frost.readme.io/docs'}>Documentation</a>
    </li>
    <li className={'LinksHeader__item'}>
      <a href={'https://frost.readme.io/v0.1/reference'}>API</a>
    </li>
    <li className={'LinksHeader__item'}>
      <a href={'https://frost.readme.io/discuss'}>Forum</a>
    </li>
  </ul>
)
