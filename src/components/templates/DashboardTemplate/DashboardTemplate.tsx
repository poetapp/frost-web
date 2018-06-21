import { LoadingPage } from 'components/atoms/LoadingPage/LoadingPage'
import { LogoFrost } from 'components/atoms/LogoFrost/LogoFrost'
import { NotificationBar } from 'components/atoms/NotificationBar/NotificationBar'
import { ToastPage } from 'components/atoms/ToastPage/ToastPage'
import { Toggle } from 'components/atoms/Toggle/Toggle'
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
  readonly notificationBar: NotificationBarState
}

export const DashboardTemplate = (props: DashboardTemplatetProps) => (
  <LoadingPage>
    <ToastPage>
      <main className={'Dashboard d-flex'}>
        <nav className={'Dashboard__nav'}>
          <header className={'Dashboard__nav__header'}>
            <Link to={'/'}>
              <LogoFrost className={'Dashboard__nav__header__logo'} />
            </Link>
          </header>
          <props.navigation />
        </nav>
        <section className={'Dashboard__body'}>
          <header className={'Dashboard__body__header'}>
            <div className={'Dashboard__body__header__content d-flex align-items-center justify-content-between'}>
              <Toggle />
              <props.logout />
            </div>
            <NotificationBar type={props.notificationBar.type} action={props.notificationBar.action}>
              {props.notificationBar.message}
            </NotificationBar>
          </header>
          {props.children}
        </section>
      </main>
    </ToastPage>
  </LoadingPage>
)
