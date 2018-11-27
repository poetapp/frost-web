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

interface PostWorkState {
  readonly name: string
  readonly author: string
  readonly datePublished: string
  readonly dateCreated: string
  readonly content: string
}

export class PostWork extends React.Component <PostWorkProps, PostWorkState> {
  readonly state = {
    name: 'My First Work!',
    author: this.props.email,
    datePublished: new Date().toISOString(),
    dateCreated: new Date().toISOString(),
    content: 'Post a work to the Po.et Network!',
  }

  handleChange(e: any): void {
    const { name, value } = e.target
    this.setState(state => ({
      ...state,
      [name]: value,
    }))
  }

  onValidate(): boolean {
    return true
  }

  render(): JSX.Element {
    const { onSubmit, disabledButton } = this.props
    return (
      <div className={'PostWork'}>
        <Form
          legend={''}
          onValidate={this.onValidate}
          onSubmit={onSubmit}
          textButton={'Post Work'}
          disabledButton={disabledButton}
        >
          <Input
            name={'name'}
            type={'text'}
            value={this.state.name}
            required
            className="PostWork__name"
            onChange={this.handleChange.bind(this)}
          />
          <Input
            name={'author'}
            type={'text'}
            value={this.state.author}
            required
            className="PostWork__author"
            onChange={this.handleChange.bind(this)}
          />
          <Input
            name={'datePublished'}
            type={'text'}
            value={this.state.datePublished}
            required
            className={'PostWork__datePublished'}
            onChange={this.handleChange.bind(this)}
          />
          <Input
            name={'dateCreated'}
            type={'text'}
            value={this.state.dateCreated}
            required
            className={'PostWork__dateCreated'}
            onChange={this.handleChange.bind(this)}
          />
          <Input
            name={'content'}
            type={'text-area'}
            value={this.state.content}
            required
            className={'PostWork__content'}
            onChange={this.handleChange.bind(this)}
          />
        </Form>
      </div>
    )
  }
}
