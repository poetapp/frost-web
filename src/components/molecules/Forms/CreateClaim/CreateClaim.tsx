import * as React from 'react'

import { Input } from 'components/atoms/Input/Input'
import { Form } from 'components/molecules/Form/Form'

import './CreateClaim.scss'

interface CreateClaimProps {
  readonly onSubmit: (event: Event) => any
  readonly disabledButton?: boolean
  readonly serverErrors?: any
}

const onValidate = () => true

export const CreateClaim = (props: CreateClaimProps) => {
  const { onSubmit, disabledButton } = props
  return (
    <div className={'CreateClaim'}>
      <Form
        legend={''}
        onValidate={onValidate}
        onSubmit={onSubmit}
        textButton={'Post Work'}
        disabledButton={disabledButton}
      >
      <div className={'CreateClaim__first'}>
          <Input
            name={'name'}
            type={'text'}
            placeholder={'Claim Name'}
            required
            className="CreateClaim__name"
          />
          <Input
            name={'author'}
            type={'text'}
            placeholder={'Your Name'}
            required
            className="CreateClaim__author"
          />
      </div>
      <div className={'CreateClaim__last'}>
        <Input
          name={'datePublished'}
          type={'text'}
          defaultValue={new Date().toISOString()}
          required
          className={'CreateClaim__datePublished'}
        />
        <Input
          name={'dateCreated'}
          type={'text'}
          defaultValue={new Date().toISOString()}
          required
          className={'CreateClaim__dateCreated'}
        />
        <Input
          name={'tags'}
          type={'text'}
          placeholder={'Tags: Seperate By Commas'}
          className={'CreateClaim__tags'}
        />
        </div>
        <Input
          name={'content'}
          type={'text-area'}
          placeholder={'Claim Content'}
          required
          className={'CreateClaim__content'}
        />
      </Form>
    </div>
  )
}
