import * as React from 'react';
import { Label } from '../../molecules/Label/Label';
import { Input } from '../../atoms/Input/Input';
import './Checkbox.scss'

interface CheckboxProps {
    readonly name: string;
    readonly className?: string;
    readonly required?: boolean;
    readonly text?: string;
}

export const Checkbox = (props: CheckboxProps) => 
        <Label className={'Checkbox'} text={props.text}>
            <Input name={props.name} className={'Checkbox__Input'} type={'checkbox'} required={props.required} />
        </Label>

