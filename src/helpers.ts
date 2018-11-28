import { getCurrentActiveFeatureNames, isActiveFeatureName } from '@paralleldrive/feature-toggles'

import { initialFeatures, FeatureName } from 'config/features'
import { JWT, Network } from 'interfaces/Props'

const timestampToDateJS = (timestamp: number) => new Date(timestamp * 1000)

export const parseJwt = (token: string): JWT => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  const parsedToken = JSON.parse(window.atob(base64))
  return {
    iat: timestampToDateJS(parsedToken.iat),
    exp: parsedToken.exp && timestampToDateJS(parsedToken.exp),
    network: parsedToken.network || Network.TEST,
  }
}

export const getParsedForm = (
  form: HTMLFormElement,
): {
  readonly currentData: object
  readonly elements: { readonly [key: string]: HTMLInputElement },
} => {
  const data = new FormData(form)

  const defaultValue = { elements: {}, currentData: {} }
  return [...data.entries()].reduce((acum: any, currentElement: any, index: number) => {
    const input = form.elements[index] as HTMLInputElement
    const value = input.value
    const name = input.name
    const currentData = { ...acum.currentData, ...{ [name]: value } }
    const elements = { ...acum.elements, ...{ [name]: input } }
    return { currentData, elements }
  }, defaultValue)
}

export const capitalize = ([first, ...rest]: string) => first.toUpperCase() + rest.join('').toLowerCase()
export const getTextButtonByNetwork = (network: Network) => `Create API Token for ${capitalize(network)}`
export const getTextButton = () => 'Create API Token'
