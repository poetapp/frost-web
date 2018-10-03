import { Actions } from 'actions/index'

const defaultState = {
  tokens: new Array(),
}

export const apiTokens = (state: any, action: any) => {
  switch (action.type) {
    case Actions.ApiTokens.onGetApiTokensSuccess().type:
      return {
        ...state,
        tokens: action.payload,
      }

    case Actions.ApiTokens.onCreateApiTokenSuccess().type:
      return {
        ...state,
        tokens: [...state.tokens, action.payload],
      }

    case Actions.DeleteApiToken.onDeleteApiTokenSuccess().type:
      const apitTokensFilter = state.tokens.filter((token: string) => token !== action.payload)
      return {
        ...state,
        tokens: apitTokensFilter,
      }
  }
  return state || defaultState
}
