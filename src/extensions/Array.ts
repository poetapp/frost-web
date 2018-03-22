interface Array<T> {
  filterTruthy(): T[]
  toObject(cb: (el: any) => { readonly key: string; readonly value: any }): any
}
interface ReadonlyArray<T> {
  filterTruthy(): T[]
  toObject(cb: (el: any) => { readonly key: string; readonly value: any }): any
}

if (!Array.prototype.includes)
  Array.prototype.includes = function(elem): boolean {
    return this.indexOf(elem) !== -1
  }

Array.prototype.filterTruthy = function(): any[] {
  return this.filter((a: any) => a)
}

Array.prototype.toObject = function(
  cb: (el: any) => { readonly key: string; readonly value: any }
): object {
  const object: any = {}

  for (const el of this) {
    const { key, value } = cb(el)
    object[key] = value
  }

  return object
}
