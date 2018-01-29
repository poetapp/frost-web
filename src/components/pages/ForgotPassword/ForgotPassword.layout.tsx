import * as PropTypes from 'prop-types'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Actions } from '../../../actions'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import { ForgotPassword } from '../../molecules/Forms/ForgotPassword/ForgotPassword'
import './ForgotPassword.style.scss'
const ProgressBar = require('react-progress-bar-plus')

export class ForgotPasswordContainer extends React.Component<any, undefined> {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
    this.onForgotPassword = this.onForgotPassword.bind(this)
  }

  onForgotPassword(data: object, elements: any) {
    const { store } = this.context
    const { email } = elements
    store.dispatch(Actions.ForgotPassword.onForgotPassword(data))
    email.value = ''
  }

  render() {
    const { loadingPage } = this.props
    const { loading, percentage } = loadingPage
    return (
      <div className="ForgotPassword">
        {loading ? <ProgressBar autoIncrement percent={percentage} /> : null}
        <Link to={'/'}>
          <LogoFrost className="ForgotPassword__LogoFrost" />
        </Link>
        <h1 className="ForgotPassword__title">
          Frost is an open API for publishers and content creators to interact
          with the Po.et Network.
        </h1>
        <div className={'row'}>
          <div className={'col-4'}>
            <ForgotPassword onSubmit={this.onForgotPassword} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  loadingPage: state.loadingPage,
  forgotPassword: state.forgotPassword
})

export const ForgotPasswordLayout = connect(mapStateToProps)(
  ForgotPasswordContainer
)
