import * as React from 'react'
import { Images } from '../../../images/Images'
import { BoxSimple } from '../../atoms/BoxSimple/BoxSimple'
import { Button } from '../../atoms/Button/Button'
import { FooterHome } from '../../atoms/FooterHome/FooterHome'
import { LogoFrostOnly } from '../../atoms/LogoFrostOnly/LogoFrostOnly'
import { LogoPoetWhite } from '../../atoms/LogoPoetWhite/LogoPoetWhite'
import { HeaderHomeContainer } from '../../containers/HeaderHome.container'
import './Home.style.scss'

export const HomeLayout = () => (
  <main className={'Home'}>
    <HeaderHomeContainer />
    <section className={'Home__cover-page'}>
      <div className={'Home__cover-page__box'}>
        <div>
          <LogoPoetWhite className={'Home__cover-page__box__logo'} />
          <h1 className={'Home__cover-page__box__title'}>
            An Open API Layer <br />for Publishers
          </h1>
          <p className={'Home__cover-page__box__description'}>
            Frost is an open API for developing integrations, registering works,
            and integrating your web app to the Po.et network, without having to
            build your own private key infrastructure.{' '}
          </p>
          <div className={'Home__cover-page__buttons'}>
            <a href={'https://docs.frost.po.et/docs'}>
              <Button
                className={'Home__cover-page__box__btn-token'}
                text={'Get Started'}
              />
            </a>
            <a href={'https://docs.frost.po.et/v0.1/reference'}>
              <Button
                className={'Home__cover-page__box__btn-started'}
                text={'API Docs'}
              />
            </a>
          </div>
        </div>
        <div>
          <LogoFrostOnly />
        </div>
      </div>
    </section>
    <section className={'Home__what-frost'}>
      <div className={'Home__what-frost__box'}>
        <h2 className={'Home__what-frost__box__title'}>Why Frost?</h2>
        <p className={'Home__what-frost__box__description'}>
          The easiest way for content publishers and developers to interact with
          the Po.et network.
        </p>
        <div className={'Home__what-frost__box__container-box-simple'}>
          <BoxSimple
            header={<img src={Images.Integrations} />}
            className={'Home__what-frost__box__simple'}
            title={'Build Integrations'}
            description={`Easily build upon our library of existing CMS
                  plugins or build custom integrations to register your
                  creative works to the Po.et network.`}
          />
          <BoxSimple
            header={<img src={Images.NoKey} />}
            className={'Home__what-frost__box__simple'}
            title={'Private Key Management'}
            description={`Frost abstracts away the Po.et private key
                  infrastructure for easy integration. You can always
                  migrate your content over later, or graduate to integrating
                  directly to our node.`}
          />
          <BoxSimple
            header={<img src={Images.Documentation} />}
            className={'Home__what-frost__box__simple'}
            title={'A RESTful API'}
            description={`Frost provides an easy to use, RESTful API
                  right out of the box, and exposes an easy to use library,
                  so you can focus on writing your application.`}
          />
        </div>
      </div>
    </section>
    <FooterHome />
  </main>
)
