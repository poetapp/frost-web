import { describe } from 'riteway'
 import { Actions } from '../actions/index'
import { createClaim, defaultState } from './CreateClaim.reducer'

const createState = ({
  error = {
    status: false,
    message: '',
  },
  loading = false,
} = {}) => ({
  error,
  loading,
})

describe('createClaim reducer', async assert => {

  assert({
    given: 'no arguments',
    should: 'defaultState',
    actual: createClaim(),
    expected: defaultState,
  })

  assert({
    given: 'default state and SUBMIT action',
    should: 'loading true',
    actual: createClaim(defaultState, Actions.CreateClaim.onCreateClaim()),
    expected: createState({ loading: true }),
  })

  assert({
    given: 'loading true and SUBMIT_SUCCESS action',
    should: 'default state',
    actual: createClaim(
      defaultState,
      Actions.CreateClaim.onCreateClaimSuccess()
    ),
    expected: defaultState
  });

  {
    const e = 'test'

    assert({
      given: 'default state and SUBMIT_ERROR action',
      should: 'state with error ',
      actual: createClaim(
        defaultState,
        Actions.CreateClaim.onCreateClaimError(e)
      ),
      expected: createState({
        error: {
          status: true,
          message: e
        }
      })
    });
  }

  {
    const e = 'test'

    assert({
      given: 'state with error message and SUBMIT_ERROR action',
      should: 'state with new error message ',
      actual: createClaim(
        createState({ error: { status: true, message: 'not-test' } }),
        Actions.CreateClaim.onCreateClaimError(e)
      ),
      expected: createState({
        error: {
          status: true,
          message: e
        }
      })
    });
  }

  assert({
    given: 'default state and CLEAR_ERROR action',
    should: 'default state',
    actual: createClaim(defaultState, Actions.CreateClaim.onCreateClaimClearError()),
    expected: defaultState,
  })

  {
    const e = 'test'
    assert({
      given: 'state with error message and CLEAR_ERROR action',
      should: 'default state ',
      actual: createClaim(
        createState({ error: { status: true, message: e } }),
        Actions.CreateClaim.onCreateClaimClearError()
      ),
      expected: defaultState
    });
  }
})