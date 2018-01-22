interface String {
  firstAndLastCharacters(amount: number): string
  trimLeft(pattern: string): string
}

String.prototype.firstAndLastCharacters = function(amount: number) {
  return this.slice(0, amount) + '...' + this.slice(-amount)
}
