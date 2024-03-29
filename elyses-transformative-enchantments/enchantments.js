// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
	return deck.map((card) => card * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
	let newDeck = [];
	// deck.map((card) => {
	// 	if (card === 3) {
	// 		for (let n = 0; n < 2; n++) {
	// 			newDeck.push(card);
	// 		}
	// 	}
	// 	newDeck.push(card);
	// });
	// return newDeck;
	deck.reduce((acc, value) => {
		if (value === 3) {
			acc.push(value);
			acc.push(value);
		}
		acc.push(value);
		return acc;
	}, newDeck);
	return newDeck;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
	return deck.slice(4, 6);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
	const first = deck.splice(0, 1);
	const last = deck.splice(-1, 1);
	const halfSize = Math.floor(deck.length / 2);
	const firstHalf = deck.splice(0, halfSize);
	return [ ...firstHalf, ...last, ...first, ...deck ];
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
	let newDeck = [];
	deck.reduce((acc, value) => {
		if (value === 2) {
			acc.push(2);
		}
		return acc;
	}, newDeck);
	return newDeck;
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
	// Found on MDN, this sorts the array in ascending order
	return deck.sort((value, nextValue) => value - nextValue);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
	return deck.reverse();
}
