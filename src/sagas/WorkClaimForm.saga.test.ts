import { Frost } from '@po.et/frost-client'
import { delay } from 'redux-saga'
import { takeLatest, call, put } from 'redux-saga/effects'
import { describe } from 'riteway'
const { toast } = require('react-toastify')

import { Actions } from '../actions/index'
import { WorkClaimFormSaga, handleOnWorkClaimSubmit, handleOnWorkClaimSubmitSuccess, handleOnWorkClaimSubmitError } from './WorkClaimForm.saga'
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
    expected: takeLatest(Actions.WorkClaimForm.SUBMIT, handleOnWorkClaimSubmit),
  })

  assert({
    given: 'Work Claim Form Submit Success Action',
    should: 'handle post work request',
    actual: iterator.next().value,
    expected: takeLatest(Actions.WorkClaimForm.SUBMIT_SUCCESS, handleOnWorkClaimSubmitSuccess),
  })

  assert({
    given: 'Work Claim Form Submit Error Action',
    should: 'handle post work request',
    actual: iterator.next().value,
    expected: takeLatest(Actions.WorkClaimForm.SUBMIT_ERROR, handleOnWorkClaimSubmitError),
  })
})

describe('handleOnWorkClaimSubmit()', async assert => {
  const token = 'test-token'
  const work = createWork()
  const workId = 'testWorkId'

  const iterator = handleOnWorkClaimSubmit(Actions.WorkClaimForm.onSubmit({ work, token }))

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
    should: 'reset notifaction bar',
    actual: iterator.next().value,
    expected: put(Actions.WorkClaimForm.onSubmitSuccess({ workId })),
  })
})

describe('WorkClaimForm() Success', async assert => {
  const workId = 'testWorkId'

  const iterator = handleOnWorkClaimSubmitSuccess(Actions.WorkClaimForm.onSubmitSuccess({ workId }))

  assert({
    given: 'Work Claim Form Submit Success Action',
    should: 'set workId in notification bar',
    actual: iterator.next().value,
    expected: put(Actions.NotificationBar.onShowNotificationBar({
      type: 'link-success',
      message: `${Configuration.mainExplorerUrl}/works/${workId}`,
    })),
  })

  assert({
    given: 'next step',
    should: 'delay 3000',
    actual: iterator.next().value,
    expected: call(delay, 3000),
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
    expected: put(Actions.NotificationBar.onResetNotificationBar()),
  })
})


describe('WorkClaimForm() Error', async assert => {
  const error = 'test error'

  const iterator = handleOnWorkClaimSubmitError(Actions.WorkClaimForm.onSubmitError(error))

  assert({
    given: 'Work Claim Form Submit Error Action',
    should: 'set loading to complete',
    actual: iterator.next().value,
    expected: put(Actions.LoadingPage.onLoadingFull()),
  })

  assert({
    given: 'next step',
    should: 'delay 300',
    actual: iterator.next().value,
    expected: call(toast.error, error, {
    className: 'toast',
    autoClose: 2500,
  }),
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
