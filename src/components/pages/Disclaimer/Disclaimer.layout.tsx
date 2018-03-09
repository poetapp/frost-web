import { FooterHome } from 'components/atoms/FooterHome/FooterHome'
import { HeaderTitle } from 'components/atoms/HeaderTitle/HeaderTitle'
import { TextDisclaimer } from 'components/atoms/TextDisclaimer/TextDisclaimer'
import { HeaderHomeContainer } from 'components/containers/HeaderHome.container'
import 'components/pages/Disclaimer/Disclaimer.style.scss'
import * as React from 'react'

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
