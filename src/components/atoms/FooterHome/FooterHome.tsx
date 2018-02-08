import * as React from 'react'
import './FooterHome.scss'

interface FooterHomeProps {
  readonly leftContent?: any
  readonly rightContent?: any
}

export const FooterHome = (props: FooterHomeProps) => (
  <footer className={'FooterHome'}>
    <div
      className={
        'FooterHome__container d-flex align-items-center justify-content-between'
      }
    >
      <div className={'FooterHome__container__leftContent'}>
        {props.leftContent}
      </div>
      <div className={'FooterHome__container__rightContent'}>
        {props.rightContent}
      </div>
    </div>
  </footer>
)
