import * as PropTypes from 'prop-types'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Actions } from '../../../actions'
import { LoadingPage } from '../../atoms/LoadingPage/LoadingPage'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import { ToastPage } from '../../atoms/ToastPage/ToastPage'

import './VerifiedAccount.style.scss'

export class VerifiedAccount extends React.Component<any, undefined> {
  static contextTypes = {
    store: PropTypes.object,
    router: React.PropTypes.object
  }

  constructor() {
    super()
  }

  componentDidMount() {
    const { store, router } = this.context
    const { token } = router.location.query
    store.dispatch(Actions.VerifiedAccount.onVerifiedAccount({ token }))
  }

  render() {
    const { loadingPage } = this.props
    const { loading, percentage } = loadingPage

    return (
      <LoadingPage loading={loading} percentage={percentage}>
        <ToastPage>
          <div className="VerifiedAccount">
            <Link to={'/'}>
              <LogoFrost className="VerifiedAccount__LogoFrost" />
            </Link>
            <h1 className="VerifiedAccount__title">
              Frost is an open API for publishers and content creators to
              interact with the Po.et Network.
            </h1>
          </div>
        </ToastPage>
      </LoadingPage>
    )
  }
}

const mapStateToProps = (state: any) => ({
  loadingPage: state.loadingPage,
  verifiedAccount: state.verifiedAccount
})

export const VerifiedAccountLayout = connect(mapStateToProps)(VerifiedAccount)
