import * as React from 'react'
import * as PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Actions } from '../../../actions'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import './VerifiedAccount.style.scss'


export class VerifiedAccount extends React.Component<
  any,
  undefined
> {

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
    const { user, verifiedAccount } = this.props
    const { verified } = user
    let displayText = 'Verifying your account...'

    if (!verifiedAccount.loading) 
      displayText = verified ? 'Yor account is verified' : 'Yor account is not verified'
    

    if (verifiedAccount.error.status) 
      displayText = `Something is wrong... <br/> ${verifiedAccount.error.message}`
    
    
    return (
      <div className="VerifiedAccount">
        <Link to={'/'}>
          <LogoFrost className="VerifiedAccount__LogoFrost" />
        </Link>
        <h1 className="VerifiedAccount__title">
          Frost is an open API for publishers and content creators to interact
          with the Po.et Network.
        </h1>
        <div className={'row'}>
          <div className={'col-4'} dangerouslySetInnerHTML={{ __html: displayText }} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
  verifiedAccount: state.verifiedAccount
})

export const VerifiedAccountLayout = connect(mapStateToProps)(VerifiedAccount)