import * as React from 'react';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { CreateToken } from '../../molecules/CreateToken/CreateToken';
import './Token.style.scss';

export interface TokenProps {
}

export class TokenLayout extends React.Component<TokenProps, undefined> {
  render() {
    return (
      <DashboardTemplate>
        <CreateToken />
      </DashboardTemplate>
    )
  }
}