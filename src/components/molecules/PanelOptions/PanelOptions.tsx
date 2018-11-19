import { BoxButton } from 'components/atoms/BoxButton/BoxButton'
import { Images } from 'images/Images'
import * as React from 'react'
import { Link } from 'react-router'
import './PanelOptions.scss'

interface PanelOptionsProps {}

export const PanelOptions = (props: PanelOptionsProps) => (
  <main className={'PanelOptions'}>
    <div className={'PanelOptions__welcome'}>
      <h2>Welcome to Po.et Api</h2>
    </div>
    <div className={'PanelOptions__box-buttons'}>
      <Link to={'/token'}>
        <BoxButton
          className={'Panel PanelOptions__box-buttons__CreateToken'}
          image={Images.KeySmall}
          title={'API Tokens'}
          description={'Get an API token and start building an integration on top of Po.et using the Po.et API.'}
          buttonText={'Get API Token'}
        />
      </Link>

      <a href="https://docs.poetnetwork.net/use-poet/getting-started.html" target="_blank">
        <BoxButton
          image={Images.Book}
          title={'Documentation & Guides'}
          description={'View the getting started guide and API documentation for interacting with the Po.et Network.'}
          buttonText={'View Docs'}
        />
      </a>
    </div>
  </main>
)
