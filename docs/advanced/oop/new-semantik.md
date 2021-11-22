# New-Semantik

Die Semantik des new-Operators kann auch einfach nachgebaut werden:

```js
// Klasse: Konto
function Konto(nr) {
  this.nr = nr;
  this.stand = 0;
}
Konto.prototype.einzahlen = function (betrag) { this.stand += betrag; }

function create(Klasse, ...args) {
  // Create empty object with prototype
  const instance = Object.create(Klasse.prototyp);
  // Call constructor function on object
  Klasse.apply(instance, args);
}

const obj1 = new Konto(1001);
const obj2 = create(Konto, 1002)
```
