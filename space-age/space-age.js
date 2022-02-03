//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
	return yearsOnPlanet(planet, seconds);
};

function yearsOnPlanet(planet, seconds) {
	let factor = 1; // EARTH factor
	switch (planet) {
		case 'mercury':
			factor = 1 / 0.2408467;
			break;
		case 'venus':
			factor = 1 / 0.61519726;
			break;
		case 'mars':
			factor = 1 / 1.8808158;
			break;
		case 'jupiter':
			factor = 1 / 11.862615;
			break;
		case 'saturn':
			factor = 1 / 29.447498;
			break;
		case 'uranus':
			factor = 1 / 84.016846;
			break;
		case 'neptune':
			factor = 1 / 164.79132;
			break;
		default:
		// EARTH is default
	}
	return roundToTwoDigits(convertSecondsToEarthYears(seconds) * factor);
}

function convertSecondsToEarthYears(seconds) {
	return seconds / EARTH_YEAR_IN_SECONDS;
}

function roundToTwoDigits(number) {
	return Math.round(number * 100) / 100;
}

const EARTH_YEAR_IN_SECONDS = 31557600;
