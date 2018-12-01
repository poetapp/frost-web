import { describe } from 'riteway'

import { Actions } from '../actions'
import { apiTokens as reducer, defaultState } from './ApiTokens.reducer'

const { onGetApiTokensSuccess, onCreateApiTokenSuccess, onDeleteApiTokenSuccess } = Actions.ApiTokens
const createState = (obj?: any) => ({ ...defaultState, ...obj })

describe('ApiTokens reducer', async (assert: any) => {
  assert({
    given: 'no arguments',
    should: 'return the default state',
    actual: reducer(),
    expected: createState(),
  })

  {
    const currentState = { foo: 1 }

    assert({
      given: 'a current state and a non-matching action type',
      should: 'return the current state',
      actual: reducer(currentState, { type: '_' }),
      expected: currentState,
    })
  }

  {
    const currentState = createState({
      tokens: []
    })

    const expected = createState({
      tokens: ['123']
    })

    const payload = { apiTokens: ['123'] }
    const actual = reducer(currentState, onGetApiTokensSuccess(payload))

    assert({
      given: `a current state and an action '${onGetApiTokensSuccess().type}'`,
      should: 'set the new state',
      actual,
      expected,
    })
  }

  {
    const currentState = createState({
      tokens: ['123']
    })

    const expected = createState({
      tokens: ['123', '456']
    })

    const payload = { apiToken: '456' }
    const actual = reducer(currentState, onCreateApiTokenSuccess(payload))

    assert({
      given: `a current state and an action '${onCreateApiTokenSuccess().type}'`,
      should: 'add new api token',
      actual,
      expected,
    })
  }

  {
    const currentState = createState({
      tokens: ['123', '456']
    })

    const expected = createState({
      tokens: ['123']
    })

    const payload = { apiToken: '456' }
    const actual = reducer(currentState, onDeleteApiTokenSuccess(payload))

    assert({
      given: `a current state and an action '${onDeleteApiTokenSuccess().type}'`,
      should: 'remove the api token',
      actual,
      expected,
    })
  }
})
