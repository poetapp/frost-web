import { BoxSimple } from 'components/atoms/BoxSimple/BoxSimple'
import { Button } from 'components/atoms/Button/Button'
import { FooterHome } from 'components/atoms/FooterHome/FooterHome'
import { LogoFrostOnly } from 'components/atoms/LogoFrostOnly/LogoFrostOnly'
import { LogoPoetWhite } from 'components/atoms/LogoPoetWhite/LogoPoetWhite'
import { HeaderHomeContainer } from 'components/containers/HeaderHome.container'
import { Images } from 'images/Images'
import * as React from 'react'
import './Home.style.scss'

export const HomeLayout = () => (
  <main className={'Home'}>
    <HeaderHomeContainer />
    <section className={'Home__what-frost'}>
      <div className={'Home__what-frost__box'}>
        <h2 className={'Home__what-frost__box__title'}>Why Po.et Api?</h2>
        <p className={'Home__what-frost__box__description'}>
          The easiest way for content publishers and developers to interact with the Po.et Network
        </p>
        <div className={'Home__what-frost__box__container-box-simple'}>
          <BoxSimple
            header={<img src={Images.Integrations} />}
            className={'Home__what-frost__box__simple'}
            title={'Build Integrations'}
            description={`Easily build upon our library of existing CMS
                  plugins or build custom integrations to register your
                  creative works on the Po.et Network.`}
          />
          <BoxSimple
            header={<img src={Images.NoKey} />}
            className={'Home__what-frost__box__simple'}
            title={'Private Key Management'}
            description={`Po.et Api abstracts away the Po.et private key
                  infrastructure for easy integration. You can always
                  change later to integrating directly with our node.`}
          />
          <BoxSimple
            header={<img src={Images.Documentation} />}
            className={'Home__what-frost__box__simple'}
            title={'A RESTful API'}
            description={`Po.et Api provides a simple, RESTful API right out
                  of the box, and exposes an easy to use library so you
                  can focus on writing your application.`}
          />
        </div>
        <div className={'Home__buttons'}>
          <a href={'https://docs.poetnetwork.net/use-poet/getting-started.html'}>
            <Button className={'Home__btn-token'} text={'Get Started'} />
          </a>
          <a href={'https://docs.poetnetwork.net/use-poet/poet-api.html'}>
            <Button className={'Home__btn-started'} text={'API Docs'} />
          </a>
        </div>
      </div>
    </section>
    <FooterHome />
  </main>
)
