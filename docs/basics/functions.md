# Funktionen

## Deklaration/Definition

Funktionen können auf drei verschiedene Arten erzeugt werden:

* **`function`**-Schlüsselwort und Deklaration
* **`function`**-Schlüsselwort in Ausdrücken
* **fat-arrow**-Syntax in Ausdrücken

### Funktions-Deklaration

```js
function doubleValue(z) {
    return z * 2;
}
```

### Funktions-Ausdruck

```js
const tripleValue = function (z) {
    return z * 3;
}
```

### Fat-Arrow Syntax

```js
const halfValue = z => { return z / 2; }
const add = (a,b) => a + b;
```

Auch wenn es Unterschiede bei den drei Varianten gibt (Hoisting, **this**-Bindung), können sie in der Regel gleichartig benutzt werden.
