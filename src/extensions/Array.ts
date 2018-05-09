/* tslint:disable:readonly-keyword no-object-mutation */
interface Array<T> {
  filterTruthy: () => ReadonlyArray<T>
  toObject: (cb: (el: any) => { readonly key: string; readonly value: any }) => any
}
interface ReadonlyArray<T> {
  filterTruthy: () => ReadonlyArray<T>
  toObject: (cb: (el: any) => { readonly key: string; readonly value: any }) => any
}

if (!Array.prototype.includes)
  Array.prototype.includes = function(elem): boolean {
    return this.indexOf(elem) !== -1
  }

Array.prototype.filterTruthy = function(): ReadonlyArray<any> {
  return this.filter((a: any) => a)
}

Array.prototype.toObject = function(cb: (el: any) => { readonly key: string; readonly value: any }): object {
  return this.reduce((acum: object, currentValue: any) => {
    const { key, value } = cb(currentValue)
    return { ...acum, [key]: value }
  }, {})
}
