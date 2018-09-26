import { BoxButton } from 'components/atoms/BoxButton/BoxButton'
import { FrostRunKit } from 'components/atoms/RunKit/RunKit'
import { Images } from 'images/Images'
import { User } from 'interfaces/Props'
import * as React from 'react'
import { Link } from 'react-router'
import './PanelOptions.scss'

interface PanelOptionsProps {
  readonly user: User
}

export const PanelOptions = (props: PanelOptionsProps) => (
  <main className={'PanelOptions'}>
    <div className={'PanelOptions__welcome'}>
      <h2>Welcome to Frost</h2>
    </div>
    <div className={'PanelOptions__box-buttons'}>
      <Link to={'/token'}>
        <BoxButton
          className={'Panel PanelOptions__box-buttons__CreateToken'}
          image={Images.KeySmall}
          title={'API Keys'}
          description={'Get started building out an integration on top of po.et using the frost API.'}
          buttonText={'Get API Key'}
        />
      </Link>

      <a href="https://docs.frost.po.et/docs" target="_blank">
        <BoxButton
          image={Images.Book}
          title={'Documentation & Guides'}
          description={
            'View a list of getting started guides and full API documentation for interacting with the Po.et Network. '
          }
          buttonText={'View Docs'}
        />
      </a>
    </div>
    <FrostRunKit token={props.user.profile.apiTokens[0]} email={props.user.profile.email} />
  </main>
)
