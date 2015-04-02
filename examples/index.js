'use strict';

var isAlphagram = require( './../lib' );

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
