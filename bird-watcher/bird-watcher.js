// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
	let total = 0;
	for (let count of birdsPerDay) {
		total += count;
	}
	return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
	const maxIteration = week * 7;
	const startIteration = (week - 1) * 7;
	let total = 0;
	for (let i = startIteration; i < maxIteration; i++) {
		total += birdsPerDay[i];
	}
	return total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
	const maxIter = birdsPerDay.length;
	for (let i = 0; i < maxIter; i += 2) {
		birdsPerDay[i]++;
	}
	return birdsPerDay;
}
