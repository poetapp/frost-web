import * as classNames from 'classnames'
import { Images } from 'images/Images'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import { Link } from 'react-router'
import './FooterHome.scss'

interface FooterHomeProps extends ClassNameProps {}

export const FooterHome = (props: FooterHomeProps) => (
  <footer className={classNames('FooterHome', props.className)}>
    <div className={'FooterHome__container'}>
      <div className={'FooterHome__container__leftContent'}>
        <a href={'https://www.po.et'} target={'_blank'}>
          <img src={Images.PoetBlack} />
        </a>
      </div>
      <div className={'FooterHome__container__rightContent'}>
        <span>
          © 2017-{new Date().getFullYear()} POET TECHNOLOGY LIMITED | <Link to={'/privacy'}>PRIVACY</Link>
        </span>
      </div>
    </div>
  </footer>
)
