# Literal Objects

In JavaScript können Objekte einfach literal erzeugt werden:

```js
const konto1 = {
  nr: 1001,
  stand: 0,
  einzahlen(betrag) { this.stand += betrag; },
  auszahlen(betrag) {
    if (betrag > this.stand) {
      return false;
    }
    this.stand -= betrag;
    return true;
  }
}
```

Der große Pluspunkt von JavaScript ist, dass wir Objekte direkt anlegen können ohne
vorher eine Abstraktion zu machen (mit einer Klasse/Schablone).
