import * as React from 'react'
import { FooterHome } from '../../atoms/FooterHome/FooterHome'
import { HeaderTitle } from '../../atoms/HeaderTitle/HeaderTitle'
import { TextPrivacy } from '../../atoms/TextPrivacy/TextPrivacy'
import { HeaderHomeContainer } from '../../containers/HeaderHome.container'
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
