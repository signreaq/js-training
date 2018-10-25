'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
const multiplyPlain = (number, otherNumber) => {
	let result = 0;
	const otherNumberPositive = !!(otherNumber >= 0)
	const numberOfAdditions = otherNumberPositive ? otherNumber : -otherNumber
	for (let i = 0; i < numberOfAdditions; i++) {
	result = result + number
	}
	if (result === -0) {
	return 0
	}
	return otherNumberPositive ? result : -result
	}
	
	const multiply = (number, multiplier) => {
	if (number === 0 || multiplier === 0) {
	return 0
	}
	const isMultiplierNegative = multiplier < 0
	const multiplierAbsoluteValue = isMultiplierNegative ? -multiplier : multiplier
	if (multiplierAbsoluteValue === 1) {
	return number
	}
	const resultAbsoluteValue = number + multiply(number, multiplierAbsoluteValue - 1)
	return isMultiplierNegative ? -resultAbsoluteValue : resultAbsoluteValue
	}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
