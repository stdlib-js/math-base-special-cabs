/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var hypot = require( '@stdlib/math-base-special-hypot' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );


// MAIN //

/**
* Computes the absolute value of a double-precision complex floating-point number.
*
* @param {Complex128} z - complex number
* @returns {number} absolute value
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
*
* var v = cabs( new Complex128( 5.0, 3.0 ) );
* // returns ~5.83
*/
function cabs( z ) {
	// TODO: consider whether to use C99 rules for special cases involving infinities and nans (see https://github.com/python/cpython/blob/f4c03484da59049eb62a9bf7777b963e2267d187/Objects/complexobject.c#L191)
	return hypot( real( z ), imag( z ) );
}


// EXPORTS //

module.exports = cabs;
