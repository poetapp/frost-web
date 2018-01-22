import * as classNames from 'classnames'
import * as React from 'react'
import { Link } from 'react-router'
import './NavigationList.scss'

interface Linked {
  readonly label: string
  readonly link: string
}
interface NavigationListProps {
  readonly className?: string
  readonly links?: Linked[]
  readonly pathActive: string
}

export const NavigationList = (props: NavigationListProps) => (
  <ul className={classNames('NavigationList', props.className)}>
    {props.links &&
      props.links.map((link, i) => (
        <li
          key={i}
          className={`NavigationList__item ${
            props.pathActive === link.link ? 'NavigationList__item--active' : ''
          }`}
        >
          <Link to={link.link}>{link.label}</Link>
        </li>
      ))}
  </ul>
)
