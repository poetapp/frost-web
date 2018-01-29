import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router'
import { Actions } from '../../../actions'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import { ForgotPassword } from '../../molecules/Forms/ForgotPassword/ForgotPassword'
import './ForgotPassword.style.scss'

export interface ForgotPasswordProps {}

export class ForgotPasswordLayout extends React.Component<
  ForgotPasswordProps,
  undefined
> {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
    this.onForgotPassword = this.onForgotPassword.bind(this)
  }

  onForgotPassword(data: object) {
    const { store } = this.context
    store.dispatch(Actions.ForgotPassword.onForgotPassword(data))
  }

  render() {
    return (
      <div className="ForgotPassword">
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
