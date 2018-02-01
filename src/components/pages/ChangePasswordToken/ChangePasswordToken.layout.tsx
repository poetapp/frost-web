import * as PropTypes from 'prop-types'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Actions } from '../../../actions'
import { LoadingPage } from '../../atoms/LoadingPage/LoadingPage'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import { ChangePassword } from '../../molecules/Forms/ChangePassword/ChangePassword'
import './ChangePasswordToken.style.scss'

export class ChangePasswordToken extends React.Component<any, undefined> {
  static contextTypes = {
    store: PropTypes.object,
    router: React.PropTypes.object
  }

  constructor() {
    super()
    this.onChangePassword = this.onChangePassword.bind(this)
  }

  onChangePassword(data: object) {
    const { store, router } = this.context
    const { token } = router.location.query
    store.dispatch(
      Actions.ChangePasswordToken.onChangePassword({ ...data, token })
    )
  }

  render() {
    const { loadingPage, changePasswordToken } = this.props
    const { loading, percentage } = loadingPage

    return (
      <LoadingPage loading={loading} percentage={percentage}>
        <div className="ChangePasswordToken">
          <Link to={'/'}>
            <LogoFrost className="ChangePasswordToken__LogoFrost" />
          </Link>
          <h1 className="ChangePasswordToken__title">
            Frost is an open API for publishers and content creators to interact
            with the Po.et Network.
          </h1>
          <div className={'row'}>
            <div className={'col-4'}>
              <ChangePassword
                onSubmit={this.onChangePassword}
                disabledButton={changePasswordToken.loading}
              />
            </div>
          </div>
        </div>
      </LoadingPage>
    )
  }
}

const mapStateToProps = (state: any) => ({
  loadingPage: state.loadingPage,
  changePasswordToken: state.changePasswordToken
})

export const ChangePasswordTokenLayout = connect(mapStateToProps)(
  ChangePasswordToken
)
