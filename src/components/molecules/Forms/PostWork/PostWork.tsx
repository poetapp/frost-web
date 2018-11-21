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
      legend={'Post a Work!'}
      textButton={'Post Work'}
      disabledButton={disabledButton}
    >
      <Input
        name={'name'}
        type={'text'}
        value={'My First Work!'}
        required
      />
      <Input
        name={'author'}
        type={'text'}
        value={`${email}`}
        required
      />
      <Input
        name={'datePublished'}
        type={'text'}
        value={`${new Date().toISOString()}`}
        required
      />
      <Input
        name={'dateCreated'}
        type={'text'}
        value={`${new Date().toISOString()}`}
        required
      />
      <Input
        name={'content'}
        type={'text'}
        value={'Post a work to the Po.et Network!'}
        required
      />
    </Form>
  )
}
