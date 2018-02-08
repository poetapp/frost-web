import * as React from 'react'
import { Link } from 'react-router'
import { BoxButton } from '../../atoms/BoxButton/BoxButton'
import './PanelOptions.scss'

interface PanelOptionsProps {}

export const PanelOptions = (props: PanelOptionsProps) => (
  <div className={'PanelOptions'}>
    <section className={'PanelOptions__actions'}>
      <div className={'PanelOptions__actions__welcome'}>
        <h2>Welcome to Frost</h2>
      </div>
      <div className={'PanelOptions__actions__box-buttons'}>
        <Link to={'/token'}>
          <BoxButton
            title={'API Keys'}
            description={
              'Get started building out an integration on top of po.et using the frost API.'
            }
            buttonText={'Get API Key'}
          />
        </Link>

        <a href="https://docs.frost.po.et/docs">
          <BoxButton
            title={'Documentation & Guides'}
            description={
              'View a list of getting started guides and full API documentation for interacting with the Po.et Network. '
            }
            buttonText={'View Docs'}
          />
        </a>
      </div>
    </section>
  </div>
)
