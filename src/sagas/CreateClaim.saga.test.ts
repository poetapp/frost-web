import { Frost } from '@po.et/frost-client'
import { toast } from 'react-toastify'
import { delay } from 'redux-saga'
import { takeLatest, call, put } from 'redux-saga/effects'
import { describe } from 'riteway'

import { Actions } from '../actions/index'
import { 
  CreateClaimSaga,
  handleOnCreateClaim, 
  handleOnCreateClaimSuccess, 
  handleOnCreateClaimError 
} from './CreateClaim.saga'
import { WorkAttributes } from '../interfaces/Props'
import { Configuration } from '../configuration'

const frost = new Frost({ host: Configuration.frostApiUrl })

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
    given: `Action with the type ${Actions.CreateClaim.CREATE_CLAIM}`,
    should: 'handle create claim request',
    actual: iterator.next().value,
    expected: takeLatest(Actions.CreateClaim.CREATE_CLAIM, handleOnCreateClaim),
  })

  assert({
    given: `Action with the type ${Actions.CreateClaim.CREATE_CLAIM_SUCCESS}`,
    should: 'handle create claim request',
    actual: iterator.next().value,
    expected: takeLatest(Actions.CreateClaim.CREATE_CLAIM_SUCCESS, handleOnCreateClaimSuccess),
  })

  assert({
    given: `Action with the type ${Actions.CreateClaim.CREATE_CLAIM_ERROR}`,
    should: 'handle create claim request',
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
    given: `Action with the type ${Actions.CreateClaim.CREATE_CLAIM}`,
    should: 'set loading status',
    actual: iterator.next().value,
    expected: put(Actions.LoadingPage.onLoadingOn()),
  })

  assert({
    given: 'next step',
    should: 'create claim with frost',
    actual: iterator.next().value,
    expected: call(
      [frost, frost.createWork],
      token,
      {
        ...work,
        datePublished: new Date().toISOString(),
      }),
  })

  assert({
    given: 'next step',
    should: 'clear loading',
    actual: iterator.next({ workId }).value,
    expected: put(Actions.LoadingPage.onLoadingFull())
  })

  assert({
    given: 'next step',
    should: 'reset notification bar',
    actual: iterator.next().value,
    expected: put(Actions.CreateClaim.onCreateClaimSuccess({ workId })),
  })
})

describe('handleOnCreateClaimSuccess', async assert => {
  const workId = 'testWorkId'

  const iterator = handleOnCreateClaimSuccess(Actions.CreateClaim.onCreateClaimSuccess({ workId }))

  assert({
    given: `Action with the type ${Actions.CreateClaim.CREATE_CLAIM_SUCCESS}`,
    should: 'show notification bar with link to work',
    actual: iterator.next().value,
    expected: put(Actions.NotificationBar.onShowNotificationBar({
      type: 'link-success',
      message: `${Configuration.mainExplorerUrl}/works/${workId}`,
    })),
  })

  assert({
    given: 'next step',
    should: 'wait before hiding notification bar',
    actual: iterator.next().value,
    expected: call(delay, 3000),
  })

  assert({
    given: 'next step',
    should: 'hide notification bar',
    actual: iterator.next().value,
    expected: put(Actions.NotificationBar.onHideNotificationBar()),
  })

  assert({
    given: 'next step',
    should: 'wait before resetting the notification bar',
    actual: iterator.next().value,
    expected: call(delay, 2000),
  })

  assert({
    given: 'next step',
    should: 'reset notification bar',
    actual: iterator.next().value,
    expected: put(Actions.NotificationBar.onResetNotificationBar()),
  })
})


describe('handleOnCreateClaimError', async assert => {
  const error = 'test error'

  const iterator = handleOnCreateClaimError(Actions.CreateClaim.onCreateClaimError(error))

  assert({
    given: `Action with the type ${Actions.CreateClaim.CREATE_CLAIM_ERROR}`,
    should: 'set loading to complete',
    actual: iterator.next().value,
    expected: put(Actions.LoadingPage.onLoadingFull()),
  })

  assert({
    given: 'next step',
    should: 'call toast with error message',
    actual: iterator.next().value,
    expected: call(toast.error, error, {
    className: 'toast',
    autoClose: 2500,
  }),
  })

  assert({
    given: 'next step',
    should: 'wait before clearing the error message',
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
