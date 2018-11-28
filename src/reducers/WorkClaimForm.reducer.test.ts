import { describe } from 'riteway'
 import { Actions } from '../actions/index'
import { WorkClaimForm, defaultState } from './WorkClaimForm.reducer'

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

describe('WorkClaimForm reducer', async assert => {

  assert({
    given: 'no arguments',
    should: 'defaultState',
    actual: WorkClaimForm(),
    expected: defaultState,
  })

  assert({
    given: 'default state and SUBMIT action',
    should: 'loading true',
    actual: WorkClaimForm(defaultState, Actions.WorkClaimForm.onSubmit()),
    expected: createState({ loading: true }),
  })

  assert({
    given: 'loading true and SUBMIT_SUCCESS action',
    should: 'default state',
    actual: WorkClaimForm(defaultState, Actions.WorkClaimForm.onSubmitSuccess()),
    expected: defaultState,
  })

  {
    const e = 'test'

    assert({
      given: 'default state and SUBMIT_ERROR action',
      should: 'state with error ',
      actual: WorkClaimForm(defaultState, Actions.WorkClaimForm.onSubmitError(e)),
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
      given: 'state with error message and SUBMIT_ERROR action',
      should: 'state with new error message ',
      actual: WorkClaimForm(createState({ error: { status: true, message: 'not-test' } }), Actions.WorkClaimForm.onSubmitError(e)),
      expected: createState({
        error: {
          status: true,
          message: e,
        },
      }),
    })
  }

  assert({
    given: 'default state and SUBMIT_CLEAR_ERROR action',
    should: 'default state',
    actual: WorkClaimForm(defaultState, Actions.WorkClaimForm.onSubmitClearError()),
    expected: defaultState,
  })

  {
    const e = 'test'
    assert({
      given: 'state with error message and SUBMIT_CLEAR_ERROR action',
      should: 'default state ',
      actual: WorkClaimForm(createState({ error: { status: true, message: e } }), Actions.WorkClaimForm.onSubmitClearError()),
      expected: defaultState,
    })
  }
})