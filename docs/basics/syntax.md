# Syntax

## Anweisungen

### Anweisungsende: Semikolon

Eine JavaScript-Anweisung kann sich über mehrere Zeilen verteilen und wird abgeschlossen durch ein Semikolon.

```js
console.log(`
    Das ist ein mehrzeiliger String.
`);
console
    .log('Eigenwillige, aber korrekte Formatierung');
```

### Einrückungen

Einrückungen und zusätzlicher Leeraum (Leerzeichen, Tabulator-Zeichen, Zeilenwechsel) spielen im Quellcode keine Rolle und sollen lediglich die Lesbarkeit erhöhen.

```js
const isImportant = true;
if (isImportant)
    console.log('It\'s important.');
console.log('Printed anyway);
```

### Anweisungsblöcke

Statt einer einzelnen Anweisung kann auch ein Anweisungsblock stehen. Häufigste Verwendung ist bei der strukturierten Programmierung (bedingte und wiederholte Ausführung).

```js
const isVeryImportant = true;
if (isVeryImportant) {
    console.log('It\'s important.');
    console.log('Got it? Important!');
}
```

### ASI

Ein kleiner Fallstrick und Gegenstand jahrelanger Diskussionen in der JavaScript-Welt ist die **ASI (Automatic semicolon injection)**. Der JavaScript-Interpreter fügt an gegebener Stelle für uns Semikolons ein - falls wir sie vergessen haben (?!).

```js
function add(a,b) {
    result = a + b
    return {
        result: result
    }
}
console.log(add(17,4))
```

## Kommentare

JavaScript unterscheidet zwischen zwei Kommentarformen: einzeiligem und mehrzeiligem Kommentar

### Einzeiliger Kommentar

In einer Zeile wird der Kommentar eingeleitet durch `//` und endet automatisch mit dem Ende der Zeile.

```js
// Einfache Ausgaben über die Konsole
console.log('Hallo Welt');  // Zum Anschauen dieser Ausgabe: Entwicklertools
```

### Mehrzeiliger Kommentar

Falls ein längerer Kommentar über mehrere Zeilen erstellt werden soll, kann der
Text in Kommentarklammern eingefasst werden `/* .... */`.

```js
/*
 * Der Stern hier vorne hat keine Bedeutung,
 * er dient lediglich dem schicken Aussehen.
 */
```

> Auf mehrzeiligen Kommentar sollte zwischen Anweisungen verzichtet werden. Dort sollte er eher zum Ein- und Auskommentieren von Code-Blöcken genutzt werden.

```js
console.log('Eine Nachricht');
/*
    console.log('Früher wurde auch das ausgegeben');
    console.log('Aber es war eher unwichtig.'); // Aber eben nicht für alle
    console.log('Ich will es aber im Code stehen lassen.');
*/
```

### JSDoc

Sinnvoller ist mehrzeiliger Kommentar vor der Definition von Funktionen und Klassen. Und zwar in seiner speziellen JSDoc-Form. Siehe: [JSDOC](https://jsdoc.app/).

```js
/**
 * Add two numbers
 *
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 */
function add(a, b) {
    return a+b;
}
```

## Variablen

### Deklaration

Variablen werden mit den Schlüsselwörtern `let` und `const` deklariert.

```js
let counter = 0;
counter = 1;

const maximum = 10;

// maximum = 100;
// Neu-Zuweisung, Fehler!
```

Vor JavaScript 2015 wurden Variablen ausschließlich mit dem Schlüsselwort `var` deklariert. Dies sollte heute vermieden werden.

```js
const bedingung = true;
if (bedingung) {
    let tempVar = 21;   // Scoped to block
    var globalVar = 21; // Not scoped, but global
}
console.log(typeof tempVar);   // undefined
console.log(typeof globalVar); // number
```

### Konstante Objekte und Arrays

Objekte und Arrays, die konstanten Variablen zugewiesen werden, bleiben weiter veränderbar (***mutable***). Konstant ist lediglich die Variable, also der Verweis auf das Objekt bzw. Array.

```js
const person = {
    firstname: 'Markus'
};
const primzahlen = [2, 3, 5, 7];
person.firstname = 'Klaus';
person.lastname = 'Lage';
primzahlen.push(11, 13, 17, 19);
console.log(person);
console.log(primzahlen);
```

## Ausdrücke und Operatoren

### Ausdruck / Expression

Ein JavaScript-Ausdruck "steht" für einen Wert. Die einfachste Form ist ein literaler primitiver Wert.

```js
42;
```

Natürlich ist auch eine Variable oder die Rückgabe einer aufgerufenen Funktion ein Ausdruck:

```js
const zahl = '17';
zahl;
parseInt(zahl);
```

### Operatoren

Ausdrücke können mit Operatoren kombiniert werden und liefern neue Werte. JavaScript kennt gängige mathematische, bit-weise, relationale und logische Operatoren.

```js
// Mathematische Operatoren
let summe = 0;
summe = 17 + 4;
summe = summe + 42;
summe += 21; // increment by twentyone
summe++; // increment by one
const average = summe / 5;

// Bit-weise Operatoren
const verdoppelt = summe << 1;
const erstesBit = summe & 1;

// Relationale Operatoren
const groesserAls = 17 > 4; // true

// Logische Operatoren
const logischesUnd = true && false; // false
```

> Zu den logischen Operatoren gibt es einen Unterabschnitt [Syntax/Logische Operatoren](../syntax/logical-operators.md).

Zeichenketten-Verknüpfungen werden ebenfalls mit dem `+` Operator durchgeführt.

```js
const name = 'Thomas' + ' ' + 'Müller';
name += ' (Fussballspieler)';
```

Falls einer nur der beiden Operanden vom Typ `string` ist, wird trotzdem eine Zeichenketten-Verknüpfung durchgeführt (der zweite also automatisch in seine Zeichenkette überführt - **toString**-Aufruf). Anders bei den anderen mathematischen Operatoren, hier wird versucht eine Konvertierung nach `number` durchzuführen.

```js
console.log('17' + 4);
console.log('17' * 4);
```
