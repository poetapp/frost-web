import * as React from 'react'
import { connect } from 'react-redux'
import { FrostState, User } from '../../interfaces/Props'
import { HeaderHome } from '../molecules/HeaderHome/HeaderHome'

interface HeaderHomeContainerProps {
  readonly user: User
}

const mapStateToProps = (state: FrostState): HeaderHomeContainerProps => ({
  user: state.user
})

export const HeaderHomeContainer = connect(mapStateToProps)(
  class extends React.Component<HeaderHomeContainerProps, undefined> {
    render() {
      const { user } = this.props

      return <HeaderHome isLogged={!!user.token} />
    }
  }
)
