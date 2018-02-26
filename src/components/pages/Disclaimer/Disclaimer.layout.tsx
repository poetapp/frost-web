import * as React from 'react'
import { FooterHome } from '../../atoms/FooterHome/FooterHome'
import { HeaderTitle } from '../../atoms/HeaderTitle/HeaderTitle'
import { TextDisclaimer } from '../../atoms/TextDisclaimer/TextDisclaimer'
import { HeaderHomeContainer } from '../../containers/HeaderHome.container'
import './Disclaimer.style.scss'

export const DisclaimerLayout = () => (
  <main className={'Disclaimer'}>
    <HeaderHomeContainer />
    <section>
      <HeaderTitle>DISCLAIMER</HeaderTitle>
      <div className={'Disclaimer__text'}>
        <TextDisclaimer />
      </div>
    </section>
    <FooterHome />
  </main>
)
