import * as React from 'react'
import { Link } from 'react-router'
import { LoadingPage } from '../../atoms/LoadingPage/LoadingPage'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import { ToastPage } from '../../atoms/ToastPage/ToastPage'
import { Toggle } from '../../atoms/Toggle/Toggle'
import './DashboardTemplate.scss'

interface DashboardTemplatetProps {
  readonly className?: string
  readonly children?: any
  readonly email?: string
  readonly onLogout?: () => void
  readonly navigation: any
  readonly logout: any
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
            <div
              className={
                'Dashboard__body__header__content d-flex align-items-center justify-content-between'
              }
            >
              <Toggle />
              <props.logout />
            </div>
          </header>
          {props.children}
        </section>
      </main>
    </ToastPage>
  </LoadingPage>
)
