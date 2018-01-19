import * as React from 'react';
import * as classNames from 'classnames';
import './Logout.scss'

interface LogoutProps {
    readonly className?: string;
    readonly email?: string
    readonly onLogout?: () => void
}

export const Logout = (props: LogoutProps) => 
    <div className={classNames('Logout d-flex flex-column align-items-end', props.className)}>
        <p className={'Logout__text'}>{props.email}</p>
        <button className={'Logout__button'} onClick={props.onLogout}>Logout</button>
    </div>
