import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames'

import './Root.scss'

interface RootLayoutProps {
  readonly children?: any;
}

export const Layout = function render(props: RootLayoutProps) {
  return (
    <div className="root-layout">
        { props.children }
    </div>
  );
}

