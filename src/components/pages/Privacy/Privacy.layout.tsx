import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Images } from '../../../images/Images'
import { Button } from '../../atoms/Button/Button'
import { FooterHome } from '../../atoms/FooterHome/FooterHome'
import { HeaderTitle } from '../../atoms/HeaderTitle/HeaderTitle'
import { LinksHeader } from '../../atoms/LinksHeader/LinksHeader'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import { TextPrivacy } from '../../atoms/TextPrivacy/TextPrivacy'
import './Privacy.style.scss'

export class Privacy extends React.Component<any, undefined> {
  render() {
    const { user } = this.props
    return (
      <main className={'Privacy'}>
        <header className={'Home__header'}>
          <div
            className={
              'Home__header__box d-flex align-items-center justify-content-between'
            }
          >
            <div
              className={'Home__header__box__left d-flex align-items-center'}
            >
              <LogoFrost className={'Home__header__box__logo'} />
              <LinksHeader />
            </div>
            {user.token ? (
              <Link to={'/dashboard'}>
                <Button
                  className={'Home__header__box__button'}
                  text={'Dashboard'}
                />
              </Link>
            ) : (
              <Link to={'/login'}>
                <Button
                  className={'Home__header__box__button'}
                  text={'Login / Sign Up'}
                />
              </Link>
            )}
          </div>
        </header>

        <section>
          <HeaderTitle title={'PRIVACY POLICY'} />
          <div className={'Privacy__text'}>
            <TextPrivacy />
          </div>
        </section>
        <FooterHome
          className={'Home__footer'}
          leftContent={
            <a href={'https://po.et'} target={'_blank'}>
              <img src={Images.PoetBlack} />
            </a>
          }
          rightContent={
            <span>
              © 2018 POET TECHNOLOGY LIMITED |{' '}
              <Link to={'/privacy'}>PRIVACY</Link>
            </span>
          }
        />
      </main>
    )
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user
})

export const PrivacyLayout = connect(mapStateToProps)(Privacy)
