import * as React from 'react';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { PanelOptions } from '../../molecules/PanelOptions/PanelOptions';
import './Dashboard.style.scss';

export interface DashboardProps {
}

export class DashboardLayout extends React.Component<DashboardProps, undefined> {
  render() {
    return (
      <DashboardTemplate>
        <PanelOptions />
      </DashboardTemplate>
    )
  }
}