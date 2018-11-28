import { Frost } from '@po.et/frost-client'
import { delay } from 'redux-saga'
import { takeLatest, call, put } from 'redux-saga/effects'
import { describe } from 'riteway'

import { Actions } from '../actions/index'
import { WorkClaimFormSaga, WorkClaimForm } from './WorkClaimForm.saga'
import { WorkAttributes } from '../interfaces/Props'
import { Configuration } from '../configuration'

const createWork = ({
  name = 'name',
  dateCreated = new Date().toISOString(),
  datePublished = new Date().toISOString(),
  content = 'test',
  tags = 'test',
  author = 'author'
}: WorkAttributes = {
  name: 'name',
  dateCreated: new Date().toISOString(),
  datePublished: new Date().toISOString(),
  content: 'test',
  tags: 'test',
  author: 'author'
}) => ({
  name,
  dateCreated,
  datePublished,
  content,
  tags,
  author
})

describe('WorkClaimForm Saga', async assert => {
  const iterator = WorkClaimFormSaga()()
  
  assert({
    given: 'Work Claim Form Submit Action',
    should: 'handle post work request',
    actual: iterator.next().value,
    expected: takeLatest(Actions.WorkClaimForm.SUBMIT, WorkClaimForm),
  })
})

describe('WorkClaimForm() Success', async assert => {
  const token = 'test-token'
  const work = createWork()
  const workId = 'testWorkId'

  const iterator = WorkClaimForm(Actions.WorkClaimForm.onSubmit({ work, token }))

  assert({
    given: 'Work Claim Form Submit Action',
    should: 'set loading status',
    actual: iterator.next().value,
    expected: put(Actions.LoadingPage.onLoadingOn()),
  })

  {
    const frost = new Frost({ host: Configuration.frostApiUrl })
    assert({
      given: 'next step',
      should: 'post work with frost',
      actual: iterator.next().value,
      expected: call([frost, frost.createWork], token, work),
    })
  }

  assert({
    given: 'next step',
    should: 'clear loading',
    actual: iterator.next({ workId }).value,
    expected: put(Actions.LoadingPage.onLoadingFull())
  })

  assert({
    given: 'next step',
    should: 'set workId in notification bar',
    actual: iterator.next().value,
    expected: put(Actions.NotificationBar.onShowNotificationBar({
      type: 'link-success',
      message: `${Configuration.mainExplorerUrl}/works/${workId}`,
    })),
  })

  assert({
    given: 'next step',
    should: 'delay 8000',
    actual: iterator.next().value,
    expected: call(delay, 8000),
  })

  assert({
    given: 'next step',
    should: 'hide notifaction bar',
    actual: iterator.next().value,
    expected: put(Actions.NotificationBar.onHideNotificationBar()),
  })

  assert({
    given: 'next step',
    should: 'delay 2000',
    actual: iterator.next().value,
    expected: call(delay, 2000),
  })

  assert({
    given: 'next step',
    should: 'reset notifaction bar',
    actual: iterator.next().value,
    expected: put(Actions.WorkClaimForm.onSubmitSuccess()),
  })

  assert({
    given: 'next step',
    should: 'reset notifaction bar',
    actual: iterator.next().value,
    expected: put(Actions.NotificationBar.onResetNotificationBar()),
  })

  assert({
    given: 'next step',
    should: 'delay 300',
    actual: iterator.next().value,
    expected: call(delay, 300),
  })
})

describe('WorkClaimForm() Error', async assert => {
  const token = 'test-token'
  const work = createWork()
  const error = 'test error'

  const iterator = WorkClaimForm(Actions.WorkClaimForm.onSubmit({ work, token }))

  assert({
    given: 'Work Claim Form Submit Action',
    should: 'set loading status',
    actual: iterator.next().value,
    expected: put(Actions.LoadingPage.onLoadingOn()),
  })

  assert({
    given: 'next step with error',
    should: 'set loading to complete',
    actual: iterator.throw(error).value,
    expected: put(Actions.LoadingPage.onLoadingFull()),
  })

  assert({
    given: 'next step',
    should: 'set error message',
    actual: iterator.next().value,
    expected: put(Actions.WorkClaimForm.onSubmitError(error)),
  })

  assert({
    given: 'next step',
    should: 'delay 300',
    actual: iterator.next().value,
    expected: call(delay, 300),
  })

  assert({
    given: 'next step',
    should: 'clear error message',
    actual: iterator.next().value,
    expected: put(Actions.WorkClaimForm.onClearError()),
  })
})
