/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeLeft) {
	if (timeLeft === undefined) return 'You forgot to set the timer.';
	if (timeLeft === 0) return 'Lasagna is done.';
	if (timeLeft > 0) return 'Not done, please wait.';
}

export function preparationTime(layers, prepMin = 2) {
	return layers.length * prepMin;
}

export function quantities(layers) {
	let noodles = 0;
	let sauce = 0;
	for (let layer of layers) {
		if (layer === 'noodles') {
			noodles += 50;
		}
		if (layer === 'sauce') {
			sauce += 0.2;
		}
	}
	return { noodles, sauce };
}

export const addSecretIngredient = (friendsList, myList) => {
	myList.push(friendsList.slice(-1)[0]);
	return;
};

export const scaleRecipe = (recipe, scale) => {
	const newRecipe = {};
	for (let key in recipe) {
		newRecipe[key] = recipe[key] * scale / 2;
	}
	console.log(newRecipe);
	return newRecipe;
};
