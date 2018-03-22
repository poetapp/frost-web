interface String {
  /* tslint:disable:readonly-keyword */
  firstAndLastCharacters: (amount: number) => string
  /* tslint:enable:readonly-keyword */
}

/* tslint:disable:no-object-mutation */
String.prototype.firstAndLastCharacters = function(amount: number): string {
  const negative = -amount
  return this.slice(0, amount) + '...' + this.slice(negative)
}
/* tslint:enable:no-object-mutation */
