import * as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from "prop-types";
import { DashboardTemplate } from '../templates/DashboardTemplate/DashboardTemplate';
import { PanelOptions } from '../molecules/PanelOptions/PanelOptions';
import { Actions } from '../../actions'
import { NavigationContainer } from './Navigation.container'
import { LogoutContainer } from './Logout.container'

export class Dashboard extends React.Component<any, undefined> {
  static contextTypes = {
    store: PropTypes.object,
  };

  constructor() {
    super();
  }

  render() {
    const { children } = this.props;

    return (
      <DashboardTemplate logout={LogoutContainer} navigation={NavigationContainer}>
        {children}
      </DashboardTemplate>
    )
  }
}

const mapStateToProps = (state: any) => ({});

export const DashboardContainer = connect(
  mapStateToProps
)(Dashboard)