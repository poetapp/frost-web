import * as React from 'react'

import { Input } from 'components/atoms/Input/Input'
import { Form } from 'components/molecules/Form/Form'

import './PostWork.scss'

interface PostWorkProps {
  readonly onSubmit: (event: any) => any
  readonly disabledButton?: boolean
  readonly serverErrors?: any
  readonly email: string
}

const onValidate = () => true

export const PostWork = (props: PostWorkProps) => {
  const { onSubmit, disabledButton } = props
  return (
    <div className={'PostWork'}>
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
          className="PostWork__name"
        />
        <Input
          name={'author'}
          type={'text'}
          placeholder={'Your Name'}
          required
          className="PostWork__author"
        />
        <Input
          name={'datePublished'}
          type={'text'}
          defaultValue={new Date().toISOString()}
          required
          className={'PostWork__datePublished'}
        />
        <Input
          name={'dateCreated'}
          type={'text'}
          defaultValue={new Date().toISOString()}
          required
          className={'PostWork__dateCreated'}
        />
        <Input
          name={'tags'}
          type={'text'}
          placeholder={'Tags: Seperate By Commas'}
          required
          className={'PostWork__tags'}
        />
        <Input
          name={'content'}
          type={'text-area'}
          placeholder={'Claim Content'}
          required
          className={'PostWork__content'}
        />
      </Form>
    </div>
  )
}
