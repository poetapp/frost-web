import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames'

import './Label.scss'

interface LabelProps {
  readonly children?: any;
  readonly className?: string;
  readonly text?: string;
}

export const Label = function render(props: LabelProps) {
  return (
    <div className={classNames('Label', props.className)}>
        { props.children }
        <label>{props.text}</label>
    </div>
  );
}

