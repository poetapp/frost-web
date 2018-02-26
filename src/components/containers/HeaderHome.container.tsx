import * as PropTypes from 'prop-types'
import * as React from 'react'
import { connect } from 'react-redux'
import { HeaderHome } from '../molecules/HeaderHome/HeaderHome'

class Header extends React.Component<any, undefined> {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
  }

  render() {
    const { user } = this.props

    return <HeaderHome isLogged={user.token ? true : false} />
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user
})

export const HeaderHomeContainer = connect(mapStateToProps)(Header)
