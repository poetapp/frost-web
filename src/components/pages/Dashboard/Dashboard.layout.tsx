import * as React from 'react';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import './Dashboard.style.scss';



export interface LoginProps {
}

export class DashboardLayout extends React.Component<LoginProps, undefined> {
  onSubmitSignUp(data: object) {
    console.log("data: ",data);
  }

  onSubmitSignIn(data: object) {
    console.log("data: ",data);
  }

  render() {
    return (
      <DashboardTemplate />
    )
  }
}