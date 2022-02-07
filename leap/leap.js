//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
	let leap = year % 4 === 0 ? true : false;
	if (leap) {
		if (year % 100 !== 0 || year % 400 === 0) {
			leap = true;
		} else {
			leap = false;
		}
	}
	return leap;
};
