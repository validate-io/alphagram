/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isAlphagram = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-alphagram', function tests() {

	it( 'should export a function', function test() {
		expect( isAlphagram ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isAlphagram( 'abcdef' ) );
		assert.ok( isAlphagram( new String( 'beep' ) ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'zba',
			'akjdfa',
			' abc   ',
			'',
			5,
			null,
			NaN,
			undefined,
			true,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( isAlphagram( values[ i ] ) );
		}
	});

});
