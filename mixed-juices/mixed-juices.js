// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const juices = [ 'Pure Strawberry Joy', 'Energizer', 'Green Garden', 'Tropical Island', 'All or Nothing' ];

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
	switch (name) {
		case juices[0]:
			return 0.5;
			break;
		case juices[1]:
		case juices[2]:
			return 1.5;
			break;
		case juices[3]:
			return 3;
			break;
		case juices[4]:
			return 5;
			break;
		default:
			return 2.5;
	}
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
	let limeCount = 0;
	let wedgeCount = 0;

	if (limes.length < 1 || wedgesNeeded == 0) return 0;

	do {
		switch (limes[limeCount]) {
			case 'small':
				wedgeCount += 6;
				break;
			case 'medium':
				wedgeCount += 8;
				break;
			default:
				wedgeCount += 10;
		}

		limeCount++;
		if (limeCount == limes.length) break;
	} while (wedgeCount < wedgesNeeded);
	return limeCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
	let prepTime = 0;
	let orderNumber = 0;
	while (prepTime < timeLeft) {
		prepTime += timeToMixJuice(orders.shift());
	}
	return orders;
}
