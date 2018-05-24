import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { wInfo } from '../../../stories/index.stories';
import { text, boolean } from '@storybook/addon-knobs/react';



storiesOf('Components/Button', module).addWithJSX(
  'Basic Button',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <Button
    readonly text?: string
    readonly disabled?: boolean
    readonly onClick?: (event: Event) => void
    readonly type?: 'primary' | 'danger'
    />
  ~~~`
)(() => (
    <Button
      text={text('text', 'Test Button')}
      disabled={boolean('disabled', false)}
      type={text('type','primary')}
      onClick={() => alert('clicked')}
      className={text('className')}
     />
  ))
);
