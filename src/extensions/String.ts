/* tslint:disable:readonly-keyword no-object-mutation */
interface String {
  firstAndLastCharacters: (amount: number) => string
}

String.prototype.firstAndLastCharacters = function(amount: number): string {
  const negative = -amount
  return this.slice(0, amount) + '...' + this.slice(negative)
}
