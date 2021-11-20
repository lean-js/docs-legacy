# Destructuring

## Beschreibung

Destructuring wird in Deklarationen eingesetzt. Diese Zuweisung dient zum Verteilen von Elementen des Iterables bzw. Keys eines Objektes auf distinkte neue Variablen.

```js
const zahlen = [1,2];
const [z1, z2] = zahlen;
const person = { fname: 'John', lname: 'Resig' };
const { fname, lname } = person;
```

## Array Destructuring

### Deklaration von neuen Variablen

```js
const numbers = [1,2,3,4];
const [n1, n2] = numbers;
const [first, , third, ...rest] = numbers;
const [z1, z2, z3, z4, z5 = 5] = numbers;
```

### Getrennte Deklaration und Zuweisung

```js
const languages = ['JavaScript', 'TypeScript'];
let js, ts;
[js, ts] = languages;
```

### Swapping of Variables

```js
let a = 17, b = 4;
[b, a] = [a, b];
```

## Object Destructuring

### Deklaration von neuen Variablen

```js
const user = {
    id: 17,
    name: 'Brendan Eich'
};
const { id, name } = user;
```

### Getrennte Deklaration und Zuweisung

```js
let min, max;
({ min, max }) = { min: 1, max: 10 });
```

### Ändern des Variablennamens

```js
const { firstname: vorname, lastname: nachname } = {
    firstname: 'Axel',
    lastname: 'Rauschmayer
};
```

### Default Values

```js
const { firstname: vorname, lastname: nachname, titel = 'Dr.' } = {
    firstname: 'Axel',
    lastname: 'Rauschmayer
};
```

### Funktions-Parameter entpacken

```js
function printUser({ firstname, lastname }) {
    console.log(`${firstname} ${lastname}`);
}
function printLine({ length, extra: { character: char }}) {
    console.log(char.repeat(length));
}

const usr = { firstname: 'Eric', lastname: 'Meyer' };
printUser(usr);

const options = { length: 80, extra: { character: '*', ending: 'LF' }};
printLine(options);
```

### Default Argumente

```js
function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: {x: 18, y: 30},
  radius: 30
});
```
