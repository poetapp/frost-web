import * as React from 'react'
import { Link } from 'react-router'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import { ToastPage } from '../../atoms/ToastPage/ToastPage'

import './VerifiedAccount.scss'

export const VerifiedAccount = () => (
  <ToastPage>
    <div className="VerifiedAccount">
      <Link to={'/'}>
        <LogoFrost className="VerifiedAccount__LogoFrost" />
      </Link>
      <h1 className="VerifiedAccount__title">
        Frost is an open API for publishers and content creators to interact
        with the Po.et Network.
      </h1>
    </div>
  </ToastPage>
)
