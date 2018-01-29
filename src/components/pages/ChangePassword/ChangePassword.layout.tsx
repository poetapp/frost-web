import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router'
import { Actions } from '../../../actions'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import { ChangePassword } from '../../molecules/Forms/ChangePassword/ChangePassword'
import './ChangePassword.style.scss'

export interface ChangePasswordProps {}

export class ChangePasswordLayout extends React.Component<
  ChangePasswordProps,
  undefined
> {
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
    store.dispatch(Actions.ChangePassword.onChangePassword({ ...data, token }))
  }

  render() {
    return (
      <div className="ChangePassword">
        <Link to={'/'}>
          <LogoFrost className="ChangePassword__LogoFrost" />
        </Link>
        <h1 className="ChangePassword__title">
          Frost is an open API for publishers and content creators to interact
          with the Po.et Network.
        </h1>
        <div className={'row'}>
          <div className={'col-4'}>
            <ChangePassword onSubmit={this.onChangePassword} />
          </div>
        </div>
      </div>
    )
  }
}
