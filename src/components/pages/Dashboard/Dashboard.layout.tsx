import * as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from "prop-types";
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { PanelOptions } from '../../molecules/PanelOptions/PanelOptions';
import { Actions } from '../../../actions'
import { NavigationContainer } from '../../containers/Navigation.container'
import { DashboardContainer } from '../../containers/Dashboard.container'
import './Dashboard.style.scss';

export class Dashboard extends React.Component<any, undefined> {
  static contextTypes = {
    store: PropTypes.object,
  };

  constructor() {
    super();
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
      const { store } = this.context;
      store.dispatch(Actions.SignOut.onSignOut())
  }

  render() {
    const { user } = this.props;
    const { email } = user;

    return (
      <DashboardContainer>
        <PanelOptions />
      </DashboardContainer>
    )
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user
});

export const DashboardLayout = connect(
  mapStateToProps
)(Dashboard)