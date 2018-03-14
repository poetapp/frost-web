import { Button } from 'components/atoms/Button/Button'
import { LinksHeader } from 'components/atoms/LinksHeader/LinksHeader'
import { LogoFrost } from 'components/atoms/LogoFrost/LogoFrost'
import * as React from 'react'
import { Link } from 'react-router'
import './HeaderHome.scss'

interface HeaderHomeProps {
  readonly isLogged?: boolean
}

export const HeaderHome = (props: HeaderHomeProps) => (
  <header className={'Header_home'}>
    <div className={'Header_home__box'}>
      <div className={'Header_home__box__left'}>
        <LogoFrost className={'Header_home__box__logo'} />
        <LinksHeader />
      </div>
      {props.isLogged ? (
        <Link to={'/dashboard'}>
          <Button className={'Header_home__box__button'} text={'Dashboard'} />
        </Link>
      ) : (
        <Link to={'/login'}>
          <Button
            className={'Header_home__box__button'}
            text={'Login / Sign Up'}
          />
        </Link>
      )}
    </div>
  </header>
)