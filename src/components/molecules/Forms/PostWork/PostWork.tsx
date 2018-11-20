import * as React from 'react'

import { Input } from 'components/atoms/Input/Input'
import { Form } from 'components/molecules/Form/Form'

interface PostWorkProps {
  readonly onSubmit: (event: any) => any
  readonly disabledButton?: boolean
  readonly serverErrors?: any
  readonly email: string
}

export const PostWork = (props: PostWorkProps) => {
  const { onSubmit, disabledButton, email } = props
  return (
    <Form
      onSubmit={onSubmit}
      legend={'Sign Up'}
      textButton={'Sign Up'}
      disabledButton={disabledButton}
    >
      <Input
        name={'name'}
        type={'text'}
        placeholder={'Name'}
        required
      />
      <Input
        name={'author'}
        type={'text'}
        placeholder={`${email}`}
        required
      />
      <Input
        name={'datePublished'}
        type={'text'}
        placeholder={`${new Date().toISOString()}`}
        required
      />
      <Input
        name={'dateCreated'}
        type={'text'}
        placeholder={`${new Date().toISOString()}`}
        required
      />
      <Input
        name={'content'}
        type={'text'}
        placeholder={'Post a work to the Po.et Network!'}
        required
      />
    </Form>
  )
}
