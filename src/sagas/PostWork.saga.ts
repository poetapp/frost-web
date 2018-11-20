import { Frost } from '@po.et/frost-client'
import { Actions } from 'actions'
import { browserHistory } from 'react-router'
import { delay, SagaIterator } from 'redux-saga'
import { call, takeLatest, put, ForkEffect } from 'redux-saga/effects'

import { Configuration } from 'configuration'

export interface ClaimAttributes {
  readonly [key: string]: string
}

export interface WorkAttributes extends ClaimAttributes {
  readonly name: string
  readonly datePublished: string
  readonly dateCreated: string
  readonly author: string
  readonly tags?: string
  readonly text: string
}

async function postWorkFrost(data: {
  readonly token: string
  readonly work: WorkAttributes,
}): Promise<{ readonly workId: string }> {
  const { token, work } = data
  const frost = new Frost({ host: Configuration.frostApiUrl })
  return await frost.createWork(token, work)
}

export function PostWorkSaga(): () => IterableIterator<ForkEffect> {
  return function*(): IterableIterator<ForkEffect> {
    yield takeLatest(Actions.PostWork.POST_WORK, PostWork)
  }
}

function* PostWork(action: any): SagaIterator {
  try {
    const { token, work } = action.payload
    yield put(Actions.LoadingPage.onLoadingOn())
    const { workId } = yield call(postWorkFrost, { token, work })
    yield put(Actions.PostWork.onPostWorkSuccess())
    yield put(Actions.LoadingPage.onLoadingFull())
    yield call(delay, 300)
    browserHistory.push('/dashboard')
  } catch (e) {
    yield put(Actions.LoadingPage.onLoadingFull())
    yield put(Actions.PostWork.onPostWorkError(e))
    yield call(delay, 300)
    yield put(Actions.PostWork.onPostWorkClearError())
  }
}
