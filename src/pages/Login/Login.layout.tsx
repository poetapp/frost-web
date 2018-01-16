import * as React from 'react';
import { LogoFrost } from '../../components/LogoFrost/LogoFrost';
import './Login.style.scss';



export interface LoginProps {
}

export class Layout extends React.Component<LoginProps, undefined> {
  render() {
    return (
      <div className="Login">
        <LogoFrost className="Login__LogoFrost" />
      </div>
    )
  }
}