import * as React from 'react';
import * as classNames from 'classnames'
import './LinksHeader.scss'

interface LinksHeaderProps {
}

export const LinksHeader = (props: LinksHeaderProps) =>
    <ul className={'LinksHeader'}>
        <li className={'LinksHeader__item'}><a href={''}>Documentation</a></li>
        <li className={'LinksHeader__item'}><a href={''}>API</a></li>
        <li className={'LinksHeader__item'}><a href={''}>Forum</a></li>
    </ul>