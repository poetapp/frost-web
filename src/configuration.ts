import { map, pipe, fromPairs, keys } from 'ramda'

interface Configuration {
  readonly frostApiUrl: string
}

const defaultConfiguration = {
  frostApiUrl: 'http://frost-api:3000',
}

const ConfigFromWebpack: Configuration = require('Configuration')

export const camelCaseToScreamingSnakeCase = (camelCase: string = '') =>
  camelCase.replace(/([A-Z])/g, capital => '_' + capital).toUpperCase()

const toPair = (s: string) => [camelCaseToScreamingSnakeCase(s), s]

const extractValue = (value: any) => {
  const coercedValue = value === 'true' ? true : value === 'false' ? false : value

  return isNaN(coercedValue)
    ? coercedValue
    : typeof coercedValue === 'boolean'
      ? coercedValue
      : parseInt(coercedValue, 10)
}

export const createEnvToConfigurationKeyMap: (keys: ReadonlyArray<string>) => {
  readonly [index: string]: string,
} = pipe(
  map(toPair),
  fromPairs,
)

const loadConfigurationFromEnv = (env: any): Partial<Configuration> => {
  const map = createEnvToConfigurationKeyMap(keys(defaultConfiguration))

  const configurationFromEnv = Object.entries(env)
    .filter(([key, value]) => map[key])
    .filter(([key, value]) => value !== undefined)
    .reduce(
      (previousValue, [key, value]: [string, any]) => ({
        ...previousValue,
        [map[key]]: extractValue(value),
      }),
      {},
    )
  return configurationFromEnv
}

export const mergeConfigs = (envVars: any = {}) => {
  const config = {
    ...defaultConfiguration,
    ...ConfigFromWebpack,
    ...loadConfigurationFromEnv(envVars),
  }
  return config
}

export const Configuration = mergeConfigs(process.env)
