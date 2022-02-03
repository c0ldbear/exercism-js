//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
	let valueStr = '';
	let color = '';
	for (let n = 0; n < 2; n++) {
		color = colors[n];
		valueStr += String(COLORS.indexOf(colors[n]));
	}
	return parseInt(valueStr);
};

const COLORS = [ 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white' ];
