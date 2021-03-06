import { LogoPoetBlack } from 'components/atoms/LogoPoetBlack/LogoPoetBlack'
import { ToastPage } from 'components/atoms/ToastPage/ToastPage'
import * as React from 'react'
import { Link } from 'react-router'

import './VerifiedAccount.scss'

export const VerifiedAccount = () => (
  <ToastPage>
    <div className="VerifiedAccount">
      <Link to={'/'}>
        <LogoPoetBlack className="VerifiedAccount__LogoPoetBlack" />
      </Link>
      <h1 className="VerifiedAccount__title">
        Po.et API is an open API for publishers and content creators to interact with the Po.et Network.
      </h1>
    </div>
  </ToastPage>
)
