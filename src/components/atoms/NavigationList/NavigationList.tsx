import * as classNames from 'classnames'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import { Link } from 'react-router'
import './NavigationList.scss'

interface Linked {
  readonly label: string
  readonly link: string
  readonly external?: boolean
}
interface NavigationListProps extends ClassNameProps {
  readonly links?: ReadonlyArray<Linked>
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
          {link.external && link.external === true ? (
            <a href={link.link}>{link.label}</a>
          ) : (
            <Link to={link.link}>{link.label}</Link>
          )}
        </li>
      ))}
  </ul>
)
