import * as PropTypes from 'prop-types'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Actions } from '../../../actions'
import { LoadingPage } from '../../atoms/LoadingPage/LoadingPage'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import { ToastPage } from '../../atoms/ToastPage/ToastPage'
import { SignIn } from '../../molecules/Forms/SignIn/SignIn'
import { SignUp } from '../../molecules/Forms/SignUp/SignUp'
import './RegisterLogin.style.scss'

export class RegisterLogin extends React.Component<any, undefined> {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
    this.onSubmitSignUp = this.onSubmitSignUp.bind(this)
    this.onSubmitSignIn = this.onSubmitSignIn.bind(this)
  }

  onSubmitSignUp(data: object) {
    const { store } = this.context
    store.dispatch(Actions.SignUp.onSignUp(data))
  }

  onSubmitSignIn(data: object) {
    const { store } = this.context
    store.dispatch(Actions.SignIn.onSignIn(data))
  }

  render() {
    const { loadingPage, signIn, signUp } = this.props
    const { loading, percentage } = loadingPage

    return (
      <LoadingPage loading={loading} percentage={percentage}>
        <ToastPage>
          <div className="RegisterLogin">
            <Link to={'/'}>
              <LogoFrost className="RegisterLogin__LogoFrost" />
            </Link>
            <h1 className="RegisterLogin__title">
              Frost is an open API for publishers and content creators to
              interact with the Po.et Network.
            </h1>
            <div className={'row'}>
              <div className={'col-4'}>
                <SignUp
                  onSubmit={this.onSubmitSignUp}
                  disabledButton={signUp.loading}
                  serverErrors={signUp.error}
                />
              </div>
              <div className={'col-2'}>
                <hr className={'RegisterLogin__vertical-line'} />
              </div>
              <div className={'col-4 RegisterLogin__signIn'}>
                <SignIn
                  onSubmit={this.onSubmitSignIn}
                  disabledButton={signIn.loading}
                  serverErrors={signIn.error}
                />
              </div>
            </div>
          </div>
        </ToastPage>
      </LoadingPage>
    )
  }
}

const mapStateToProps = (state: any) => ({
  loadingPage: state.loadingPage,
  signIn: state.signIn,
  signUp: state.signUp
})

export const RegisterLoginLayout = connect(mapStateToProps)(RegisterLogin)
