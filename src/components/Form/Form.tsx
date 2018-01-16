import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames'
import { Button } from '../Button/Button';
import './Form.scss'

interface FormProps {
    onSubmit(event: any): void;
    readonly legend: string;
    readonly children?: any;
    readonly textButton: string;
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

export const Form = (props: FormProps) => 
    <form className="Form" onSubmit={event=> onSubmit(event, props.onSubmit)}>
        <legend className="Form__legend">{props.legend}</legend>
        <div className="row">
            <div className="col-12">
            { props.children }
            </div>
            <div className="col-6">
                <Button text={props.textButton} />
            </div>
        </div>
    </form>

