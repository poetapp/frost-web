import * as React from 'react'
import './LinksHeader.scss'

interface LinksHeaderProps {}

export const LinksHeader = (props: LinksHeaderProps) => (
  <ul className={'LinksHeader'}>
    <li className={'LinksHeader__item'}>
      <a href={'https://docs.poetnetwork.net/use-poet/getting-started.html'}>Get Started</a>
    </li>
    <li className={'LinksHeader__item'}>
      <a href={'https://docs.poetnetwork.net/use-poet/poet-api.html'}>API Docs</a>
    </li>
    <li className={'LinksHeader__item'}>
      <a href={'https://gitter.im/poetapp'}>Developer Forum</a>
    </li>
  </ul>
)
