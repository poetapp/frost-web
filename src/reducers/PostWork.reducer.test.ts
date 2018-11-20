import { describe } from 'riteway'

import { Actions } from '../actions/index'
import { postWork, defaultState } from './PostWork.reducer'

const createState = ({
  error = {
    status: false,
    message: '',
  },
  loading = false,
  workId = '',
} = {}) => ({
  error,
  loading,
  workId,
})

const workId = 'testWorkId'

describe('postWork reducer', async assert => {
  assert({
    given: 'no arguments',
    should: 'defaultState',
    actual: postWork(),
    expected: defaultState,
  })

  assert({
    given: 'default state and POST_WORK action',
    should: 'loading true',
    actual: postWork(defaultState, Actions.PostWork.onPostWork()),
    expected: createState({ loading: true }),
  })

  assert({
    given: 'default state and POST_WORK_SUCCESS action',
    should: 'default state with the workId',
    actual: postWork(defaultState, Actions.PostWork.onPostWorkSuccess({ workId })),
    expected: { ...defaultState, workId },
  })

  assert({
    given: 'state with loading true and POST_WORK_SUCCESS action',
    should: 'default state with the workId',
    actual: postWork(createState({ loading: true }), Actions.PostWork.onPostWorkSuccess({ workId })),
    expected: { ...defaultState, workId },
  })

  {
    const e = 'test'
    assert({
      given: 'default state and POST_WORK_ERROR action',
      should: 'state with error ',
      actual: postWork(defaultState, Actions.PostWork.onPostWorkError(e)),
      expected: createState({
        error: {
          status: true,
          message: e,
        },
      }),
    })
  }

  {
    const e = 'test'
    assert({
      given: 'state with error message and POST_WORK_ERROR action',
      should: 'state with new error message ',
      actual: postWork(createState({ error: { status: true, message: 'not-test' } }), Actions.PostWork.onPostWorkError(e)),
      expected: createState({
        error: {
          status: true,
          message: e,
        },
      }),
    })
  }

  assert({
    given: 'default state and POST_WORK_CLEAR_ERROR action',
    should: 'default state',
    actual: postWork(defaultState, Actions.PostWork.onPostWorkClearError()),
    expected: defaultState,
  })

  {
    const e = 'test'
    assert({
      given: 'state with error message and POST_WORK_CLEAR_ERROR action',
      should: 'default state ',
      actual: postWork(createState({ error: { status: true, message: e } }), Actions.PostWork.onPostWorkClearError()),
      expected: defaultState,
    })
  }
})
