/**
*
*	VALIDATE: alphagram
*
*
*	DESCRIPTION:
*		- Validates if a value is an alphagram.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isString = require( 'validate.io-string' );


// ALPHAGRAM //

/**
* FUNCTION: alphagram( value )
*	Validates if a value is an alphagram.
*
* @param {*} value - input value
* @returns {Boolean} boolean indicating whether a value is an alphagram
*/
function alphagram( str ) {
	var len, i;
	if ( !isString( str ) ) {
		return false;
	}
	len = str.length;
	if ( !len ) {
		return false;
	}
	for ( i = 1; i < len; i++ ) {
		if ( str[ i-1 ] > str[ i ] ) {
			return false;
		}
	}
	return true;
} // end FUNCTION alphagram()


// EXPORTS //

module.exports = alphagram;
