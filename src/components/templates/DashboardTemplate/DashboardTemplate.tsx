import { LoadingPage } from 'components/atoms/LoadingPage/LoadingPage'
import { LogoPoetWhite } from 'components/atoms/LogoPoetWhite/LogoPoetWhite'
import { NotificationBar } from 'components/atoms/NotificationBar/NotificationBar'
import { ToastPage } from 'components/atoms/ToastPage/ToastPage'
import { NotificationBarState } from 'interfaces/Props'
import * as React from 'react'

import { Link } from 'react-router'
import './DashboardTemplate.scss'

interface DashboardTemplatetProps {
  readonly children?: React.ReactNode
  readonly email?: string
  readonly onLogout?: () => void
  readonly navigation: any
  readonly logout: any
  readonly toggleNetwork: any
  readonly notificationBar: NotificationBarState
}

export const DashboardTemplate = (props: DashboardTemplatetProps) => (
  <LoadingPage>
    <ToastPage>
      <main className={'Dashboard d-flex'}>
        <nav className={'Dashboard__nav'}>
          <header className={'Dashboard__nav__header'}>
            <Link to={'/'}>
              <LogoPoetWhite className={'Dashboard__nav__header__logo'} />
            </Link>
          </header>
          <props.navigation />
        </nav>
        <section className={'Dashboard__body'}>
          <header className={'Dashboard__body__header'}>
            <div className={'Dashboard__body__header__content d-flex align-items-center justify-content-between'}>
              <props.toggleNetwork />
              <props.logout />
            </div>
            <NotificationBar type={props.notificationBar.type} action={props.notificationBar.action}>
              {props.notificationBar.type === 'link-success' ?
              <a target="blank"
                className={'Dashboard__body__link'}
                href={props.notificationBar.message}>
                See Work Here!</a> :
              props.notificationBar.message}
            </NotificationBar>
          </header>
          {props.children}
        </section>
      </main>
    </ToastPage>
  </LoadingPage>
)
