import * as React from 'react'

import { Input } from 'components/atoms/Input/Input'
import { Form } from 'components/molecules/Form/Form'

import './WorkClaimForm.scss'

interface WorkClaimFormProps {
  readonly onSubmit: (event: any) => any
  readonly disabledButton?: boolean
  readonly serverErrors?: any
  readonly email: string
}

const onValidate = () => true

export const WorkClaimForm = (props: WorkClaimFormProps) => {
  const { onSubmit, disabledButton } = props
  return (
    <div className={'WorkClaimForm'}>
      <Form
        legend={''}
        onValidate={onValidate}
        onSubmit={onSubmit}
        textButton={'Post Work'}
        disabledButton={disabledButton}
      >
        <Input
          name={'name'}
          type={'text'}
          placeholder={'Claim Name'}
          required
          className="WorkClaimForm__name"
        />
        <Input
          name={'author'}
          type={'text'}
          placeholder={'Your Name'}
          required
          className="WorkClaimForm__author"
        />
        <Input
          name={'datePublished'}
          type={'text'}
          defaultValue={new Date().toISOString()}
          required
          className={'WorkClaimForm__datePublished'}
        />
        <Input
          name={'dateCreated'}
          type={'text'}
          defaultValue={new Date().toISOString()}
          required
          className={'WorkClaimForm__dateCreated'}
        />
        <Input
          name={'tags'}
          type={'text'}
          placeholder={'Tags: Seperate By Commas'}
          className={'WorkClaimForm__tags'}
        />
        <Input
          name={'content'}
          type={'text-area'}
          placeholder={'Claim Content'}
          required
          className={'WorkClaimForm__content'}
        />
      </Form>
    </div>
  )
}
