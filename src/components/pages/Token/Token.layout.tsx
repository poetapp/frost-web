import * as React from 'react';
import { connect } from 'react-redux';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { CreateToken } from '../../molecules/CreateToken/CreateToken';
import { NavigationContainer } from '../../containers/Navigation.container'
import { DashboardContainer } from '../../containers/Dashboard.container'
import './Token.style.scss';

export class TokenLayout extends React.Component<any, any> {
  render() {
    return (
      <DashboardContainer>
        <CreateToken />
      </DashboardContainer>
    )
  }
}