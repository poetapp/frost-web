import { JWT } from 'interfaces/Props'
import * as moment from 'moment'

const timestampToDateJS = (timestamp: number) => new Date(timestamp * 1000)

export const parseJwt = (token: string): JWT => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  const parsedToken = JSON.parse(window.atob(base64))
  return {
    iat: timestampToDateJS(parsedToken.iat),
    exp: timestampToDateJS(parsedToken.exp)
  }
}
