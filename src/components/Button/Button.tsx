import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames'
import './Button.scss'

interface ButtonProps {
    readonly text?: string;
    readonly className?: string;
}

export const Button = (props: ButtonProps) => 
    <button className={classNames('Button', props.className)}>{props.text}</button>