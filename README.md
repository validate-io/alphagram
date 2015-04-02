alphagram
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is an [alphagram](http://en.wikipedia.org/wiki/Alphagram).


## Installation

``` bash
$ npm install validate.io-alphagram
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isAlphagram = require( 'validate.io-alphagram' );
```

#### isAlphagram( value )

Validates if a `value` is an [alphagram](http://en.wikipedia.org/wiki/Alphagram) (i.e., a sequence of characters arranged in alphabetical order).

``` javascript
var value = 'beep';

var bool = isAlphagram( value );
// returns true
```

__Note__: the `function` first checks that an input `value` is a `string` before validating that the `value` is an [alphagram](http://en.wikipedia.org/wiki/Alphagram). For non-string values, the `function` returns `false`.


## Examples

``` javascript
var isAlphagram = require( 'validate.io-alphagram' );

console.log( isAlphagram( 'beep' ) );
// returns true

console.log( isAlphagram( new String( 'beep' ) ) );
// returns true

console.log( isAlphagram( '' ) );
// returns false

console.log( isAlphagram( 'zba' ) );
// returns false

console.log( isAlphagram( 123 ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-alphagram.svg
[npm-url]: https://npmjs.org/package/validate.io-alphagram

[travis-image]: http://img.shields.io/travis/validate-io/alphagram/master.svg
[travis-url]: https://travis-ci.org/validate-io/alphagram

[coveralls-image]: https://img.shields.io/coveralls/validate-io/alphagram/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/alphagram?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/alphagram.svg
[dependencies-url]: https://david-dm.org/validate-io/alphagram

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/alphagram.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/alphagram

[github-issues-image]: http://img.shields.io/github/issues/validate-io/alphagram.svg
[github-issues-url]: https://github.com/validate-io/alphagram/issues
