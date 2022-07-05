# Namnsdag - Swedish name day calendar

* A JS library with the Swedish name day calendar.
* Includes a REST API that returns the names of the current day.

## Features
* Vanilla node.js - no runtime depdencies.

* Up to date with the 2022 edition of the name calendar published by *Namnlängdskommittén*.

## How to use it

### REST API
* Request method: `GET`
* Path: `/`
* Returns: JSON array of names for the current day.

Usage example:
```bash
$ node namnsdag.js
Namnsdag-server is running...

$ curl http://localhost:4242
["Laila","Ritva"]
```

### Library
* Days with names returns an array of strings.
* Nameless days returns `undefined`.


```javascript
var months = require("./data.js");
       var [
                january,
                february,
                mars,
                april,
                may,
                june,
                july,
                august,
                september,
                october,
                november,
                december
            ] = months;

var leapDay = february[29]; // undefined
var aprilFoolsDay = april[1]; // [ "Hararld", "Hervor" ]
```

## Build
Requirements:

* node.js v10.x or later.

npm is only required in order to install dependencies used by the unit tests.

```bash
$ npm install
$ npm test
```

## Licence
LGPL v2.1 only.

See [COPYING](COPYING).

### Further reading:

* [The perils of LGPLv3](https://nikmav.blogspot.com/2013/03/the-perils-of-lgplv3.html)

* FSF [LGPL compatibility matrix](http://gplv3.fsf.org/dd3-faq#gpl-compat-matrix)

### Libraries
Uses [JEST](https://github.com/facebook/jest) for unit tests.


## References
* [Namnlängden](https://www.svenskaakademien.se/svenska-akademien/almanackan/namnlangden), Svenska akademien.
* [Namnsdagar i almanackan](https://www.isof.se/lar-dig-mer/kunskapsbanker/lar-dig-mer-om-personnamn-i-sverige/namnsdagar-i-almanackan), Institutet för språk och folkminnen.

