import { isActiveFeatureName } from '@paralleldrive/feature-toggles'
import { Feature } from '@paralleldrive/react-feature-toggles'
import * as React from 'react'

import { BoxToken } from 'components/atoms/BoxToken/BoxToken'
import { Button } from 'components/atoms/Button/Button'
import { FrostRunKit } from 'components/atoms/FrostRunKit/FrostRunKit'
import { DeleteToken } from 'components/modals/DeleteToken/DeleteToken'
import { CreateClaim } from 'components/molecules/Forms/CreateClaim/CreateClaim'
import { LegendVerifiedAccount } from 'components/molecules/LegendVerifiedAccount/LegendVerifiedAccount'
import { FeatureName } from 'config/features'
import { Network } from 'interfaces/Props'

import './CreateToken.scss'

interface CreateTokenProps {
  readonly boxToken: ReadonlyArray<string>
  readonly showVerifiedAccount: boolean
  readonly sendEmailVarifiedAccount: (event: React.SyntheticEvent) => void
  readonly retryWait: boolean
  readonly onDeleteToken?: () => void
  readonly onCloseModal: () => void
  readonly onShowModal: (apiToken: string) => void
  readonly showDeleteModal: boolean
  readonly disabledButton: boolean
  readonly onCreateApiToken: (event: React.SyntheticEvent) => void
  readonly onCreateClaim?: (data: object) => void
  readonly createClaimDisabled: boolean
  readonly submitDisabled: boolean
  readonly network: Network
  readonly textCreateTokenButton: string
}

export const CreateToken = (props: CreateTokenProps) => (
  <div className={'CreateTokenContainer'}>
    <div className={'CreateToken'}>
      <header className={'CreateTokenContainer__CreateToken__header'}>
        <h2 className={'CreateTokenContainer__CreateToken__header__title'}>API Tokens</h2>
        <p className={'CreateTokenContainer__CreateToken__header__description'}>
          Manage your API tokens for authenticating with the Po.et API.
        </p>
      </header>
      <BoxToken apiTokens={props.boxToken} onDeleteToken={props.onShowModal} />
      <LegendVerifiedAccount
        show={!props.showVerifiedAccount}
        onClick={props.sendEmailVarifiedAccount}
        retryWait={props.retryWait}
      />
      <Button
        className={'CreateTokenContainer__CreateToken__button'}
        text={props.textCreateTokenButton}
        onClick={props.onCreateApiToken}
        disabled={props.submitDisabled}
      />
      <DeleteToken
        onDeleteToken={props.onDeleteToken}
        show={props.showDeleteModal}
        onClose={props.onCloseModal}
        disabledButton={props.disabledButton}
      />
    </div>
    <Feature>
      {({ features }) =>
        isActiveFeatureName(FeatureName.WorkClaimForm, features)
          ? props.network !== 'test' && (
            <div className={'CreateTokenContainer__post-work'}>
                <header className={'CreateTokenContainer__post-work__header'}>
                  <h2 className={'CreateTokenContainer__post-work__header__title'}>Post a Work</h2>
                  <p className={'CreateTokenContainer__post-work__header__description'}>
                    Post a work to the Po.et network!
                  </p>
                </header>
                <div className={'CreateTokenContainer__post-work__form'}>
                <CreateClaim
                  onSubmit={props.onCreateClaim}
                  disabledButton={props.createClaimDisabled}
                />
              </div>
              </div>
             )
          : null
      }
    </Feature>
    <Feature>
      {({ features }) =>
        isActiveFeatureName(FeatureName.RunKit, features)
          ? props.network === 'test' && (
              <div className={'CreateTokenContainer__frost-run-kit'}>
                <header className={'CreateTokenContainer__frost-run-kit__header'}>
                  <h2 className={'CreateTokenContainer__frost-run-kit__header__title'}>Sample Code</h2>
                  <p className={'CreateTokenContainer__frost-run-kit__header__description'}>
                    Try the sample code below to register a test work on Testnet.
                  </p>
                </header>
                <div className={'CreateTokenContainer__frost-run-kit__runkit'}>
                  <FrostRunKit token={props.boxToken[0]} />
                </div>
              </div>
            )
          : null
      }
    </Feature>
  </div>
)
