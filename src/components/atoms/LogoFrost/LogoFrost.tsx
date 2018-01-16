import * as React from 'react';
import * as classNames from 'classnames'
import { Images } from '../../../images/Images'


interface LogoFrostProps {
    readonly className?: string;
}

export const LogoFrost = (props: LogoFrostProps) => 
    <img src={Images.LogoFrost} className={props.className} />
