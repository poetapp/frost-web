import * as React from 'react';
import * as classNames from 'classnames';
import './Logout.scss'

interface LogoutProps {
    readonly className?: string;
}

export const Logout = (props: LogoutProps) => 
    <div className={classNames('Logout d-flex flex-column align-items-end', props.className)}>
        <p className={'Logout__text'}>robert.frost@po.et</p>
        <button className={'Logout__button'}>Logout</button>
    </div>
