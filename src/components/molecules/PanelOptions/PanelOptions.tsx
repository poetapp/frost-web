import { isActiveFeatureName } from '@paralleldrive/feature-toggles'
import { Feature } from '@paralleldrive/react-feature-toggles'

import { Announcement } from 'components/atoms/Announcement/Announcement'
import { BoxButton } from 'components/atoms/BoxButton/BoxButton'
import { FeatureName } from 'config/features'
import { Images } from 'images/Images'
import * as React from 'react'
import { Link } from 'react-router'
import './PanelOptions.scss'

interface PanelOptionsProps {}

export const PanelOptions = (props: PanelOptionsProps) => (
  <main className={'PanelOptions'}>
    <div className={'PanelOptions__welcome'}>
      <h2>Welcome to Frost</h2>
      <Feature>
        {({ features }) =>
          isActiveFeatureName(FeatureName.Announcement, features) && (
            <Announcement />
          )}
      </Feature>
    </div>
    <div className={'PanelOptions__box-buttons'}>
      <Link to={'/token'}>
        <BoxButton
          className={'Panel PanelOptions__box-buttons__CreateToken'}
          image={Images.KeySmall}
          title={'API Tokens'}
          description={'Get an API token and start building an integration on top of Po.et using the Frost API.'}
          buttonText={'Get API Token'}
        />
      </Link>

      <a href="https://docs.frost.po.et/docs" target="_blank">
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
