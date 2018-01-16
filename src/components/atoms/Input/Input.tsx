import * as React from 'react';
import * as classNames from 'classnames'
import './Input.scss'

interface InputProps {
    readonly name: string;
    readonly type: string;
    readonly className?: string;
    readonly placeholder?: string;
    readonly required?: boolean;
    readonly minlength?: number;
    readonly maxlength?: number;
}

export const Input = (props: InputProps) => 
    <input name={props.name}
           type={props.type} 
           className={classNames('Input', props.className)} 
           placeholder={props.placeholder} 
           required={props.required} />
