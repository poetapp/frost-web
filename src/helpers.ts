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
