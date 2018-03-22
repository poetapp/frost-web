import { JWT } from 'interfaces/Props'

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

export const getParsedForm = (form: any) => {
  const data = new FormData(form)

  const defaultValue = { elements: {}, currentData: {} }
  return [...data.entries()].reduce(
    (acum: any, currentElement: any, index: number) => {
      const input = form.elements[index]
      const value = input.value
      const name = input.name
      const currentData = { ...acum.currentData, ...{ [name]: value } }
      const elements = { ...acum.elements, ...{ [name]: input } }
      return { currentData, elements }
    },
    defaultValue
  )
}
