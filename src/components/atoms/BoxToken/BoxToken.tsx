import * as React from 'react';
import * as classNames from 'classnames';
import { Button } from '../Button/Button';
import './BoxToken.scss'

interface BoxTokenProps {
    readonly className?: string;
}

export const BoxToken = (props: BoxTokenProps) => 
    <div className={classNames('BoxToken', props.className)}>
        <header className={'BoxToken__header'}>
            <p>Token Name</p>
        </header>
        <ul className={'BoxToken__list'}>
            <li className={'BoxToken__list__item'}>
                <div className={'BoxToken__list__item__description'}>
                    <p>
                        <span className={'BoxToken__list__item__description__name'}>#000000</span>
                        <span className={'BoxToken__list__item__description__token'}>1jxT8022xjnL00xTBW60cc0kgzz501nl… </span>
                        <span className={'BoxToken__list__item__description__date'}>01-01-01 at 00:00:00</span>
                    </p>
                </div>
                <div className={'BoxToken__list__item__actions'}>
                    <button>Remove</button>
                </div>
            </li>
        </ul>
    </div>