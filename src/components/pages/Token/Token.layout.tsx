import * as React from 'react';
import { connect } from 'react-redux';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { CreateToken } from '../../molecules/CreateToken/CreateToken';
import './Token.style.scss';

@connect(({ user }) => ({
  user
}))
export class TokenLayout extends React.Component<any, any> {
  render() {
    const { user } = this.props;
    const { email } = user;

    return (
      <DashboardTemplate email={email}>
        <CreateToken />
      </DashboardTemplate>
    )
  }
}