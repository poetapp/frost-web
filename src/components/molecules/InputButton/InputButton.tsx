import * as React from 'react';
import * as classNames from 'classnames';
import { Button } from '../../atoms/Button/Button';
import './InputButton.scss'

interface InputButtonProps {
    readonly name: string;
    readonly type: string;
    readonly className?: string;
    readonly placeholder?: string;
    readonly required?: boolean;
    readonly textButton?: string;
    onSubmit(event: any): void;
}

const onSubmit = (event: any, callback: any) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    let currentData = [];
    
    for (let key of data.keys()) {
        const input = form.elements[key];
        const value = input.value;
        const name = input.name;
        currentData.push({ name, value })
    }

    callback(currentData)
}

export const InputButton = (props: InputButtonProps) =>
    <div className={'InputButton d-flex'}>
        <form onSubmit={event=> onSubmit(event, props.onSubmit)}>
            <input name={props.name}
                type={props.type} 
                className={classNames('InputButton__input', props.className)} 
                placeholder={props.placeholder} 
                required={props.required} />
            <Button className={'InputButton__button'} text={props.textButton} />
        </form>
    </div>
