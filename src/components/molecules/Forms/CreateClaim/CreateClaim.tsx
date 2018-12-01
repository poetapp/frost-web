import * as classNames from 'classnames'
import * as React from 'react'

import { Button } from 'components/atoms/Button/Button'
import { Input } from 'components/atoms/Input/Input'
import { Form } from 'components/molecules/Form/Form'
import { getParsedForm } from 'helpers'

import { render } from 'react-dom'
import './CreateClaim.scss'

interface CreateClaimProps {
  readonly onSubmit: (event: Event) => any
  readonly disabledButton?: boolean
  readonly serverErrors?: any
}

const onValidate = () => true

export class CreateClaim extends React.Component<CreateClaimProps, undefined> {
  readonly onSubmit = (
    event: any,
    submit = (data: object, elements: any) => ({}),
  ): void => {
    event.preventDefault()
    const form = event.target
    const { currentData, elements } = getParsedForm(form)
    submit(currentData, elements)
  }

  render(): JSX.Element {
    const { onSubmit, disabledButton } = this.props
    return (
      <div className={'CreateClaim'}>
        <form
          onSubmit={event => this.onSubmit(event, onSubmit)}
        >
          <div className="row">
            <div className="col-12">
              <label htmlFor="name" className={'CreateClaim__label'}>
                Claim Name
                <Input
                  name={'name'}
                  type={'text'}
                  placeholder={'name/title of the work'}
                  required
                  className={classNames('CreateClaim__label__name')}
                />
              </label>
              <label htmlFor="author" className="CreateClaim__label">
                Your Name
                <Input
                  name={'author'}
                  type={'text'}
                  placeholder={'the author’s name'}
                  required
                  className={'CreateClaim__label__author'}
                />
              </label>
              <label htmlFor="dateCreated" className="CreateClaim__label">
                Date Created
                <Input
                  name={'dateCreated'}
                  type={'text'}
                  defaultValue={new Date().toISOString()}
                  required
                  className={'CreateClaim__label__dateCreated'}
                />
              </label>
              <label htmlFor="tags" className="CreateClaim__label">
                Tags
                <Input
                  name={'tags'}
                  type={'text'}
                  placeholder={'separate with commas'}
                  className={'CreateClaim__label__tags'}
                />
              </label>
              <label htmlFor="content" className="CreateClaim__label">
                Claim Content
                <Input
                  name={'content'}
                  type={'text-area'}
                  placeholder={'the body of content for your work'}
                  required
                  className={'CreateClaim__label__content'}
                />
              </label>
            </div>
            <div className="col-6 submit-button">
              <Button text={'Create Claim'} disabled={disabledButton} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
