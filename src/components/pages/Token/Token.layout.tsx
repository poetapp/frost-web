import * as React from 'react'
import { connect } from 'react-redux'
import { DashboardContainer } from '../../containers/Dashboard.container'
import { CreateToken } from '../../molecules/CreateToken/CreateToken'
import './Token.style.scss'

export class Token extends React.Component<any, any> {
  render() {
    const { user } = this.props
    const { apiToken } = user
    return (
      <DashboardContainer>
        <CreateToken boxToken={apiToken} />
      </DashboardContainer>
    )
  }
}


const mapStateToProps = (state: any) => ({
  user: state.user
})

export const TokenLayout = connect(mapStateToProps)(Token)