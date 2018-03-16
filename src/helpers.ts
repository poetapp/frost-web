import { JWT } from 'interfaces/Props'

export const parseJwt = (token: string): JWT => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(base64))
}
