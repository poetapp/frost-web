import { isActiveFeatureName } from '@paralleldrive/feature-toggles'
import { Feature } from '@paralleldrive/react-feature-toggles'
import * as classNames from 'classnames'
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
  <React.Fragment>
    <Feature>
      {({ features }) =>
        <div className={
          isActiveFeatureName(FeatureName.CreateClaimForm, features) ||
            props.network === 'test' ?
              'CreateTokenContainer CreateClaim' :
              'CreateTokenContainer'
            }>
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
          {
            isActiveFeatureName(FeatureName.CreateClaimForm, features)
              ? props.network !== 'test' && (
                <div className={'CreateTokenContainer__create-claim'}>
                    <header className={'CreateTokenContainer__create-claim__header'}>
                      <h2 className={'CreateTokenContainer__create-claim__header__title'}>Create a Claim</h2>
                      <p className={'CreateTokenContainer__create-claim__header__description'}>
                        Create a claim on the Po.et network!
                      </p>
                    </header>
                    <div className={'CreateTokenContainer__create-claim__form'}>
                    <CreateClaim
                      onSubmit={props.onCreateClaim}
                      disabledButton={props.createClaimDisabled}
                    />
                  </div>
                  </div>
                  )
              : null
          }
          {
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
        </div>
      }
    </Feature>
  </React.Fragment>
)
