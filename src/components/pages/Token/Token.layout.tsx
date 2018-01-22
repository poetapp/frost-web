import * as React from 'react'
import { DashboardContainer } from '../../containers/Dashboard.container'
import { CreateToken } from '../../molecules/CreateToken/CreateToken'
import './Token.style.scss'

export class TokenLayout extends React.Component<any, any> {
  render() {
    return (
      <DashboardContainer>
        <CreateToken />
      </DashboardContainer>
    )
  }
}
