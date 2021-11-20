# Spread

## Beschreibung

Die Spread-Syntax ist ein bequemer Weg zur Verarbeitung von Arrays (bzw. Iterables im Allgemeinen) und Objekten.

Der Spread auf ein Iterable angewendet, expandiert die Elemente zu einer Liste von Elementen in Ausdrücken, die eben eine Liste erwarten.

Ein praktisches Beispiel:

```js
function sum(a, b, c) {
    return a+b+c;
}

const zahlen = [1, 2, 3];
console.log(sum(zahlen[0], zahlen[1], zahlen[2]));
console.log(sum.apply(null, numbers));
console.log(sum(...zahlen));
```

## Array Spread

Für Funktionsaufrufe:

```js
anyFunction(17, 4, ...iterable);
```

Für Array-Kopien bzw. Zusammenführungen:

```js
const destination = ['First', ...iterable, 'Last'];
```

## Object Spread

Seit JavaScript 2018 kann der Spread-Operator auch auf Objekte angewendet werden. Jetzt
wird über die Properties eines Objektes iteriert.

```js
const obj = { a: 17, b: 4};
const objClone = { ...obj };
const defaults = obj;
const derivedObj = { ...defaults, b: 24, c: 42};
```
