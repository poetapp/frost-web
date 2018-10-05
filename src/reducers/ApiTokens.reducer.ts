import { Actions } from 'actions/index'

export const defaultState = {
  tokens: new Array(),
}

export const apiTokens = (state: any = defaultState, action: any = {}) => {
  switch (action.type) {
    case Actions.ApiTokens.onGetApiTokensSuccess().type:
      return {
        ...state,
        tokens: action.payload.apiTokens,
      }

    case Actions.ApiTokens.onCreateApiTokenSuccess().type:
      return {
        ...state,
        tokens: [...state.tokens, action.payload.apiToken],
      }

    case Actions.ApiTokens.onDeleteApiTokenSuccess().type:
      const apitTokensFilter = state.tokens.filter((token: string) => token !== action.payload.apiToken)
      return {
        ...state,
        tokens: apitTokensFilter,
      }
  }
  return state
}
