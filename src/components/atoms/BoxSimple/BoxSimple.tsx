import * as React from 'react';
import * as classNames from 'classnames';
import { Button } from '../Button/Button';
import './BoxSimple.scss'

interface BoxSimpleProps {
    readonly className?: string;
    readonly title?: string;
    readonly description?: string;
}

export const BoxSimple = (props: BoxSimpleProps) => 
    <div className={classNames('BoxSimple', props.className)}>
        <div className={'BoxSimple__circle'} />
        <h3 className={'BoxSimple__title'}>{props.title}</h3>
        <p className={'BoxSimple__description'}>{props.description}</p>
    </div>