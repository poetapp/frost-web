import * as React from 'react';
import * as PropTypes from "prop-types";
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost';
import { SignUp } from '../../molecules/Forms/SignUp/SignUp';
import { SignIn } from '../../molecules/Forms/SignIn/SignIn';
import { Actions } from '../../../actions'
import './RegisterLogin.style.scss';



export interface RegisterLoginProps {
}

export class RegisterLoginLayout extends React.Component<RegisterLoginProps, undefined> {
  constructor() {
    super();
    this.onSubmitSignUp = this.onSubmitSignUp.bind(this);
    this.onSubmitSignIn = this.onSubmitSignIn.bind(this);
  }

  static contextTypes = {
    store: PropTypes.object,
  };

  onSubmitSignUp(data: object) {
    const { store } = this.context;
    store.dispatch(Actions.SignUp.onSignUp(data));
  }

  onSubmitSignIn(data: object) {
    const { store } = this.context;
    store.dispatch(Actions.SignIn.onSignIn(data));
  }

  render() {
    return (
      <div className="RegisterLogin">
        <a href={'/'}><LogoFrost className="RegisterLogin__LogoFrost" /></a>
        <h1 className="RegisterLogin__title">Frost is an open API for publishers and content creators to interact with the Po.et Network.</h1>
        <div className={'row'}>
          <div className={'col-4'}>
            <SignUp onSubmit={this.onSubmitSignUp} />
          </div>
          <div className={'col-2'}>
            <hr className={'RegisterLogin__vertical-line'}/>
          </div>
          <div className={'col-4 RegisterLogin__signUp'}>
            <SignIn onSubmit={this.onSubmitSignIn} />
          </div>
        </div>
      </div>
    )
  }
}