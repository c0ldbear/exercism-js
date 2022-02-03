//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
	const characters = [];
	checkLetters(washSentence(sentence), characters); // using the fact that the array is a reference
	return characters.length === 26;
};

// Brute force?
function checkLetters(sentence, characters) {
	sentence.forEach((char) => {
		if (!characters.includes(char)) return characters.push(char);
	});
}

function washSentence(sentence) {
	const regex = /[0-9\s\'\"\_\.\,!@#\$\%\^\&\*\(\)]/g; // Regex pattern to find numbers and punctuations and... more? I don't know
	return [ ...sentence.toLowerCase().replace(regex, '') ];
}
