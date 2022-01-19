//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGASECOND = 10 ** 9;

export const gigasecond = (aDate) => {
	const dateMilliseconds = aDate.getTime();
	const newDate = dateMilliseconds / 1000 + GIGASECOND;
	return new Date(newDate * 1000);
};
