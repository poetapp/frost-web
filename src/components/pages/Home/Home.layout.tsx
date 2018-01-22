import * as React from 'react'
import { Link } from 'react-router'
import { BoxSimple } from '../../atoms/BoxSimple/BoxSimple'
import { Button } from '../../atoms/Button/Button'
import { LinksHeader } from '../../atoms/LinksHeader/LinksHeader'
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost'
import { LogoFrostOnly } from '../../atoms/LogoFrostOnly/LogoFrostOnly'
import { LogoPoetWhite } from '../../atoms/LogoPoetWhite/LogoPoetWhite'
import { InputButton } from '../../molecules/InputButton/InputButton'
import './Home.style.scss'

export interface HomeProps {}

export class HomeLayout extends React.Component<HomeProps, undefined> {
  render() {
    return (
      <main className={'Home'}>
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
            <Link to={'/login'}>
              <Button
                className={'Home__header__box__button'}
                text={'API Dashboard'}
              />
            </Link>
          </div>
        </header>
        <section className={'Home__cover-page'}>
          <div
            className={'Home__cover-page__box d-flex justify-content-between'}
          >
            <div>
              <LogoPoetWhite className={'Home__cover-page__box__logo'} />
              <h1 className={'Home__cover-page__box__title'}>
                An Open API Layer <br />for Publishers
              </h1>
              <p className={'Home__cover-page__box__description'}>
                This is a short description of what exactly the <br />
                Frost API does and why you need it but we really<br />
                need to work on this copy, this is a placeholer.{' '}
              </p>
              <div className={'d-flex'}>
                <Button
                  className={'Home__cover-page__box__btn-token'}
                  text={'Get API Tokens'}
                />
                <Button
                  className={'Home__cover-page__box__btn-started'}
                  text={'Get Started'}
                />
              </div>
            </div>
            <div>
              <LogoFrostOnly />
            </div>
          </div>
        </section>
        <section className={'Home__what-frost'}>
          <div className={'Home__what-frost__box'}>
            <h2 className={'Home__what-frost__box__title'}>What is Frost?</h2>
            <p className={'Home__what-frost__box__description'}>
              Sign up for updates about our dev community for the latest
              announcements.
            </p>
            <div className={'d-flex'}>
              <BoxSimple
                className={'Home__what-frost__box__simple'}
                title={'Title one'}
                description={`Get started building out an integration on top of po.et using the frost API. 
                  Get started building out an integration on top of po.et using the frost API. `}
              />
              <BoxSimple
                className={'Home__what-frost__box__simple'}
                title={'Title one'}
                description={`Get started building out an integration on top of po.et using the frost API. 
                  Get started building out an integration on top of po.et using the frost API.`}
              />
              <BoxSimple
                className={'Home__what-frost__box__simple'}
                title={'Title one'}
                description={`Get started building out an integration on top of po.et using the frost API. 
                Get started building out an integration on top of po.et using the frost API.`}
              />
            </div>
            <div
              className={
                'Home__what-frost__box__updates d-flex align-items-center justify-content-between'
              }
            >
              <div>
                <h3 className={'Home__what-frost__box__updates__title'}>
                  Stay up to Date with Dev Updates
                </h3>
                <p className={'Home__what-frost__box__updates__description'}>
                  Sign up for updates about our dev community for the latest{' '}
                  <br /> announcements and how you can contribute.
                </p>
              </div>
              <div>
                <InputButton
                  placeholder={'Your Email Address'}
                  type={'email'}
                  name={'updates'}
                  textButton={'Sign Up'}
                  required
                />
              </div>
            </div>
          </div>
        </section>
        <footer />
      </main>
    )
  }
}
