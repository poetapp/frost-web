import { FooterHome } from 'components/atoms/FooterHome/FooterHome'
import { HeaderTitle } from 'components/atoms/HeaderTitle/HeaderTitle'
import { TextPrivacy } from 'components/atoms/TextPrivacy/TextPrivacy'
import { HeaderHomeContainer } from 'components/containers/HeaderHome.container'
import * as React from 'react'
import './Privacy.style.scss'

export const PrivacyLayout = () => (
  <main className={'Privacy'}>
    <HeaderHomeContainer />
    <section>
      <HeaderTitle>PRIVACY POLICY</HeaderTitle>
      <div className={'Privacy__text'}>
        <TextPrivacy />
      </div>
    </section>
    <FooterHome />
  </main>
)
