import { Frost } from '@po.et/frost-client'
import { delay } from 'redux-saga'
import { takeLatest, call, put } from 'redux-saga/effects'
import { describe } from 'riteway'
const { toast } = require('react-toastify')

import { Actions } from '../actions/index'
import { CreateClaimSaga, handleOnCreateClaim, handleOnCreateClaimSuccess, handleOnCreateClaimError } from './CreateClaim.saga'
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

describe('CreateClaimSaga Saga', async assert => {
  const iterator = CreateClaimSaga()();
  
  assert({
    given: 'Work Claim Form Submit Action',
    should: 'handle post work request',
    actual: iterator.next().value,
    expected: takeLatest(Actions.CreateClaim.CREATE_CLAIM, handleOnCreateClaim),
  })

  assert({
    given: 'Work Claim Form Submit Success Action',
    should: 'handle post work request',
    actual: iterator.next().value,
    expected: takeLatest(Actions.CreateClaim.CREATE_CLAIM_SUCCESS, handleOnCreateClaimSuccess),
  })

  assert({
    given: 'Work Claim Form Submit Error Action',
    should: 'handle post work request',
    actual: iterator.next().value,
    expected: takeLatest(Actions.CreateClaim.CREATE_CLAIM_ERROR, handleOnCreateClaimError),
  })
})

describe('handleOnCreateClaim()', async assert => {
  const token = 'test-token'
  const work = createWork()
  const workId = 'testWorkId'

  const iterator = handleOnCreateClaim(Actions.CreateClaim.onCreateClaim({ work, token }))

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
    expected: put(Actions.CreateClaim.onCreateClaimSuccess({ workId })),
  })
})

describe('WorkClaimForm() Success', async assert => {
  const workId = 'testWorkId'

  const iterator = handleOnCreateClaimSuccess(Actions.CreateClaim.onCreateClaimSuccess({ workId }))

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

  const iterator = handleOnCreateClaimError(Actions.CreateClaim.onCreateClaimError(error))

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
    expected: put(Actions.CreateClaim.onCreateClaimClearError()),
  })
})
