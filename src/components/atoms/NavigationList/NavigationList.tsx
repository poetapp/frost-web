import * as React from 'react';
import * as classNames from 'classnames'
import './NavigationList.scss'

interface NavigationListProps {
    readonly className?: string;
}

export const NavigationList = (props: NavigationListProps) => 
    <ul className={classNames('NavigationList', props.className)}>
        <li className={'NavigationList__item NavigationList__item--active'}><a href={'link'}>Dashboard</a></li>
        <li className={'NavigationList__item'}><a href={'link'}>Generate API Key</a></li>
        <li className={'NavigationList__item'}><a href={'link'}>Documentation</a></li>
    </ul>
