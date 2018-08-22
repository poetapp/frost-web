import { describe } from 'riteway'

import { Actions } from '../actions'
import { changePassword as reducer, defaultState } from './ChangePassword.reducer'

const { onChangePassword, onChangePasswordError, onChangePasswordSuccess } = Actions.ChangePassword
const createState = (obj?: any) => ({ ...defaultState, ...obj })

describe('changePassword reducer', async (should: any) => {
  const { assert } = should()

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
      error: {
        status: true,
        message: 'alert!',
      },
      loading: false,
    })

    const expected = createState({
      error: {
        status: false,
        message: '',
      },
      loading: true,
    })

    const actual = reducer(currentState, onChangePassword())

    assert({
      given: `a current state and an action "${onChangePassword().type}"`,
      should: 'set loading to true, error status to false and clear the error message',
      actual,
      expected,
    })
  }

  {
    const currentState = createState({
      error: {
        status: true,
        message: 'alert!',
      },
      loading: true,
    })

    const expected = createState({
      error: {
        status: false,
        message: '',
      },
      loading: false,
    })

    const actual = reducer(currentState, onChangePasswordSuccess())

    assert({
      given: `a current state and an action "${onChangePasswordSuccess().type}"`,
      should: 'set loading to false, error status to false and clear the error message',
      actual,
      expected,
    })
  }

  {
    const currentState = createState({
      error: {
        status: false,
        message: '',
      },
      loading: true,
    })

    const expected = createState({
      error: {
        status: true,
        message: { msg: 'crash' },
      },
      loading: false,
    })

    const actual = reducer(currentState, onChangePasswordError({ msg: 'crash' }))

    assert({
      given: `a current state and an action "${onChangePasswordError().type}"`,
      should: 'set loading to false, error status to true and contain an error message',
      actual,
      expected,
    })
  }
})
