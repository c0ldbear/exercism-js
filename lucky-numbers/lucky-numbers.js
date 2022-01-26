// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
	// Another way of solving the problem (Harder/More complex?)
	// const number1 = Number(String(array1).replace(/,/g, ''));
	// const number2 = Number(String(array2).replace(/,/g, ''));

	const number1 = Number(array1.join(''));
	const number2 = Number(array2.join(''));
	return number1 + number2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
	const numString = String(value);
	const halfLength = Math.floor(numString.length / 2);
	const firstHalf = numString.slice(0, halfLength);
	const reversed = firstHalf.split('').reverse().join('');
	if (numString.endsWith(reversed)) {
		return true;
	}
	return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
	if (!input) {
		return `Required field`;
	}
	if (!Number(input)) {
		return `Must be a number besides 0`;
	}
	return '';
	throw new Error('Implement the errorMessage function');
}
