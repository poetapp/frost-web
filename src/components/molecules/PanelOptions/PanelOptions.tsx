import { BoxButton } from 'components/atoms/BoxButton/BoxButton'
import { Images } from 'images/Images'
import * as React from 'react'
import { Link } from 'react-router'
import './PanelOptions.scss'

interface PanelOptionsProps {}

export const PanelOptions = (props: PanelOptionsProps) => (
  <main className={'PanelOptions'}>
    <div className={'PanelOptions__welcome'}>
      <h2>Welcome to Frost</h2>
    </div>
    <div className={'PanelOptions__box-buttons'}>
      <Link to={'/token'}>
        <BoxButton
          className={'Panel CreateToken'}
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
  </main>
)
