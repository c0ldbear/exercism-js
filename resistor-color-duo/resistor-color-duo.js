//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
	const [ first, second ] = colors;
	return getResistorColorValue(first, second);
};

function getColorsValue(colorString) {
	return COLORS.indexOf(colorString);
}

function getResistorColorValue(first, second) {
	return getColorsValue(first) * 10 + getColorsValue(second);
}

const COLORS = [ 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white' ];
