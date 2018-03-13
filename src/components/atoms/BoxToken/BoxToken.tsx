import * as classNames from 'classnames'
import { Hash } from 'components/atoms/Hash/Hash'
import { ClassNameProps } from 'interfaces/Props'
import * as React from 'react'
import './BoxToken.scss'

interface BoxTokenProps extends ClassNameProps {
  readonly apiToken: string
  readonly dateCreated: string
}

export const BoxToken = (props: BoxTokenProps) => (
  <div className={classNames('BoxToken', props.className)}>
    <header className={'BoxToken__header'}>
      <p>Token Name</p>
    </header>
    <ul className={'BoxToken__list'}>
      <li className={'BoxToken__list__item'}>
        <div className={'BoxToken__list__item__description'}>
          <p>
            <span className={'BoxToken__list__item__description__name'}>
              #000000
            </span>
            <span className={'BoxToken__list__item__description__token'}>
              <Hash className="copyable-hash" textClickable>
                {props.apiToken}
              </Hash>
            </span>
            <span className={'BoxToken__list__item__description__date'}>
              {props.dateCreated}
            </span>
          </p>
        </div>
        <div className={'BoxToken__list__item__actions'}>
          <button>Remove</button>
        </div>
      </li>
    </ul>
  </div>
)
