//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
	let valueArr = colors.map((color) => {
		return COLORS.indexOf(color);
	});
	let valueStr = String(valueArr.slice(0, 2)).replace(',', '');
	return parseInt(valueStr);
};

const COLORS = [ 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white' ];
